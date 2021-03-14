import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/settings',
        name: 'Settings',
        redirect: "/settings/profile",
        component: () => import("@/views/Settings/Settings.vue"),
        children: [
         
            {
                name: "SettingsProfile",
                path: 'profile',
                component: () => import("@/views/Settings/Profile.vue")
            },
            {
                name: "SettingsAntifraud",
                path: 'antifraud',
                component: () => import("@/views/Settings/Antifraud.vue")
            },
            {
                name: "SettingsPaymentSystems",
                path: 'payment-systems',
                component: () => import("@/views/Settings/PaymentSystems.vue")
            },
            {
                name: "SettingsDispetchers",
                path: 'control-rooms',
                component: () => import("@/views/Settings/Dispetchers.vue")
            },
            {
                name: "SettingsStaff",
                path: 'staff',
                component: () => import("@/views/Settings/Staff.vue")
            },
            {
                name: "SettingsPaymentGroups",
                path: 'payment-groups',
                component: () => import("@/views/Settings/PaymentGroups.vue")
            },
        ]
    },

]

export default routes