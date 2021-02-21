import Vue from 'vue'

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
import "@/libs/global-components"

import "@/libs/vue-socket"

import '@/libs/before-load'


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')