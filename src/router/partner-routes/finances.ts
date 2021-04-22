import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'finances',
        name: "Finances",
        component: {
            render(c) { return c('router-view') }
        },
        redirect: 'finances/travels',
        children: [
            {
                name: "Travels",
                path: 'travels',
                component: () => import('@/views/CPartner/Finances/Travels.vue')
            },
            {
                name: "SuspiciousTravels",
                path: 'suspicious-travels',
                component: () => import('@/views/CPartner/Finances/SuspiciousTravels.vue')
            },
            {
                name: "ManualPayments",
                path: 'manual-payments',
                component: () => import('@/views/CPartner/Finances/ManualPayments.vue')
            },
            {
                name: "AutomaticPayments",
                path: 'automatic-payments',
                component: () => import('@/views/CPartner/Finances/AutomaticPayments.vue')
            },
        ]
    },

]

export default routes