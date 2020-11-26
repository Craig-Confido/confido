import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    metaTitle: 'about__',
    component: () => import('../views/About.vue')
  },
  {
    path: '/startups',
    name: 'Startups',
    metaTitle: 'startups__',
    component: () => import('../views/Startups.vue')
  },
  {
    path: '/talent',
    name: 'Talent',
    metaTitle: 'talent__',
    component: () => import('../views/Talent.vue')
  },
  {
    path: '/hub',
    name: 'Hub',
    metaTitle: 'hub__',
    component: () => import('../views/Hub.vue')
  },
  {
    path: '/hub/post/:slug',
    name: 'PostView',
    props: true,
    component: () => import('../views/PostView.vue')
  },
  {
    path: '/hub/featured/:slug',
    name: 'FeaturedPostView',
    props: true,
    component: () => import('../views/FeaturedPostView.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    metaTitle: 'privacy__',
    component: () => import('../views/Privacy.vue')
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
