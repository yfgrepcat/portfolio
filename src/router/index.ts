/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/career',
          name: 'Career',
          component: () => import('@/views/Career.vue')
        },
        {
          path: '/engineering',
          name: 'Engineering',
          component: () => import('@/views/Engineering.vue')
        },
        {
          path: '/international',
          name: 'International',
          component: () => import('@/views/International.vue')
        },
        {
          path: '/sustainability',
          name: 'Sustainability',
          component: () => import('@/views/Sustainability.vue')
        },
        {
          path: '/activities',
          name: 'Activities',
          component: () => import('@/views/Activities.vue')
        }
      ]
    }
  ]
})

export default router
