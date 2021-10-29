import Vue from 'vue'
import VueRouter from 'vue-router'
import lamps from "../views/lamps";
import chairs from "../views/chairs";
import sofas from "../views/sofas";
import tables from "../views/tables";
import ventilators from "../views/ventilators";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lamps',
    component: lamps
  },
  {
    path: '/Стулья',
    name: 'Chairs',
    component: chairs
  },
  {
    path: '/Мебель',
    name: 'Chairs',
    component: chairs
  },
  {
    path: '/Столы',
    name: 'Tables',
    component: tables
  },
  {
    path: '/Диваны',
    name: 'Sofas',
    component: sofas
  },
  {
    path: '/Электроприборы',
    name: 'Lamps',
    component: lamps
  },
  {
    path: '/Светильники',
    name: 'Lamps',
    component: lamps
  },
  {
    path: '/Вентиляторы',
    name: 'Ventilators',
    component: ventilators
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
