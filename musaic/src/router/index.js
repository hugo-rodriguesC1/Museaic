import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MuseeView from '../views/MuseeView.vue'
import MuseeModifView from '../views/MuseeModifView.vue'
import BoutiqueView from '../views/BoutiqueView.vue'
import CompteView from '../views/CompteView.vue'

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

  ]
})

export default router
