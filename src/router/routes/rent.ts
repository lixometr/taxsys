import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/rent',
        name: 'Rent',
        component: () => import('@/views/Rent/Rent.vue')

    },

]

export default routes