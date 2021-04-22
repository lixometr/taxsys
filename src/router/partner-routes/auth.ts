import { LayoutType } from '@/types/types'
import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/CPartner/Login/Login.vue'),
        meta: {
            layout: LayoutType.empty,
          
        }
    },
    {
        path: 'signup',
        name: "Register",
        component: () => import("@/views/CPartner/Register/Register.vue"),
        meta: {
            layout: LayoutType.empty
        }
    },
    {
        path: 'restore',
        name: "Restore",
        meta: {
            layout: LayoutType.empty
        }
    }

]

export default routes