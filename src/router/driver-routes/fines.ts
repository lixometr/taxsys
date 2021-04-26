import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'fines',
        name: "CDFines",
        // component: () => import("@/views/CDriver/CDFines/CDFines.vue"),
        component: () => import("@/views/CPartner/Fines/Fines.vue"),
     
    },

]

export default routes