import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'rent',
        name: "CDRent",
        component: () => import("@/views/CDriver/CDRent/CDRent.vue"),
     
    },

]

export default routes