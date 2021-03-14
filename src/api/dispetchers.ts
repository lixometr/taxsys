import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetDispetchers = (opts: UseApiOptions) => useApi(
    () => ({
        method: "GET",
        url: ''
    })
)