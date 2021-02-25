import useSocket from "@/compositions/useSocket";
import useToast from "@/compositions/useToast";
import { UserModule } from "@/store/modules/user";
export default function addListeners() {
    const { socket } = useSocket()
    const toast = useToast()
    socket.private(`notify.${UserModule.user?.id}`)
        .listen('.testim', (e) => {
            console.log(e);
        })
        .listen(".CheckDriverDone", e => {
            console.log('check done', e)
            toast.success({ message: `Проверка завершена! <a href="/driver/check/${e.check_id}">Перейти</a>` })
        });
    socket.channel('notifications')
        .listen('.testim', (e: any) => {
            console.log(e)
        })
}