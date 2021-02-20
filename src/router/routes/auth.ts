import { LayoutType } from '@/types/types'
import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/Login.vue'),
        meta: {
            layout: LayoutType.empty,
          
        }
    },
    {
        path: '/register',
        name: "Register",
        meta: {
            layout: LayoutType.empty
        }
    },
    {
        path: '/restore',
        name: "Restore",
        meta: {
            layout: LayoutType.empty
        }
    }

]

export default routes