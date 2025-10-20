/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Career from '../views/Career.vue'
import Engineering from '../views/Engineering.vue'
import International from '../views/International.vue'
import Sustainability from '../views/Sustainability.vue'
import Activities from '../views/Activities.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/career',
    name: 'Career',
    component: Career
  },
  {
    path: '/engineering',
    name: 'Engineering',
    component: Engineering
  },
  {
    path: '/international',
    name: 'International',
    component: International
  },
  {
    path: '/sustainability',
    name: 'Sustainability',
    component: Sustainability
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),  // Changed to hash history with base path
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
