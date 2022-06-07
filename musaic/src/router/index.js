import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MuseeView from '../views/MuseeView.vue'
import MuseeModifView from '../views/MuseeModifView.vue'
import BoutiqueView from '../views/BoutiqueView.vue'
import CompteView from '../views/CompteView.vue'
import ConnectView from '../views/ConnectView.vue'
import InventaireView from '../views/InventaireView.vue'
import DecouvrirView from '../views/DecouvrirView.vue'

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


  ]
})

export default router
