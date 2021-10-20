import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from "../views/Products";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/Стулья',
    name: 'Chairs',
    component: Products
  },
  {
    path: '/Мебель',
    name: 'Chairs',
    component: Products
  },
  {
    path: '/Столы',
    name: 'Tables',
    component: Products
  },
  {
    path: '/Диваны',
    name: 'Sofas',
    component: Products
  },
  {
    path: '/Электроприборы',
    name: 'Lamps',
    component: Products
  },
  {
    path: '/Светильники',
    name: 'Lamps',
    component: Products
  },
  {
    path: '/Вентиляторы',
    name: 'Lamps',
    component: Products
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
