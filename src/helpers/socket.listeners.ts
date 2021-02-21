import useSocket from "@/compositions/useSocket";
import { UserModule } from "@/store/modules/user";
export default function addListeners() {
    const socket = useSocket()
    socket.private(`notify.${UserModule.user?.id}`)
        .listen('*', (e) => {
            console.log(e);
        });
    socket.join('notifications')
    socket.join('laravel_database_notifications')
}