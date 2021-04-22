import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'statistics',
        name: 'Statistics',
        component: () => import('@/views/CPartner/Statistics/Statistics.vue'),
        meta: {
        }
    },

]

export default routes