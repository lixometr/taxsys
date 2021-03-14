import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/car',
        name: 'Car',
        component: {
            render(c) { return c('router-view') }
        },
        redirect: '/car/add',
        children: [
            {
                path: 'add',
                name: "CarAdd",
                component: () => import("@/views/Car/CarAdd.vue"),

            },
            {
                path: ':id',
                name: "CarInfo",
                component: () => import("@/views/Car/CarInfo.vue")
            }
        ]
    },

]

export default routes