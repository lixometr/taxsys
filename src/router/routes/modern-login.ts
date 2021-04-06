import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/modern-login-park',
        name: 'ModernLoginPark',
        component: () => import('@/views/ModernLogin/ModernLoginPark.vue'),
        meta: {
            layout: 'empty'
        }
    },
    {
        path: '/modern-login',
        name: 'ModernLogin',
        component: () => import('@/views/ModernLogin/ModernLogin.vue'),
        meta: {
            layout: 'empty'
        }
    },

]

export default routes