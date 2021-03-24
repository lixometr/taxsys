import { UserModule } from '@/store/modules/user'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import auth from "./routes/auth"
import statistics from './routes/statistics'
import finances from './routes/finances'
import user from './routes/user'
import settings from './routes/settings'
import driver from "./routes/driver"
import rent from './routes/rent'
import fines from './routes/fine'
import rentApp from './routes/applications'
import car from './routes/car'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    name: "Home",
    path: '/',
    redirect: '/statistics',
  },
  ...auth,
  ...statistics,
  ...finances,
  ...user,
  ...settings,
  ...driver,
  ...rent,
  ...fines,
  ...rentApp,
  ...car,
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
const noAuthList = [
  'Login',
  'Register'
]
router.beforeEach((to, from, next) => {
  // return next()
  if (!noAuthList.includes(to.name) && !UserModule.isAuth) next({ name: 'Login' })
  else next()
})

export default router
