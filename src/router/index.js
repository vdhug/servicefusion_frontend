import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import PersonCreate from '../views/PersonCreate.vue'
import SearchPerson from '../views/SearchPerson.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/new',
    name: 'new',
    component: PersonCreate
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPerson
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
