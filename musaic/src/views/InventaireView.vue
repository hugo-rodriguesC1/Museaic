<template>
  <div
    class="
      grid
      w-full
      bg-gray-900
      grid-cols-6 grid-rows-4
      gap-5
      px-5
      py-16
      h-full
    "
  >
    <div
      class="
        bg-gray-800
        col-span-1
        row-span-full
        flex flex-col
        items-start
        p-10
        gap-5
      "
    >
      <button
        class="text-white text-lg font-semibold font-montserrat"
        @click="
          itemOuvert = false;
          fondOuvert = false;
          tableauOuvert = !tableauOuvert;
        "
      >
        Tableau</button
      ><button
        class="text-white text-lg font-semibold font-montserrat"
        @click="
          itemOuvert = !itemOuvert;
          fondOuvert = false;
          tableauOuvert = false;
        "
      >
        Item</button
      ><button
        class="text-white text-lg font-semibold font-montserrat"
        @click="
          itemOuvert = false;
          fondOuvert = !fondOuvert;
          tableauOuvert = false;
        "
      >
        Fond
      </button>
    </div>
    <div class="bg-gray-800 col-span-4 row-span-full">
      <div
        class="
          m-10
          grid grid-cols-4
          auto-rows-auto
          gap-9
          place-items-center
          overflow-y-scroll
          scrollbar-hide
        "
        v-if="itemOuvert"
      >
        <div
          v-for="item in listeItem"
          :key="item.id"
          class="
            w-32
            h-32
            border-[1px] border-purple-400
            flex
            justify-center
            items-center
            bg-gray-200
          "
        >
          <img
            :src="item.img"
            :id="item.id"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
      <div
        class="m-10 grid grid-cols-4 auto-rows-auto gap-9 place-items-center"
        v-if="fondOuvert"
      >
        <div
          v-for="fond in listeFond"
          :key="fond.id"
          class="
            w-32
            h-32
            border-[1px] border-purple-400
            flex
            justify-center
            items-center
            bg-gray-200
          "
        >
          <img :src="fond.img" :id="fond.id" class="w-4/5" />
        </div>
      </div>
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
      listeItem: [],
      listeFond: [],
      itemOuvert: true,
      tableauOuvert: false,
      fondOuvert: false,
      user: {
        email: null,
        password: null,
      },
      userInfo: null,
      userId: null,
    };
  },
  mounted() {
    this.getItems();
    this.getFond();
    this.getUserConnect();

    emitter.on("connectUser", (e) => {
      this.user = e.user;
      // console.log("App => Réception user connecté", this.user);
    });
    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      // console.log("App => Réception user déconnecté", this.user);
    });
  },
  methods: {
    async getItems() {
      const firestore = getFirestore();
      const dbItem = collection(firestore, "item");
      await onSnapshot(dbItem, (snapshot) => {
        this.listeItem = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeItem.forEach(function (it) {
          const storage = getStorage();
          const dbItems = ref(storage, "item/" + it.img);
          getDownloadURL(dbItems)
            .then((url) => {
              it.img = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
    async getFond() {
      const firestore = getFirestore();
      const dbFond = collection(firestore, "fond");
      await onSnapshot(dbFond, (snapshot) => {
        this.listeFond = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log(this.listeFond);
        this.listeFond.forEach(function (it) {
          const storage = getStorage();
          const dbFonds = ref(storage, "fond/" + it.img);
          getDownloadURL(dbFonds)
            .then((url) => {
              it.img = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.user = user;
            // console.log("user connect");
          }
        }.bind(this)
      );
    },
  },
};
</script>