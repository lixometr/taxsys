import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'finances',
        name: "CDFinances",
        component: () => import("@/views/CDriver/CDFinances/CDFinances.vue"),
     
    },

]

export default routes