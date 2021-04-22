import { UserModule } from '@/store/modules/user'
import { UserType } from '@/types/types'
import { RouteConfig } from 'vue-router'
import auth from './auth'
import payments from './finances'
const routes: Array<RouteConfig> = [
  {
    beforeEnter: (from, to, next) => {
      if (to.name === 'CDLogin') return next()
      if (UserModule.type !== UserType.driver) {
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
