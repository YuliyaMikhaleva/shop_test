import Vue from 'vue'
import VueRouter from 'vue-router'
import ZeroPage from "../views/ZeroPage";
import Tables from "../views/Tables";
import Chairs from "../views/Chairs";
import Sofas from "../views/Sofas";
import Lamps from "../views/Lamps";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chairs',
    component: Chairs
  },
  {
    path: '/Стулья',
    name: 'Chairs',
    component: Chairs
  },
  {
    path: '/Мебель',
    name: 'Chairs',
    component: Chairs
  },
  {
    path: '/Столы',
    name: 'Tables',
    component: Tables
  },
  {
    path: '/Диваны',
    name: 'Sofas',
    component: Sofas
  },
  {
    path: '/Электроприборы',
    name: 'Lamps',
    component: Lamps
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
//
// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//     // Start the route progress bar.
//     NProgress.start()
//   }
//   next()
// })
//
// router.afterEach((to, from) => {
//   // Complete the animation of the route progress bar.
//   NProgress.done()
// })

export default router
