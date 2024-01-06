import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AboutView from '../views/AboutView.vue'
import GameSelectView from '@/views/GameSelectView.vue'
import GameNavigationView from '@/views/GameNavigationView.vue'
import FactionSelectorView from '@/views/FactionSelectorView.vue'
// import LeviathanPhaseView from '@/views/leviathan/LeviathanPhaseView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/play',
    name: 'play',
    component: GameSelectView
  },
  {
    path: '/playground',
    name: 'playground',
    component: GameNavigationView
  },
  {
    path: '/leviathan-setup',
    name: 'leviathan-stepper',
    component: GameNavigationView
  },
  {
    path: '/faction-select',
    name: 'faction-select',
    component: FactionSelectorView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
