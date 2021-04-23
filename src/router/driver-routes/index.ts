import { UserModule } from '@/store/modules/user'
import { UserType } from '@/types/types'
import { RouteConfig } from 'vue-router'
import auth from './auth'
import payments from './finances'
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
    component: {
      render: (c) => c('router-view'),
    },
    children: [...auth, ...payments],
  },
]
export default routes
