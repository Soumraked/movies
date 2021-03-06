import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'populares',
    component: () => import('../views/Populares.vue')
  },
  {
    path: '/:id',
    name: 'movie-info',
    component: () => import('../views/Movie.vue')
  },
  {
    path: '/search/:search',
    name: 'busqueda',
    component: () => import('../views/Busqueda.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
