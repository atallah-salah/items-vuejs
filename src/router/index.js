import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '../components/Container';
import CreateItem from '../components/createItem'
import UpdateItem from '../components/updateITem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'container',
    component: Container
  },
  {
    path: '/create',
    name: 'createItem',
    component: CreateItem
  },
  {
    path: '/update/:id',
    name: 'updateItem',
    component: UpdateItem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
