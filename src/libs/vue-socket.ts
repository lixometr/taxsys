import { UserModule } from "@/store/modules/user";
import Echo from "laravel-echo"
let socketPort = 6001
let url = window.location.hostname + ':' + socketPort
if (process.env.NODE_ENV === 'development') {
    url = `https://taxsys.ru:${socketPort}`
}
UserModule.initToken()
window.io = require('socket.io-client')
const token = UserModule.token
window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: url,
    transports: ['websocket'],
    auth: {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }
});


declare global {
    interface Window { Echo: Echo; io: any }
}
