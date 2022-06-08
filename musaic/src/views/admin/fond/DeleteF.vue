<template>
  <div
    class="
      grid
      w-full
      bg-gray-900
      grid-cols-6
      gap-5
      px-5
      py-16
      h-full
      overflow-y-scroll
      scrollbar-hide
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
      Suppression
    </h1>
    <div class="col-span-1"></div>
    <img :src="imageActuelle" class="mx-auto mt-32 md:w-full" />
    <div class="col-span-1"></div>
    <form
      enctype="multipart/form-data"
      @submit.prevent="deletefond"
      class="col-span-2 mt-20"
    >
      <div class="mb-10 flex w-full flex-row">
        <div class="bg-purple-600 p-3 font-montserrat text-xl text-white w-28">
          Nom
        </div>
        <input
          type="text"
          placeholder="Nom de l'fond"
          class="
            w-full
            border-[1px] border-gray-400
            bg-white
            p-2.5
            font-montserrat
            text-xl text-purple-600
          "
          v-model="fond.nom"
          disabled
        />
      </div>

      <h5
        class="
          mb-10
          w-full
          bg-red-400
          p-3
          text-center
          font-montserrat
          text-xl
          font-bold
          text-white
        "
      >
        Attention, vous êtes sur le point de supprimer cet fond, cette action
        est irréversible.
      </h5>

      <div class="flex flex-row justify-between gap-5">
        <button
          type="submit"
          class="
            w-full
            bg-purple-600
            p-3
            font-montserrat
            text-xl
            font-bold
            text-white
          "
        >
          Supprimer
        </button>

        <button
          class="
            w-full
            bg-purple-600
            p-3
            font-montserrat
            text-xl
            font-bold
            text-white
          "
        >
          <router-link to="/fond">Annuler</router-link>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDoc,
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
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {},
  data() {
    return {
      fond: {
        img: null,
        nom: null,
      },
      reffond: null,
      imageActuelle: null,
    };
  },
  mounted() {
    // console.log("id fond", this.$route.params.id);
    this.getfond(this.$route.params.id);
  },
  methods: {
    async getfond(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "fond", id);
      this.reffond = await getDoc(docRef);
      if (this.reffond.exists()) {
        this.fond = this.reffond.data();
        this.imageActuelle = this.fond.img;
      } else {
        console.log("fond inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "fond/" + this.fond.img);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageActuelle = url;
        })
        .catch((error) => {
          console.log("erreur dl", error);
        });
    },
    async deletefond() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "fond", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "fond/" + this.fond.img);
      deleteObject(docRef);
      this.$router.push("/fond");
    },
  },
};
</script>