import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/driver',
        name: 'Driver',
        component: {
            render(c) { return c('router-view') }
        },
        children: [
            {
                name: "DriverCheck",
                path: 'chick',
                component: () => import("@/views/Driver/Check.vue")
            }
        ]
    },

]

export default routes