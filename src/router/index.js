import Vue from "vue"
import VueRouter from "vue-router"
import Beerlist from "../views/Beerlist.vue"
import Favorites from "../views/Favorites.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "beerlist",
    component: Beerlist,
    props: true,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
