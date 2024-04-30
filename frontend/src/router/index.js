import { createMemoryHistory, createRouter } from "vue-router";


const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    }
    /* Add other pages routes */
  ]
})

export default router