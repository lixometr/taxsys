import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: 'settings',
        name: 'Settings',
        redirect: "settings/profile",
        component: () => import("@/views/CPartner/Settings/Settings.vue"),
        children: [
         
            {
                name: "SettingsProfile",
                path: 'profile',
                component: () => import("@/views/CPartner/Settings/Profile.vue")
            },
            {
                name: "SettingsAntifraud",
                path: 'antifraud',
                component: () => import("@/views/CPartner/Settings/Antifraud.vue")
            },
            {
                name: "SettingsPaymentSystems",
                path: 'payment-systems',
                component: () => import("@/views/CPartner/Settings/PaymentSystems.vue")
            },
            {
                name: "SettingsDispetchers",
                path: 'control-rooms',
                component: () => import("@/views/CPartner/Settings/Dispetchers.vue")
            },
            {
                name: "SettingsStaff",
                path: 'staff',
                component: () => import("@/views/CPartner/Settings/Staff.vue")
            },
            {
                name: "SettingsPaymentGroups",
                path: 'payment-groups',
                component: () => import("@/views/CPartner/Settings/PaymentGroups.vue")
            },
            {
                name: "SettingsWidgetAdd",
                path: 'widget/add',
                component: () => import("@/views/CPartner/Settings/WidgetAdd.vue")
            },
            {
                name: "SettingsWidgetEdit",
                path: 'widget/:id/edit',
                component: () => import("@/views/CPartner/Settings/WidgetEdit.vue")
            },
        ]
    },

]

export default routes