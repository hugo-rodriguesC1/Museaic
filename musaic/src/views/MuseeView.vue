<template>
  <div
    class="
      grid
      w-full
      bg-gray-900
      grid-cols-6
      auto-rows-[13vh]
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
      Mon musée
    </h1>
    <div
      class="
        bg-white
        col-span-4
        row-span-5
        grid grid-cols-6 grid-rows-6
        relative
      "
    >
      <img
        :src="userFond"
        id="fond"
        alt=""
        class="absolute h-full w-full inset-0"
      />
      <div class="border-red-700 z-10 border" id="0"></div>
      <div class="border-red-700 z-10 border" id="1"></div>
      <div class="border-red-700 z-10 border" id="2"></div>
      <div class="border-red-700 z-10 border" id="3"></div>
      <div class="border-red-700 z-10 border" id="4"></div>
      <div class="border-red-700 z-10 border" id="5"></div>
      <div class="border-red-700 z-10 border" id="6"></div>
      <div class="border-red-700 z-10 border" id="7"></div>
      <div class="border-red-700 z-10 border" id="8"></div>
      <div class="border-red-700 z-10 border" id="9"></div>
      <div class="border-red-700 z-10 border" id="10"></div>
      <div class="border-red-700 z-10 border" id="11"></div>
      <div class="border-red-700 z-10 border" id="12"></div>
      <div class="border-red-700 z-10 border" id="13"></div>
      <div class="border-red-700 z-10 border" id="14"></div>
      <div class="border-red-700 z-10 border" id="15"></div>
      <div class="border-red-700 z-10 border" id="16"></div>
      <div class="border-red-700 z-10 border" id="17"></div>
      <div class="border-red-700 z-10 border" id="18"></div>
      <div class="border-red-700 z-10 border" id="19"></div>
      <div class="border-red-700 z-10 border" id="20"></div>
      <div class="border-red-700 z-10 border" id="21"></div>
      <div class="border-red-700 z-10 border" id="22"></div>
      <div class="border-red-700 z-10 border" id="23"></div>
      <div class="border-red-700 z-10 border" id="24"></div>
      <div class="border-red-700 z-10 border" id="25"></div>
      <div class="border-red-700 z-10 border" id="26"></div>
      <div class="border-red-700 z-10 border" id="27"></div>
      <div class="border-red-700 z-10 border" id="28"></div>
      <div class="border-red-700 z-10 border" id="29"></div>
      <div class="border-red-700 z-10 border" id="30"></div>
      <div class="border-red-700 z-10 border" id="31"></div>
      <div class="border-red-700 z-10 border" id="32"></div>
      <div class="border-red-700 z-10 border" id="33"></div>
      <div class="border-red-700 z-10 border" id="34"></div>
      <div class="border-red-700 z-10 border" id="35"></div>
    </div>
    <div class="col-span-2 row-span-5 bg-gray-800 p-8">
      <h2 class="font-montserrat font-bold text-lg text-white">
        Actions sur mon musée
      </h2>
      <form class="mt-5 flex flex-col gap-5">
        <div class="flex flex-row gap-5 justify-between">
          <h3 class="font-montserrat font-bold text-sm text-gray-400">
            Nom du musée
          </h3>
          <input
            type="text"
            placeholder="Nom du musée"
            class="bg-gray-200 text-gray-900 font-montserrat text-sm w-1/2 p-2"
          />
        </div>

        <div class="flex flex-row gap-5 justify-between">
          <h3 class="font-montserrat font-bold text-sm text-gray-400">
            Description du musée
          </h3>
          <textarea
            placeholder="Description"
            class="
              bg-gray-200
              text-gray-900
              font-montserrat
              text-sm
              w-1/2
              h-40
              p-2
            "
          ></textarea>
        </div>
      </form>
      <router-link to="/museemodif"
        ><div
          class="
            bg-purple-600
            font-montserrat font-bold
            text-base text-white
            p-3
            w-64
            text-center
            mx-auto
            mt-20
          "
        >
          Personaliser le musée
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  setDoc,
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

export default {
  name: "MuseeModif",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      userInfo: null,
      userFond: null,
      userId: null,
      listeUserItem: null,
      itemAdded: null,
    };
  },
  mounted() {
    this.getUserConnect();

    emitter.on("connectUser", (e) => {
      this.user = e.user;
      console.log("App => Réception user connecté", this.user);
    });
    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      console.log("App => Réception user déconnecté", this.user);
    });
  },
  methods: {
    getUserConnect() {
      getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.user = user;
            console.log("user connect");
            this.getUserFond(this.user);
            this.getUserItem(this.user);
          }
        }.bind(this)
      );
    },
    async getUserFond(user) {
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.userId = this.userInfo[0].id;

        const storage = getStorage();
        const spaceRef = ref(storage, "fond/" + this.userInfo[0].fond);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.userInfo[0].fond = url;
            this.userFond = this.userInfo[0].fond;
          })

          .catch((error) => {
            console.log("erreur dl", error);
          });
      });
    },
    async getUserItem(user) {
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.userId = this.userInfo[0].id;
        this.listeUserItem = this.userInfo[0].item;
        console.log("liste item user", this.listeUserItem);
        this.listeUserItem.forEach(
          function (item, index) {
            if (item) {
              console.log("item dans la liste", item);
              const storage = getStorage();
              const spaceRef = ref(storage, "item/" + item);
              getDownloadURL(spaceRef)
                .then((url) => {
                  item = url;
                  this.itemAdded = item;
                  const div = document.getElementById(index);
                  if (div.innerHTML == "") {
                    const img = document.createElement("img");
                    img.src = this.itemAdded;
                    img.classList.add("h-4/5", "mx-auto");
                    img.id = this.listeUserItem[index];

                    div.appendChild(img);
                  }
                })

                .catch((error) => {
                  console.log("erreur dl", error);
                });
            } else {
              return;
            }
          }.bind(this)
        );
      });
    },
  },
};
</script>

