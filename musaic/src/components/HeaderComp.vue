<template>
  <div class="bg-gray-800 h-16 flex items-center px-4 justify-between">
    <Logo />
    <div v-if="avatar != null" class="flex text-white gap-2 items-center">
      {{ name }}<img :src="avatar" alt="image de profil" class="w-36" />
    </div>
    <router-link
      v-if="avatar == null"
      to="/connect"
      class="bg-purple-400 text-white p-2"
      >Se connecter</router-link
    >
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
import Account from "./icons/Account.vue";
import Bell from "./icons/Bell.vue";

export default {
  components: { Logo, Bell, Account },
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