import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'finances',
      
        component: () => import("@/views/CDriver/CDFinances/CDFinances.vue"),
     
    },

]

export default routes