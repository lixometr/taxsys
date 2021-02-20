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
                name: "FinancesTravels",
                path: 'travels',
                component: () => import('@/views/Finances/Travels.vue')
            },
            {
                name: "FinancesSuspiciousTravels",
                path: 'suspicious-travels',
                component: () => import('@/views/Finances/SuspiciousTravels.vue')
            },
        ]
    },

]

export default routes