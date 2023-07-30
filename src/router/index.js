import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AboutView from '../views/AboutView.vue'
import MissionSelectView from '@/views/MissionSelectView.vue'
import LeviathanDeploymentView from '@/views/leviathan/LeviathanDeploymentView.vue'

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
    path: '/mission',
    name: 'mission',
    component: MissionSelectView
  },
  {
    path: '/leviathan-deployment',
    name: 'leviathan-deployment',
    component: LeviathanDeploymentView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
