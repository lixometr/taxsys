import auth from './auth'
import statistics from './statistics'
import finances from './finances'
import user from './user'
import settings from './settings'
import driver from './driver'
import rent from './rent'
import fines from './fine'
import rentApp from './applications'
import car from './car'
import { RouteConfig } from 'vue-router'
import { UserModule } from '@/store/modules/user'
import { UserType } from '@/types/types'

const routes: Array<RouteConfig> = [
  {
    beforeEnter(to, from, next) {
      if (to.name === 'Login' || to.name === 'SignUp') return next()
  
      if (!UserModule.user?.isPartner) {
        next({ name: 'Login' })
        return
      }
      next()
    },
    path: '/partner',
    name: "CPartner",
    component: {
      render: (c) => c('router-view'),
    },
    children: [
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
    ],
  },
]
export default routes
