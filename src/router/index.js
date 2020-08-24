import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/startups',
    name: 'Startups',
    component: () => import('../views/Startups.vue')
  },
  {
    path: '/talent',
    name: 'Talent',
    component: () => import('../views/Talent.vue')
  },
  {
    path: '/hub',
    name: 'Hub',
    component: () => import('../views/Hub.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
