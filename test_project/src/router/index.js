import Vue from 'vue'
import VueRouter from 'vue-router'
import ZeroPage from "../views/ZeroPage";
// import Tables from "../views/Tables";
// import Chairs from "../views/Chairs";
// import Sofas from "../views/Sofas";
// import Lamps from "../views/Lamps";
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
  {
    path: '/zero_page',
    name: 'ZeroPage',
    component: ZeroPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
