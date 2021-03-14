import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/finances',
        name: "Finances",
        component: {
            render(c) { return c('router-view') }
        },
        redirect: '/finances/travels',
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
            {
                name: "ManualPayments",
                path: 'manual-payments',
                component: () => import('@/views/Finances/ManualPayments.vue')
            },
            {
                name: "AutomaticPayments",
                path: 'automatic-payments',
                component: () => import('@/views/Finances/AutomaticPayments.vue')
            },
        ]
    },

]

export default routes