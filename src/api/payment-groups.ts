import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetPaymentGroups = (opts: UseApiOptions) => useApi(
    () => ({
        method: "GET",
        url: ''
    })
)