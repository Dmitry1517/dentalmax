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
import ListOfBids from '@/pages/ListOfBids.vue'
import AdminLayout from '@/pages/AdminLayout.vue'
import Dashboard from '@/pages/Dashboard.vue'
import ListOfAdmins from '@/pages/ListOfAdmins.vue'
import Structure from '@/pages/Structure.vue'
import LIstOfServices from '@/pages/LIstOfServices.vue'
import ListOFDoc from '@/pages/ListOFDoc.vue'
import ListOfSpec from '@/pages/ListOfSpec.vue'

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
      component: AdminLayout,       
      meta: { hideHeader: true },
      children: [
        { path: '', name: 'admin',   component: Login  },
        { path: 'dashboard',    name: 'dashboard',    component: Dashboard, children: [
          { path: '', name: 'structure', component: Structure, children: [
            { path: '', name: 'listofdoc', component: ListOFDoc  },
            { path: 'services', name: 'listofservices', component: LIstOfServices  },
            { path: 'spec', name: 'listofspec', component: ListOfSpec  }
          ]},
          { path: 'bids',    name: 'bids',    component: ListOfBids },
          { path: 'profile', name: 'profile', component: LK  },
          { path: 'admins', name: 'admins', component: ListOfAdmins  },
        ]},
      ],
    },
  ],
})

export default router
