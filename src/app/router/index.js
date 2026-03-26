import { createRouter, createWebHistory } from 'vue-router'
import Clinic from '@/pages/Clinic.vue'
import Home from '@/pages/Home.vue'
import Services from '@/pages/Services.vue'
import Specialists from '@/pages/Specialists.vue'
import Fidback from '@/pages/Fidback.vue'
import Makeappointment from '@/pages/MakeAppointment.vue'
import AppointmentCompleted from '@/pages/AppointmentCompleted.vue'
import Login from '@/pages/Login.vue'
import LK from '@/pages/LK.vue'

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
    {
      path: '/makeappointment',
      name: 'makeappointment',
      component: Makeappointment,
    },
    {
      path: '/appointment-completed',
      name: 'appointment-completed',
      component: AppointmentCompleted,
    },
    {
      path: '/administrator',
      name: 'admin',
      component: Login,
      meta: { hideHeader: true },
      children: [{ path: '/administrator/profile', name: 'profile', component: LK }],
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login,
    //   meta: { hideHeader: true },

    // },
  ],
})

export default router
