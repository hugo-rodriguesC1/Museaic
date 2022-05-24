<template>
  <div
    class="
      grid
      w-full
      bg-gray-900
      grid-cols-6
      auto-rows-[minmax(80px,96.3px)]
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
        grid grid-cols-6
        auto-rows-[minmax(80px,93.5px)]
      "
    >
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-red-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
    </div>
    <div
      class="
        bg-red-50
        col-span-2
        row-span-4
        grid grid-cols-3
        auto-rows-[90px]
        overflow-hidden overflow-y-scroll
      "
    >
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
        v-for="item in listeItem"
        :key="item.id"
      >
        <img
          :src="item.img"
          :id="item.id"
          draggable="true"
          @dragstart="dragStart"
          @dragover.stop
          class="max-w-[5.5rem] mx-auto"
        />
      </div>

      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
      <div
        class="border-blue-700 border"
        @dragover.prevent
        @drop.prevent="drop"
      ></div>
    </div>
    <button type="submit" class="bg-white">Modifier</button>
    <button class="bg-white">
      <router-link to="/musee">Annuler</router-link>
    </button>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
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
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "Musee",
  data() {
    return {
      listeItem: [],
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    dragStart: (e) => {
      const target = e.target;
      e.dataTransfer.setData("imgID", target.id);
      // setTimeout(() => {
      //   target.style.display = "none";
      // }, 0);
    },
    drop: (e) => {
      const imgID = e.dataTransfer.getData("imgID");
      const img = document.getElementById(imgID);
      img.style.display = "block";
      e.target.appendChild(img);
    },
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
  },
};
</script>
