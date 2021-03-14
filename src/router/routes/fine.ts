import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/fines',
        name: 'Fines',
        component: () => import('@/views/Fines/Fines.vue')

    },

]

export default routes