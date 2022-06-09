<template>
  <div class="grid w-full bg-gray-900 grid-cols-6 gap-5 px-5 py-16 h-full">
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
      Boutique
    </h1>
    <div class="col-span-full flex flex-row justify-between items-center">
      <div class="relative">
        <input
          class="
            bg-gray-700
            h-10
            text-gray-400
            rounded-md
            font-montserrat
            text-sm
            w-80
            flex flex-row
            items-center
            gap-4
            pl-12
          "
          placeholder="Rechercher un musée..."
        />
        <Search class="absolute top-2 left-3 bottom-0" />
      </div>
      <div class="flex flex-row items-center">
        <button
          type="button"
          class="
            text-white
            font-montserrat
            text-xs
            bg-transparent
            rounded-l-md
            border-[1px] border-white
            p-2
            bg-purple-500
            active:bg-purple-500 active:border-0
            focus:bg-purple-500 focus:border-0
          "
        >
          Tableaux
        </button>
        <button
          type="button"
          class="
            text-white
            font-montserrat
            text-xs
            bg-transparent
            rounded-r-md
            border-[1px] border-white
            p-2
            active:bg-purple-500 active:border-purple-500
            focus:bg-purple-500 focus:border-purple-500
          "
        >
          Items
        </button>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <div class="font-montserrat font-bold text-sm text-white">
          Trier par
        </div>
        <button
          type="button"
          class="
            text-white
            font-montserrat
            text-xs
            bg-transparent
            rounded-md
            border-[1px] border-white
            px-1
            h-7
            active:bg-purple-500 active:border-0
            focus:bg-purple-500 focus:border-0
          "
        >
          Pertinence
        </button>
        <button
          type="button"
          class="
            text-white
            font-montserrat
            text-xs
            bg-transparent
            rounded-md
            border-[1px] border-white
            px-1
            h-7
            active:bg-purple-500 active:border-0
            focus:bg-purple-500 focus:border-0
          "
        >
          Date de mise en ligne
        </button>
        <button
          type="button"
          class="
            text-white
            font-montserrat
            text-xs
            bg-transparent
            rounded-md
            border-[1px] border-white
            px-1
            h-7
            active:bg-purple-500 active:border-purple-500
            focus:bg-purple-500 focus:border-purple-500
          "
        >
          Popularité
        </button>
      </div>
    </div>

    <div class="col-span-6 overflow-y-scroll scrollbar-hide">
      <h2 class="font-montserrat font-bold text-2xl text-purple-400 mb-4">
        Top tendances
      </h2>
      <div
        class="
          grid grid-flow-col
          auto-cols-max
          grid-rows-1
          gap-8
          scrollbar-hide
          mb-4
        "
      >
        <div class="relative">
          <img
            src="/img/Illustration/B1.png"
            alt=""
            class="w-full"
            v-on:mouseenter="isHover = true"
            v-on:mouseleave="isHover = false"
          />
          <div
            v-if="isHover"
            class="absolute w-full bg-black bg-opacity-70 top-0 left-0 h-full"
          >
            <div
              class="
                flex flex-row
                text-white
                font-montserrat
                text-sm
                absolute
                bottom-3
                left-3
                right-3
                items-center
                justify-between
              "
            >
              <div class="flex flex-row gap-3">
                <div class="flex flex-row gap-2 items-center">754<like /></div>
                <div class="flex flex-row gap-2 items-center">
                  31<comment />
                </div>
              </div>
              <div class="font-bold">1200 coins</div>
            </div>
          </div>
        </div>
        <img src="/img/Illustration/B2.png" alt="" class="w-full" />
        <img src="/img/Illustration/B3.png" alt="" class="w-full" />
        <img src="/img/Illustration/B31.png" alt="" class="w-full" />
      </div>
      <h2 class="font-montserrat font-bold text-2xl text-purple-400 mb-4">
        Fantaisie
      </h2>
      <div
        class="
          grid grid-flow-col
          auto-cols-max
          grid-rows-1
          gap-8
          scrollbar-hide
          mb-4
        "
      >
        <img src="/img/Illustration/B4.png" alt="" class="w-full" />
        <img src="/img/Illustration/B5.png" alt="" class="w-full" />
        <img src="/img/Illustration/B6.png" alt="" class="w-full" />
        <img src="/img/Illustration/B61.png" alt="" class="w-full" />
      </div>
      <h2 class="font-montserrat font-bold text-2xl text-purple-400 mb-4">
        Cyberpunk
      </h2>
      <div
        class="
          grid grid-flow-col
          auto-cols-max
          grid-rows-1
          gap-8
          scrollbar-hide
          mb-4
        "
      >
        <img src="/img/Illustration/B7.png" alt="" class="w-full" />
        <img src="/img/Illustration/B8.png" alt="" class="w-full" />
        <img src="/img/Illustration/B9.png" alt="" class="w-full" />
        <img src="/img/Illustration/B91.png" alt="" class="w-full" />
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

import Search from "../components/icons/Search.vue";
import Like from "../components/icons/Like.vue";
import Comment from "../components/icons/Comment.vue";
import DiscoverCard from "../components/DiscoverCard.vue";

export default {
  name: "Decouvrir",
  components: { Search, Like, Comment, DiscoverCard },
  data() {
    return {
      listeCard: [],
      isHover: false,
    };
  },
  mounted() {
    this.getCard();
  },
  methods: {
    async getCard() {
      const firestore = getFirestore();
      const dbCard = collection(firestore, "discover");
      await onSnapshot(dbCard, (snapshot) => {
        this.listeCard = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeCard.forEach(function (it) {
          const storage = getStorage();
          const dbpp = ref(storage, "discover/" + it.pp);
          getDownloadURL(dbpp)
            .then((url) => {
              it.pp = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        this.listeCard.forEach(function (it) {
          const storage = getStorage();
          const dbbg = ref(storage, "discover/" + it.bg);
          getDownloadURL(dbbg)
            .then((url) => {
              it.bg = url;
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