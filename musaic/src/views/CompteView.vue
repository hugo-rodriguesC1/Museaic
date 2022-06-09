<template>
  <div
    class="
      grid
      w-full
      bg-gray-900
      grid-cols-6
      auto-rows-[17.35vh]
      gap-5
      px-5
      py-12
      h-full
    "
  >
    <h1
      class="
        font-montserrat font-bold
        text-2xl text-white
        absolute
        top-1
        right-0
        left-0
        text-center
      "
    >
      Compte
    </h1>
    <card title="Informations">
      <div class="flex mt-5 gap-10 items-center">
        <div
          class="w-20 h-20 bg-gray-100 border-2 border-purple-400 rounded-full"
        ></div>
        <div class="flex flex-col items-center">
          <div class="font-montserrat text-xl text-white">{{ name }}</div>
          <div class="font-montserrat text-lg text-gray-200">
            {{ name }}#0001
          </div>
        </div>
      </div>
      <div class="font-montserrat text-white text-base mt-5 bg-gray-900 p-3">
        Bienvenue sur mon profil ! Merci pour vos likes ! N’hésitez pas à
        visiter mes musées et à voir mes oeuvres.
      </div>
    </card>
    <Card title="Amis"
      ><div class="flex flex-col mt-4 gap-4 pr-5">
        <div
          class="
            flex flex-row
            w-full
            text-white text-sm
            font-montserrat
            items-center
            justify-between
          "
        >
          <div class="flex flex-row items-center gap-5">
            <img
              src="/img/Illustration/pp1.jpg"
              alt="photo de profil"
              class="w-12 h-12 object-cover rounded-full"
            />
            <div>Loic#4583</div>
          </div>
          <div class="bg-green-400 rounded-full w-3 h-3"></div>
        </div>
        <div
          class="
            flex flex-row
            w-full
            text-white text-sm
            font-montserrat
            items-center
            justify-between
          "
        >
          <div class="flex flex-row items-center gap-5">
            <img
              src="/img/Illustration/pp2.jpg"
              alt="photo de profil"
              class="w-12 h-12 object-cover rounded-full"
            />
            <div>John#7944</div>
          </div>

          <div class="bg-green-400 rounded-full w-3 h-3"></div>
        </div>
        <div
          class="
            flex flex-row
            w-full
            text-white text-sm
            font-montserrat
            items-center
            justify-between
          "
        >
          <div class="flex flex-row items-center gap-5">
            <img
              src="/img/Illustration/pp3.jpg"
              alt="photo de profil"
              class="w-12 h-12 object-cover rounded-full"
            />
            <div>Antoine#8005</div>
          </div>

          <div class="bg-green-400 rounded-full w-3 h-3"></div>
        </div></div
    ></Card>
    <Card title="Mes oeuvres" class="row-span-4">
      <div class="flex flex-row gap-4 mt-4">
        <img src="/img/Illustration/oeuvrePerso1.jpg" alt="" />
        <img src="/img/Illustration/oeuvrePerso2.jpg" alt="" />
      </div>
      <div class="flex flex-row gap-4 mt-4">
        <img src="/img/Illustration/oeuvrePerso3.jpg" alt="" />
        <img src="/img/Illustration/oeuvrePerso4.jpg" alt="" />
      </div>
      <div class="flex flex-row gap-4 mt-4">
        <img
          src="/img/Illustration/oeuvrePerso5.jpg"
          alt=""
          class="w-full h-auto object-cover"
        />
        <div class="flex flex-col gap-2 w-full">
          <button
            class="
              w-full
              p-4
              text-white
              font-montserrat
              text-base
              border-2 border-white
            "
          >
            Voir plus
          </button>
          <button
            class="
              w-full
              p-4
              text-white
              font-montserrat
              text-base
              border-2 border-white
              bg-purple-400
            "
          >
            Poster
          </button>
        </div>
      </div>
    </Card>

    <card title="Collections"
      ><div class="flex flex-row mt-4 gap-4 justify-between">
        <img src="/img/Illustration/collec1.png" alt="" class="w-full" />
        <img src="/img/Illustration/collec2.png" alt="" class="w-full" />
      </div>
      <button
        class="
          w-full
          p-4
          text-white
          font-montserrat
          text-base
          border-2 border-white
          mt-4
        "
      >
        Voir plus
      </button></card
    >
    <card title="Musées"
      ><div class="flex flex-row mt-4 gap-4 justify-between">
        <img
          src="/img/Illustration/musee1.jpg"
          alt=""
          class="w-64 object-cover h-28"
        />
        <div
          class="
            w-80
            h-28
            border border-white
            relative
            flex
            justify-center
            items-center
          "
        >
          <div class="w-12 h-px bg-white"></div>
          <div class="h-12 w-px bg-white absolute"></div>
        </div>
      </div>
      <button
        class="
          w-full
          p-4
          text-white
          font-montserrat
          text-base
          border-2 border-white
          mt-4
        "
      >
        Voir plus
      </button></card
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
import Logo from "../components/icons/Logo.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import Card from "../components/Card.vue";

export default {
  components: { Logo, Menu, MenuButton, MenuItems, MenuItem, Card },
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
    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "User non connecté";
          this.user = {
            email: null,
            password: null,
          };
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur de deconnexion", error);
        });
    },
  },
};
</script>
