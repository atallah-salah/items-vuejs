import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '../components/Container';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'container',
    component: Container
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
