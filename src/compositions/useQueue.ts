import { onMounted, ref, watch } from "@vue/composition-api"

// call only in setup
export function useQueue() {
    const queue = ref([])
    const add = (method: Function) => {
        queue.value.push(method)
    }
    const execAll = () => {
        queue.value.map(item => {
            item()
        })
    }

    onMounted(() => {
        watch(queue, (value) => {
            execAll()
        })
        execAll()
    })
    return { add, execAll }
}