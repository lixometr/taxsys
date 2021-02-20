import { useGetCsrf } from "@/api/auth";
import useGlobalLoading from "@/compositions/useGlobalLoading";
import { UserModule } from "@/store/modules/user";

const gLoading = useGlobalLoading()
gLoading.show();

(async function () {
    await UserModule.init()
    // const getCsrf =  useGetCsrf()
    // await getCsrf.exec()

    gLoading.hide()
})()