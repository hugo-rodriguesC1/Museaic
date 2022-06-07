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
      <div
        class="border-red-700 z-10 border"
        id="0"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="1"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="2"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="3"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="4"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="5"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="6"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="7"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="8"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="9"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="10"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="11"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="12"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="13"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="14"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="15"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="16"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="17"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="18"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="19"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="20"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="21"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="22"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="23"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="24"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="25"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="26"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="27"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="28"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="29"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="30"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="31"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="32"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="33"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="34"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 z-10 border"
        id="35"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
    </div>
    <router-link to="/museemodif"
      ><div class="bg-white">Modifier</div></router-link
    >
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
    this.getItems();
    this.getFond();

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
    async getItems() {
      console.log("liste des items de l'utilisateur", this.listeUserItem);
      const itemsOnWall = [];

      console.log("items deeja sur le mur", itemsOnWall);
      const firestore = getFirestore();
      const dbItem = collection(firestore, "item");
      await onSnapshot(dbItem, (snapshot) => {
        this.listeItem = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("liste des items", this.listeItem);
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
        console.log(this.listeFond);
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
                    img.draggable = "true";
                    img.ondragstart = this.dragStart;
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
    async updateFond(newfond) {
      const firestore = getFirestore();
      const docUser = doc(firestore, "users", this.userId);
      await updateDoc(docUser, { fond: newfond });
    },
  },
};
</script>

