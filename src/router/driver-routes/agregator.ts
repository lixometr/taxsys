import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: 'agregator/:name',
    name: 'CDAgregator',
    component: () => import('@/views/CDriver/CDAgregator/CDAgregator.vue'),
    meta: {},
    children: [
      {
        path: '/',
        redirect: { name: 'CDAgregatorTravels' },
      },
      {
        name: 'CDAgregatorTravels',
        path: 'travels',
        component: () =>
          import('@/views/CDriver/CDAgregator/CDAgregatorTravels.vue'),
      },
      {
        name: 'CDAgregatorCheckingTravels',
        path: 'checking-travels',
        component: () =>
          import(
            '@/views/CDriver/CDAgregator/CDAgregatorSuspiciousTravels.vue'
          ),
      },
    ],
  },
]

export default routes
