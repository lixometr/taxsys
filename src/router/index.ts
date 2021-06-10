import { UserModule } from '@/store/modules/user'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import driverRoutes from './driver-routes'
import partnerRoutes from './partner-routes'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    name: 'Home',
    path: '/',
    redirect: () => {
      return UserModule.user?.isPartner
        ? { name: 'Statistics' }
        : { name: 'CDFinances' }
    },
  },
  ...partnerRoutes,
  ...driverRoutes,

  {
    path: '*',
    name: 'PageNotFound',
    component: () => import('@/views/404.vue'),
    meta: {
      // layout: 'landing'
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
const noAuthList = ['Login', 'Register', 'CDLogin']
router.beforeEach((to, from, next) => {
  // return next()
  if (!noAuthList.includes(to.name) && !UserModule.isAuth) {
    const loginPath = to.matched.findIndex(item => item.name === 'CPartner') > -1
      ? { name: 'Login' }
      : { name: 'CDLogin' }
    next(loginPath)
  } else next()
})

export default router
