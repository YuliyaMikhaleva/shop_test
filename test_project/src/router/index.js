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
    path: '/chairs',
    name: 'Chairs',
    component: chairs
  },
  {
    path: '/mebel',
    name: 'Mebel',
    component: chairs
  },
  {
    path: '/tables',
    name: 'Tables',
    component: tables
  },
  {
    path: '/sofas',
    name: 'Sofas',
    component: sofas
  },
  {
    path: '/electro',
    name: 'Electro',
    component: lamps
  },
  {
    path: '/lamps',
    name: 'Lamps',
    component: lamps
  },
  {
    path: '/ventilators',
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
