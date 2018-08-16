import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Services from '@/components/pages/Services'
import Clients from '@/components/pages/Clients'
import Materials from '@/components/pages/Materials'
import MaterialsDetail from '@/components/pages/MaterialsDetail'
import Contact from '@/components/pages/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/materials/:id',
      name: 'Materials',
      component: Materials
    },
    {
      path: '/material/:id',
      name: 'Material Detail',
      component: MaterialsDetail
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
