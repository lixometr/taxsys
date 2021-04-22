import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'login-park',
        name: 'CDLoginPark',
        component: () => import('@/views/CDriver/CDLogin/CDLoginPark.vue'),
        meta: {
            layout: 'empty'
        }
    },
    {
        path: 'login',
        name: 'CDLogin',
        component: () => import('@/views/CDriver/CDLogin/CDLogin.vue'),
        meta: {
            layout: 'empty'
        }
    },

]

export default routes