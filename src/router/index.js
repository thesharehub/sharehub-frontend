import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/path/:pathSlug',
      name: 'path',
      component: () => import('../views/PathDetailView.vue'),
      props: true
    },
    {
      path: '/path/:pathSlug/:moduleSlug',
      name: 'module',
      component: () => import('../views/ModuleDetailView.vue'),
      props: true
    }
  ]
})

export default router
