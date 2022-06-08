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
      Liste des tableaux
    </h1>
    <table class="col-span-full w-full">
      <thead>
        <tr>
          <th
            colspan="3"
            class="
              relative
              bg-gray-300
              py-2
              text-center
              font-montserrat
              text-2xl
              font-bold
            "
          >
            Liste des tableaux
            <span>
              <router-link to="/createt"
                ><img
                  src="/img/Icon/add.png"
                  alt="ajouter"
                  class="absolute top-2.5 right-3 w-7"
                />
              </router-link>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="bg-gray-200 text-center font-montserrat text-xl font-bold">
            Image
          </td>
          <td class="bg-gray-200 text-center font-montserrat text-xl font-bold">
            Nom
          </td>
          <td class="bg-gray-200 text-center font-montserrat text-xl font-bold">
            Actions
          </td>
        </tr>
        <tr v-for="tableau in listetableau" :key="tableau.id">
          <td>
            <img
              :src="tableau.img"
              :alt="tableau.nom"
              class="mx-auto w-32 h-32 object-contain py-4"
            />
          </td>
          <td class="text-center text-white">{{ tableau.nom }}</td>
          <td>
            <div class="flex flex-row justify-center gap-4">
              <router-link :to="{ name: 'UpdateT', params: { id: tableau.id } }"
                ><img src="/img/Icon/update.png" alt="modifier" class="w-5"
              /></router-link>
              <router-link :to="{ name: 'DeleteT', params: { id: tableau.id } }"
                ><img src="/img/Icon/delete.png" alt="supprimer" class="w-6"
              /></router-link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
  components: {},
  data() {
    return {
      listetableau: [],
    };
  },
  mounted() {
    this.gettableau();
  },
  methods: {
    async gettableau() {
      const firestore = getFirestore();
      const dbtableau = collection(firestore, "tableau");
      await onSnapshot(dbtableau, (snapshot) => {
        this.listetableau = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listetableau.forEach(function (it) {
          const storage = getStorage();
          const dbtableauimg = ref(storage, "tableau/" + it.img);
          getDownloadURL(dbtableauimg)
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