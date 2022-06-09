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
          placeholder="Rechercher"
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
          Officiel
        </button>
        <router-link to="/boutiquecommu">
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
            Communautaire
          </button>
        </router-link>
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
    <div class="col-span-6 overflow-y-scroll">
      <div class="bg-gray-800 mb-5">
        <div class="flex flex-row justify-between h-full p-5">
          <div class="flex flex-col m-5 w-1/3 justify-between">
            <h2 class="font-montserrat font-bold text-xl text-white">
              Nouveautés
            </h2>
            <p class="font-montserrat text-base text-white">
              Envie de faire de votre musée un lieu vibrant de couleurs et de
              lumières dans la nuit ? Adoptez une atmosphère cyberpunk en
              décorant vos murs de néons et d’accessoires futuristes, pour
              toujours être au cœur de la modernité.
            </p>
            <div class="flex flex-row gap-1">
              <div class="font-montserrat font-bold text-lg text-purple-400">
                Prix :
              </div>
              <div class="font-montserrat font-bold text-lg text-white">
                2300 coins
              </div>
            </div>
            <div
              class="
                font-montserrat font-bold
                text-lg text-white
                bg-purple-400
                px-4
                py-2
                text-center
              "
            >
              En apprendre plus
            </div>
          </div>
          <img
            src="/img/Illustration/boutiquePack.jpg"
            alt="illustration futuriste"
            class="w-2/3 m-5"
          />
        </div>
      </div>
      <div class="flex flex-row gap-5 w-full justify-between">
        <div class="bg-gray-800 w-2/3 h-auto">
          <h2 class="font-montserrat font-bold text-xl text-white p-5">
            Séléction du moment
          </h2>
          <div
            class="flex flex-row w-full justify-between items-center px-5 pb-5"
          >
            <img
              src="/img/Illustration/JM1.png"
              alt=""
              class="w-96 h-64 object-contain"
            />
            <div class="flex flex-col items-center gap-6 h-64 w-96">
              <div class="flex flex-row gap-6">
                <img
                  src="/img/Illustration/JM2.png"
                  alt=""
                  class="h-full w-full"
                />
                <img
                  src="/img/Illustration/JM3.png"
                  alt=""
                  class="h-full w-full"
                />
              </div>
              <div class="flex flex-row gap-6">
                <img
                  src="/img/Illustration/JM4.png"
                  alt=""
                  class="h-full w-full"
                />
                <img
                  src="/img/Illustration/JM5.png"
                  alt=""
                  class="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-800 w-1/3 flex justify-center items-center">
          <div>
            <div class="flex flex-row gap-4 mb-4">
              <img src="/img/Illustration/In2.png" alt="" /><img
                src="/img/Illustration/In3.png"
                alt=""
              />
            </div>
            <div class="flex flex-row gap-4">
              <img src="/img/Illustration/In4.png" alt="" /><img
                src="/img/Illustration/In1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-5">
        <div class="bg-gray-800 mt-5 py-5 px-10 w-2/3">
          <h2 class="font-montserrat font-bold text-xl text-white">
            Best sellers
          </h2>
          <div class="flex flex-row justify-between mt-5">
            <img
              src="/img/Illustration/BS1.png"
              alt="item et oeuvres les mieux vendues"
              class="w-56 h-36 object-contain"
            />
            <img
              src="/img/Illustration/BS2.png"
              alt="item et oeuvres les mieux vendues"
              class="w-56 h-36 object-contain"
            />
            <img
              src="/img/Illustration/BS3.png"
              alt="item et oeuvres les mieux vendues"
              class="w-56 h-36 object-contain"
            />
          </div>
          <div class="flex flex-row justify-between mt-5">
            <img
              src="/img/Illustration/BS4.png"
              alt="item et oeuvres les mieux vendues"
              class="w-56 h-36 object-contain"
            />
            <img
              src="/img/Illustration/BS5.png"
              alt="item et oeuvres les mieux vendues"
              class="w-56 h-36 object-contain"
            />
            <img
              src="/img/Illustration/BS6.png"
              alt="item et oeuvres les mieux vendues"
              class="w-56 h-36 object-contain"
            />
          </div>
        </div>
        <div class="bg-gray-800 w-1/3 mt-5 p-5">
          <h2 class="font-montserrat font-bold text-xl text-white">
            Collection la plus populaire
          </h2>
          <img
            src="/img/Illustration/ColPop.png"
            alt="collection populaire"
            class="mt-5"
          />
        </div>
      </div>
      <div
        class="col-span-full flex flex-row justify-between items-center mt-10"
      >
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
            placeholder="Rechercher"
          />
          <Search class="absolute top-2 left-3 bottom-0" />
        </div>
        <div class="font-montserrat font-bold text-2xl text-white">Tous</div>

        <div class="flex flex-row gap-2 items-center">
          <div class="font-montserrat font-bold text-sm text-white">
            Catégorie
          </div>
          <button
            class="
              font-montserrat font-bold
              text-sm text-gray-300
              bg-gray-700
              p-2
            "
          >
            Sélectionner
          </button>
        </div>
      </div>
      <div class="bg-gray-800 mt-5 px-8 py-10">
        <div class="flex flex-row justify-between">
          <img
            src="/img/Illustration/BS6.png"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
          <img
            src="/img/Illustration/BS2.png"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
          <img
            src="/img/Illustration/BS4.png"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
          <img
            src="/img/Illustration/o3.jpg"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
          <img
            src="/img/Illustration/o1.jpg"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
        </div>
        <div class="flex flex-row justify-between mt-8">
          <img
            src="/img/Illustration/BS5.png"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
          <img
            src="/img/Illustration/BS1.png"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
          <img
            src="/img/Illustration/BS3.png"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
          <img
            src="/img/Illustration/tous9.png"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
          <img
            src="/img/Illustration/tous10.png"
            alt="item et oeuvres"
            class="w-56 h-36 object-cover"
          />
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
import Card from "../components/Card.vue";

export default {
  name: "Decouvrir",
  components: { Search, Like, Comment, DiscoverCard, Card },
  data() {
    return {
      listeCard: [],
      isHover: false,
      isHover1: false,
      isHover2: false,
      isHover3: false,
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