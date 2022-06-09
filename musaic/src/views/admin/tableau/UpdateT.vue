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
      Mise à jour
    </h1>
    <div class="col-span-1"></div>
    <img :src="imageData" class="mx-auto mt-32 w-full" />
    <div class="col-span-1"></div>
    <form
      enctype="multipart/form-data"
      @submit.prevent="deletetableau"
      class="col-span-2 mt-20"
    >
      <div class="mb-10 flex w-full flex-row">
        <div class="bg-purple-600 p-3 font-montserrat text-xl text-white w-28">
          Nom
        </div>
        <input
          type="text"
          placeholder="Nom de l'tableau"
          class="
            w-full
            border-[1px] border-gray-400
            bg-white
            p-2.5
            font-montserrat
            text-xl text-purple-600
          "
          v-model="tableau.nom"
          required
        />
      </div>

      <div
        class="
          w-full
          bg-gray-900
          p-3
          text-center
          font-barlow
          text-xl
          font-bold
          uppercase
          text-gray-100
        "
      >
        Sélectionner une image
      </div>
      <input
        type="file"
        placeholder="Nom de l'tableau"
        class="
          mb-10
          w-full
          border-[1px] border-gray-400
          bg-gray-100
          p-2.5
          font-montserrat
          text-xl text-gray-900
        "
        name="file"
        id="file"
        ref="file"
        @change="previewImage"
      />

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
          Modifier
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
          <router-link to="/tableau">Annuler</router-link>
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
      imageData: null,
      tableau: {
        img: null,
        nom: null,
      },
      reftableau: null,
      imageActuelle: null,
      imageModifiee: false,
    };
  },
  mounted() {
    // console.log("id tableau", this.$route.params.id);
    this.gettableau(this.$route.params.id);
  },
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.tableau.img = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async gettableau(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "tableau", id);
      this.reftableau = await getDoc(docRef);
      if (this.reftableau.exists()) {
        this.tableau = this.reftableau.data();
        this.imageActuelle = this.tableau.img;
      } else {
        console.log("tableau inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "tableau/" + this.tableau.img);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur dl", error);
        });
    },
    async updatetableau() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "tableau/" + this.imageActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "tableau/" + this.tableau.img);
        await uploadString(docRef, this.imageData, "data_url").then(
          (snapshot) => {
            // console.log("Upload a base64 string", this.tableau.img);
          }
        );
      }
      const firestore = getFirestore();
      await updateDoc(
        doc(firestore, "tableau", this.$route.params.id),
        this.tableau
      );
      this.$router.push("/tableau");
    },
  },
};
</script>