import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/driver',
        name: 'Driver',
        component: {
            render(c) { return c('router-view') }
        },
        redirect: '/driver/list',

        children: [
            {
                name: "DriverCheck",
                path: 'check',
                component: () => import("@/views/Driver/Check.vue")
            },
            {
                name: "DriverCheckInfo",
                path: 'check/:id',
                component: () => import("@/views/Driver/CheckInfo.vue")
            },
            {
                name: "DriverList",
                path: 'list',
                component: () => import("@/views/Driver/DriverList.vue"),
            },
            {
                name: "DriverApplys",
                path: 'applications',
                component: () => import("@/views/Driver/DriverApplys.vue"),
            },
            {
                name: "DriverBlackList",
                path: 'blacklist',
                component: () => import("@/views/Driver/DriverBlackList.vue"),
            },
            {
                name: "AddDriver",
                path: 'add',
                component: () => import("@/views/Driver/AddDriver.vue"),
            },
            {
                name: "DriverInfo",
                path: ':id',
                component: () => import("@/views/Driver/DriverInfo.vue")
            },

        ]
    },

]

export default routes