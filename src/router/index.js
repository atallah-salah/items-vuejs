import Vue from 'vue'
import VueRouter from 'vue-router'
import Items from '../components/Items';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'items',
    component: Items
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
