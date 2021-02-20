import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/finances',
        name: "Finances",
        component: {
            render(c) { return c('router-view') }
        },
        children: [
            {
                name: "Travels",
                path: 'travels',
                component: () => import('@/views/Finances/Travels.vue')
            },
            {
                name: "SuspiciousTravels",
                path: 'suspicious-travels',
                component: () => import('@/views/Finances/SuspiciousTravels.vue')
            },
        ]
    },

]

export default routes