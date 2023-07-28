import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/filters',
      name: 'filters',
      // route level code-splitting
      // this generates a separate chunk (Filters.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FiltersView.vue')
    },
    {
      path: '/slots-examples',
      name: 'slots-examples',
      // route level code-splitting
      // this generates a separate chunk (SlotsExamples.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SlotsExamplesView.vue')
    },
    {
      path: '/pizza',
      name: 'pizza',
      // route level code-splitting
      // this generates a separate chunk (Pizza.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PizzaView.vue')
    }
  ]
})

export default router
