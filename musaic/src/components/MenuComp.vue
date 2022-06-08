<template>
  <div class="bg-gray-800 pt-10 px-6 w-56">
    <nav class="text-white text-lg font-semibold font-montserrat">
      <ul class="flex flex-col items-center">
        <li>
          <router-link to="/">Accueil</router-link>
          <div class="h-px bg-purple-400 w-36 my-3"></div>
        </li>
        <li>
          <Menu>
            <MenuButton>
              <h2
                class="
                  text-white text-lg
                  font-semibold font-montserrat
                  text-left
                "
              >
                Musée
              </h2>
              <div class="h-px bg-purple-400 w-36 my-3"></div>
              <div class="sr-only">Menu</div></MenuButton
            >
            <MenuItems class="flex w-full flex-col gap-2 py-5">
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/musee"
                  :class="{
                    'bg-purple-800': active,
                    'bg-purple-400': !active,
                  }"
                  class="text-white text-base p-2 font-semibold font-montserrat"
                  >Mon musée</RouterLink
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/inventaire"
                  :class="{
                    'bg-purple-800': active,
                    'bg-purple-400': !active,
                  }"
                  class="text-white text-base p-2 font-semibold font-montserrat"
                  >Inventaire</RouterLink
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/decouvrir"
                  :class="{
                    'bg-purple-800': active,
                    'bg-purple-400': !active,
                  }"
                  class="text-white text-base p-2 font-semibold font-montserrat"
                  >Découvrir</RouterLink
                >
              </MenuItem>
            </MenuItems>
          </Menu>
        </li>
        <li>
          <router-link to="/boutique">Boutique</router-link>
          <div class="h-px bg-purple-400 w-36 my-3"></div>
        </li>
        <li v-if="avatar != null">
          <router-link to="/compte">Compte</router-link>
          <div class="h-px bg-purple-400 w-36 my-3"></div>
        </li>
        <li v-if="avatar == null">
          <router-link to="/connect">Compte</router-link>
          <div class="h-px bg-purple-400 w-36 my-3"></div>
        </li>
        <li v-if="isAdmin">
          <Menu>
            <MenuButton>
              <h2
                class="
                  text-white text-lg
                  font-semibold font-montserrat
                  text-left
                "
              >
                Admin
              </h2>
              <div class="h-px bg-purple-400 w-36 my-3"></div>
              <div class="sr-only">Menu admin</div></MenuButton
            >
            <MenuItems class="flex w-full flex-col gap-2 py-5">
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/tableau"
                  :class="{
                    'bg-purple-800': active,
                    'bg-purple-400': !active,
                  }"
                  class="text-white text-base p-2 font-semibold font-montserrat"
                  >Tableaux</RouterLink
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/item"
                  :class="{
                    'bg-purple-800': active,
                    'bg-purple-400': !active,
                  }"
                  class="text-white text-base p-2 font-semibold font-montserrat"
                  >Items</RouterLink
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/fond"
                  :class="{
                    'bg-purple-800': active,
                    'bg-purple-400': !active,
                  }"
                  class="text-white text-base p-2 font-semibold font-montserrat"
                  >Fonds</RouterLink
                >
              </MenuItem>
            </MenuItems>
          </Menu>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script >
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  where,
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../main.js";
import Logo from "./icons/Logo.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  components: { Logo, Menu, MenuButton, MenuItems, MenuItem },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      userInfo: null,
      name: null,
      avatar: null,
      isAdmin: false,
    };
  },
  mounted() {
    this.getUserConnect();

    emitter.on("connectUser", (e) => {
      this.user = e.user;
      console.log("App => Réception user connecté", this.user);
      this.getUserInfo(this.user);
    });
    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      console.log("App => Réception user déconnecté", this.user);
      this.userInfo = null;
      this.name = null;
      this.avatar = null;
      this.isAdmin = false;
    });
  },
  methods: {
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.user = user;
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
    },
    async getUserInfo(user) {
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("userInfo", this.userInfo);
        this.name = this.userInfo[0].login;
        console.log(this.name);
        this.isAdmin = this.userInfo[0].admin;
        console.log(this.isAdmin);

        const storage = getStorage();
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.userInfo[0].avatar = url;
            this.avatar = this.userInfo[0].avatar;
          })

          .catch((error) => {
            console.log("erreur dl", error);
          });

        console.log(this.userInfo[0].avatar);
        console.log(this.userInfo[0]);
        console.log("avatar", this.avatar);
      });
    },
  },
};
</script>