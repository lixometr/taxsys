import { UserModule } from '@/store/modules/user'
import { UserType } from '@/types/types'
import { RouteConfig } from 'vue-router'
import auth from './auth'
import finances from './finances'
import rent from './rent'
import profile from './profile'
import fines from './fines'
const routes: Array<RouteConfig> = [
  {
    beforeEnter: (to, from, next) => {
      if (to.name === 'CDLogin' || to.name === 'CDLoginPark') return next()
      if (!UserModule.user?.isDriver) {
        next({ name: 'CDLogin' })
        return
      }
      next()
    },
    path: '/driver',
    name: 'CDriver',
    component: {
      render: (c) => c('router-view'),
    },
    children: [...auth, ...finances, ...rent, ...profile, ...fines],
  },
]
export default routes
