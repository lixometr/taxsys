import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/applications',
        name: 'Applications',
        component: () => import("@/views/Applications/index.vue"),
        children: [
            {
                path: '',
                name: "ApplicationsItems",
                component: () => import("@/views/Applications/ApplicationsItems.vue"),

            },
            {
                path: 'rent',
                name: "ApplicationsRent",
                component: () => import("@/views/Applications/ApplicationsRent.vue")
            }
        ]
    },

]

export default routes