import Vue from 'vue'
import VueRouter from 'vue-router'
import elements from "../views/elements";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/14/15'
  },
  {
    path: '/:category/:subcategory',
    name: 'elements',
    component: elements
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
