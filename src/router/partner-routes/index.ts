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

const routes: Array<RouteConfig> = [
  
  {
    path: '/partner',
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
