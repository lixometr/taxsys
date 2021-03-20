import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetPaymentGroups = (opts?: UseApiOptions) => useApi<undefined, any>(
    () => ({
        method: "GET",
        url: ''
    }),
    {...opts}
)