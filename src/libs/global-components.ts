import Vue from "vue"
import LayoutDefault from "@/layout/default.vue"
import LayoutEmpty from "@/layout/empty.vue"
import AppButton from "@/components/AppButton.vue"
import AppInput from "@/components/AppInput.vue"
import AppAccardion from "@/components/Accardion/AppAccardion.vue"
import AppAccardionCol from "@/components/Accardion/AppAccardionCol.vue"
import AppPagination from "@/components/AppPagination.vue"
import AppBadge from "@/components/AppBadge.vue"
import AppChooser from "@/components/AppChooser.vue"
import AppSwitcher from "@/components/AppSwitcher.vue"
import AppStatus from "@/components/AppStatus.vue"

Vue.component('default-layout', LayoutDefault)
Vue.component('empty-layout', LayoutEmpty)
Vue.component('app-button', AppButton)
Vue.component('app-input', AppInput)
Vue.component('app-badge', AppBadge)
Vue.component('app-accardion', AppAccardion)
Vue.component('app-accardion-col', AppAccardionCol)
Vue.component('app-pagination', AppPagination)
Vue.component('app-chooser', AppChooser)
Vue.component('app-switcher', AppSwitcher)
Vue.component('app-status', AppStatus)