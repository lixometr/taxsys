import useSocket from "@/compositions/useSocket";
import { UserModule } from "@/store/modules/user";
export default function addListeners() {
    const socket = useSocket()
    socket.private(`notify.${UserModule.user?.id}`)
        .listen('.testim', (e) => {
            console.log(e);
        });
    socket.channel('notifications')
        .listen('.testim', (e: any) => {
            console.log(e)
        })
}