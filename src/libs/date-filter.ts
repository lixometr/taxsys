import useMoment from "@/compositions/useMoments"
import Vue from "vue"
Vue.filter('dateTime', (value) => {
    return useMoment(value).format('DD.MM.YYYY - HH:mm')
})