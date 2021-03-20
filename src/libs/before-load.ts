import useGlobalLoading from "@/compositions/useGlobalLoading";
import { UserModule } from "@/store/modules/user";
import addListeners from "@/helpers/socket.listeners"
const gLoading = useGlobalLoading()
gLoading.show();

export default async function () {
    await UserModule.init()
    addListeners()
    gLoading.hide()

}