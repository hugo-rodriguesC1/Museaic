import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MuseeView from '../views/MuseeView.vue'
import MuseeModifView from '../views/MuseeModifView.vue'
import BoutiqueView from '../views/BoutiqueView.vue'
import BoutiqueItemView from '../views/BoutiqueItemView.vue'
import CompteView from '../views/CompteView.vue'
import ConnectView from '../views/ConnectView.vue'
import InventaireView from '../views/InventaireView.vue'
import DecouvrirView from '../views/DecouvrirView.vue'
import CoinsView from '../views/CoinsView.vue'
import ListeItem from '../views/admin/item/ListeItem.vue'
import ListeTableau from '../views/admin/tableau/ListeTableau.vue'
import ListeFond from '../views/admin/fond/ListeFond.vue'
import DeleteI from '../views/admin/item/DeleteI.vue'
import UpdateI from '../views/admin/item/UpdateI.vue'
import CreateI from '../views/admin/item/CreateI.vue'
import DeleteF from '../views/admin/fond/DeleteF.vue'
import UpdateF from '../views/admin/fond/UpdateF.vue'
import CreateF from '../views/admin/fond/CreateF.vue'
import DeleteT from '../views/admin/tableau/DeleteT.vue'
import UpdateT from '../views/admin/tableau/UpdateT.vue'
import CreateT from '../views/admin/tableau/CreateT.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/musee',
      name: 'MuseeView',
      component: MuseeView
    },
    {
      path: '/museemodif',
      name: 'MuseeModifView',
      component: MuseeModifView
    },
    {
      path: '/boutique',
      name: 'BoutiqueView',
      component: BoutiqueView
    },
    {
      path: '/boutiqueitem',
      name: 'BoutiqueItemView',
      component: BoutiqueItemView
    },
    {
      path: '/compte',
      name: 'CompteView',
      component: CompteView
    },
    {
      path: '/connect',
      name: 'ConnectView',
      component: ConnectView
    },
    {
      path: '/inventaire',
      name: 'InventaireView',
      component: InventaireView
    },
    {
      path: '/decouvrir',
      name: 'DecouvrirView',
      component: DecouvrirView
    },
    {
      path: '/coins',
      name: 'CoinsView',
      component: CoinsView
    },
    {
      path: '/item',
      name: 'ListeItem',
      component: ListeItem,
      beforeEnter: guard
    },
    {
      path: '/fond',
      name: 'ListeFond',
      component: ListeFond,
      beforeEnter: guard
    },
    {
      path: '/tableau',
      name: 'ListeTableau',
      component: ListeTableau,
      beforeEnter: guard
    },
    {
      path: '/deletei/:id',
      name: 'DeleteI',
      component: DeleteI,
      beforeEnter: guard
    },
    {
      path: '/updatei/:id',
      name: 'UpdateI',
      component: UpdateI,
      beforeEnter: guard
    },
    {
      path: '/createi',
      name: 'CreateI',
      component: CreateI,
      beforeEnter: guard
    },
    {
      path: '/deletef/:id',
      name: 'DeleteF',
      component: DeleteF,
      beforeEnter: guard
    },
    {
      path: '/updatef/:id',
      name: 'UpdateF',
      component: UpdateF,
      beforeEnter: guard
    },
    {
      path: '/createf',
      name: 'CreateF',
      component: CreateF,
      beforeEnter: guard
    },
    {
      path: '/deletet/:id',
      name: 'DeleteT',
      component: DeleteT,
      beforeEnter: guard
    },
    {
      path: '/updatet/:id',
      name: 'UpdateT',
      component: UpdateT,
      beforeEnter: guard
    },
    {
      path: '/createt',
      name: 'CreateT',
      component: CreateT,
      beforeEnter: guard
    },


  ]
})

function guard(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      // User connecté
      // console.log('router OK => user ', user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // userInfo étant un tableau, on récupère
        // ses informations dans la 1° cellule du tableau : 0
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          // Utilisateur administrateur, on autorise la page/vue
          next(to.params.name);
          return;
        } else {
          // Utilisateur non administrateur, renvoi sur accueil
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "home" });
          return;
        }
      })
    } else {
      // Utilisateur non connecté, renvoi sur accueil
      // console.log('router NOK => user ', user);
      next({ name: "home" });
    }
  });
}

export default router
