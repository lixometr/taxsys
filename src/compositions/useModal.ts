import { onMounted, ref, watch } from "@vue/composition-api"
import Vue from "vue"

export default (function () {
    return function useModal() {
        let isMounted = ref(false)
        onMounted(() => {
            isMounted.value = true
        })
        const show = (...args: any) => {
            if (isMounted) {
                Vue.prototype.$modal.show(...args)

            } else {
                watch(isMounted, value => {
                    if (value) {
                        Vue.prototype.$modal.show(...args)
                    }
                })
            }

        }

        return { show }
    }
})()