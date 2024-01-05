import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AboutView from '../views/AboutView.vue'
import GameSelectView from '@/views/GameSelectView.vue'
import LeviathanDeploymentView from '@/views/leviathan/LeviathanDeploymentView.vue'
import PrimaryMissionView from '@/views/PrimaryMissionView.vue'
import FactionSelectorView from '@/views/FactionSelectorView.vue'
import LeviathanPhaseView from '@/views/leviathan/LeviathanPhaseView.vue'

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
    path: '/leviathan-deployment',
    name: 'leviathan-deployment',
    component: LeviathanDeploymentView
  },
  {
    path: '/leviathan-primary-mission-select',
    name: 'leviathan-primary-mission-select',
    component: PrimaryMissionView
  },
  {
    path: '/leviathan-setup',
    name: 'leviathan-stepper',
    component: LeviathanPhaseView
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
