import useApi, { UseApiOptions } from "@/compositions/useApi";


export const useApiGetAntifraud = (opts?: UseApiOptions) => useApi<{ page: number }, PaginationResponse<any>>(({ page }) => ({
    method: "GET",
    url: '/partner/antifraud/',
    params: {
        page
    },

}), opts)

export const useApiDeleteAntifraud = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "DELETE",
        url: `/partner/antifraud`,
        data: {
            id
        }
    }), opts)
