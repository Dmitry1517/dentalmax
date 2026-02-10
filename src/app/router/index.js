import { createRouter, createWebHistory } from 'vue-router'
import Clinic from '@/pages/Clinic.vue'
import Home from '@/pages/Home.vue'
import Services from '@/pages/Services.vue'
import Specialists from '@/pages/Specialists.vue'
import Fidback from '@/pages/Fidback.vue'

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
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/specialists',
      name: 'specialists',
      component: Specialists,
    },
    {
      path: '/fidback',
      name: 'fidback',
      component: Fidback,
    },
  ],
})

export default router
