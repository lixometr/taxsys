import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'applications',
      
        component: () => import("@/views/CPartner/Applications/index.vue"),
        children: [
            {
                path: '',
                name: "ApplicationsItems",
                component: () => import("@/views/CPartner/Applications/ApplicationsItems.vue"),

            },
            {
                path: 'rent',
                name: "ApplicationsRent",
                component: () => import("@/views/CPartner/Applications/ApplicationsRent.vue")
            }
        ]
    },

]

export default routes