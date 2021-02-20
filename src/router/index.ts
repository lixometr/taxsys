import { UserModule } from '@/store/modules/user'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import auth from "./routes/auth"
import statistics from './routes/statistics'
import finances from './routes/finances'
import user from './routes/user'
import settings from './routes/settings'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue')
  },
  ...auth,
  ...statistics,
  ...finances,
  ...user,
  ...settings,
  {
    path: '*',
    name: "PageNotFound",
    component: () => import('@/views/404.vue'),
    meta: {
      // layout: 'landing'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // return next()
  if (to.name !== 'Login' && !UserModule.isAuth) next({ name: 'Login' })
  else next()
})

export default router
