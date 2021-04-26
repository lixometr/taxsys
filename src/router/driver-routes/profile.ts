import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'profile',
        name: "CDProfile",
        component: () => import("@/views/CDriver/CDProfile/CDProfile.vue"),
     
    },

]

export default routes