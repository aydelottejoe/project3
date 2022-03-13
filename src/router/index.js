import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'
import CartView from '../views/CartView.vue'
import ApparelView from '../views/ApparelView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/browse',
    name: 'BrowseView',
    component: BrowseView
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView,
  },
  {
    path: '/apparel',
    name: 'ApparelView',
    component: ApparelView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
