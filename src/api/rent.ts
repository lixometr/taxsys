import useApi, { UseApiOptions } from "@/compositions/useApi";


export const useApiGetRents = (opts?: UseApiOptions) => useApi<{ page: number }, PaginationResponse<any>>(({ page }) => ({
    method: "GET",
    url: '/rent/',
    params: {
        page
    },

}), opts)