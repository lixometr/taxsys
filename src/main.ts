import Vue from 'vue'
import 'reflect-metadata';
import "@/libs/composition-api"
import "@/libs/loading-overlay"
import "@/libs/toast"
import "@/libs/load-script"
import "@/libs/vue-modal"
import "@/libs/vue-cookie"



import App from './App.vue'
import router from './router'
import store from './store'

import "@/libs/vue-calendar"
import "@/libs/vue-click-outside"
import "@/libs/vue-moment"
import "@/libs/vue-meta"
import "@/libs/date-filter"
import "@/libs/locale-yup"
import "@/libs/vue-select"
import "@/libs/vue-image-viewer"

import "@/libs/global-components"

import "@/libs/vue-socket"
import "@/libs/apex-chart"

import beforeLoad from '@/libs/before-load'


Vue.config.productionTip = false
beforeLoad().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

