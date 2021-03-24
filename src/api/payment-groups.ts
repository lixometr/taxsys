import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetPaymentGroups = (opts?: UseApiOptions) => useApi<undefined, any>(
    () => ({
        method: "GET",
        url: '/partner/payment_groups'
    }),
    {...opts}
)
export const useApiDeletePaymentGroups = (opts?: UseApiOptions) => useApi<{id: number}, any>(
    ({id}) => ({
        method: "DELETE",
        url: `/partner/payment_groups/${id}`
    }),
    {...opts}
)