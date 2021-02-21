import { ref } from "@vue/composition-api";
const isOpen = ref(false)
const open = () => {
    isOpen.value = true
}
const close = () => {
    isOpen.value = false
}
export default function useSidebar() {

    return { open, close, isOpen }
}