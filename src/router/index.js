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
    component: () => import('../views/Privacy.vue')
  },
  // 301 redirects
  // Redirecting previous website google indexed pages
  { path: '/about', redirect: '/' },
  { path: '/contact', redirect: '/' },
  { path: '/knowledgehub', redirect: '/hub' },
  { path: '/login', redirect: '/' },

  { path: '/knowledgehub/what-is-a-startup', redirect: '/hub/post/what-is-a-startup' },
  { path: '/privacy-cookies-policy', redirect: '/privacy' },
  { path: '/knowledgehub/UK-Tech-startups-need-you', redirect: '/hub/post/uk-tech-startups-boom-startups-need-you' },
  { path: '/contact/newsletter-signup', redirect: '/' },
  { path: '/knowledgehub/introducing-new-confido-website-and-blog', redirect: '/hub/post/uk-tech-startups-boom-startups-need-you' },
  { path: '/knowledgehub/startup-hiring-trends-2020-edition', redirect: '/hub/post/startup-hiring-trends-2020-edition' },
  { path: '/knowledgehub/scaling-ux-teams-and-mentoring-design-talent', redirect: '/hub/post/confido-qa-scaling-ux-teams-and-mentoring-design-talent' },
  { path: '/knowledgehub/building-startup-brand-lessons-learnt-starting-scratch', redirect: '/hub' },
  { path: '/knowledgehub/what-does-it-mean-be-woman-tech', redirect: '/hub/post/confido-qa-what-does-it-mean-to-be-a-woman-in-tech' },
  { path: '/knowledgehub/how-do-you-grow-empowered-engineering-team-q', redirect: 'hub/post/confido-qa-how-do-you-grow-an-empowered-engineering-team' },
  { path: '/knowledgehub/stand-out-startups-what-qualities-are-they-really-looking', redirect: '/hub/post/stand-out-to-startups-what-questions-are-they-really-looking-for' },
  { path: '/knowledgehub/ux-design-and-startups-volume-5-introducing-service-design', redirect: '/hub/post/ux-design-and-startups-volume-5-introducing-service-design' },
  { path: '/knowledgehub/ux-design-and-startups-we-need-ux-designer', redirect: '/hub/post/ux-design-and-startups-volume-1-we-need-a-ux-designer' },
  { path: '/knowledgehub/how-transition-software-engineering-product-leadership-confido-q-james-fairhead', redirect: '/hub/post/how-do-you-move-from-a-software-engineer-to-a-product-leader-confido-qa-with-james-fairhead' },
  { path: '/knowledgehub/confido-q-healthy-mind-powerful-changing-narrative-around-workplace-mental-health', redirect: '/hub/post/confido-qa-the-power-of-a-healthy-mind-changing-the-narrative-around-workplace-mental-health' },
  { path: '/knowledgehub/confido-q-healthy-mind-powerful-changing-narrative-around-workplace-mental-health', redirect: '/hub/post/confido-qa-the-power-of-a-healthy-mind-changing-the-narrative-around-workplace-mental-health' },
  { path: '/hub/post/why-your-ui-matters-ux-design-and-startups-volume-3', redirect: '/hub/post/why-your-ui-matters-ux-design-and-startups-volume-3' },
  { path: '/hub/post/ux-design-and-startups-volume-2-do-we-need-user-research', redirect: '/hub/post/ux-design-and-startups-volume-2-do-we-need-user-research' },
  { path: '/knowledgehub/confido-q-aspiring-cto-what-does-it-take-how-do-you-get-there', redirect: '/hub/post/confido-qa-aspiring-cto-what-does-it-take-how-do-you-get-there' },

  // 404 redirect
  {
    path: '*',
    name: '404 Error',
    component: () => import('../views/error.vue')
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
