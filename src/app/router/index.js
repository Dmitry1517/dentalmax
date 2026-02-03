import { createRouter, createWebHistory } from 'vue-router'
import Clinic from '@/pages/Clinic.vue'
import Home from '@/pages/Home.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/clinic',
      name: 'clinic',
      component: Clinic,
    },
  ],
})

export default router
