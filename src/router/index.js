import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Privacy from '../views/Privacy.vue'
import ServiceMap from '../views/ServiceMap.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: Privacy
  },
  {
    path: '/service-map',
    name: 'Service Mapping',
    component: ServiceMap
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
