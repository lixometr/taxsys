import useApi, { UseApiOptions } from "@/compositions/useApi";
import { PaymentSystemEntity } from "@/models/payment-system.entity";

export const useApiGetPaymentSystems = (opts?: UseApiOptions) => useApi<{ id: number }, Array<PaymentSystemEntity>>(
    () => ({
        method: "GET",
        url: `/partner/paysystem`,
    }),
    { ...opts }
)
interface CreatePaysystem {
    name: string
    loginApi: string
    passwordApi: string
}
export const useApiCreatePaymentSystem = (opts?: UseApiOptions) => useApi<CreatePaysystem, any>(
    ({ name, loginApi, passwordApi }) => ({
        method: "POST",
        url: `/partner/paysystem`,
        data: {
            name,
            login_api: loginApi,
            passwd_api: passwordApi
        }
    }),
    { ...opts }
)
export const useApiDeletePaymentSystem= (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "DELETE",
        url: `/partner/paysystem/${id}`,
    }),
    { ...opts }
)