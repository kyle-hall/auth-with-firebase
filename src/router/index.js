import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard.vue'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "settings" */ '../views/settings.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((route) => route.meta.requiresAuth)

  requiresAuth && !auth.currentUser ? next('/login') : next()
})

export default router
