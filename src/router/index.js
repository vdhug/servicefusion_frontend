import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import PersonCreate from '../views/PersonCreate.vue'
import PersonEdit from '../views/PersonEdit.vue'
import PersonDelete from '../views/PersonDelete.vue'
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
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: PersonEdit,
    props: true
  },
  {
    path: '/delete/:id',
    name: 'delete',
    component: PersonDelete,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
