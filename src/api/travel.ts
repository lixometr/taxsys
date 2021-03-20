import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";
import { ApiDate } from "@/types/constants";

export const useApiGetTravels = (opts?: UseApiOptions) => useApi<{dateFrom: Date, dateTo: Date, agregator: string, page: number}, PaginationResponse<any>>(({dateFrom, dateTo, agregator, page}) => ({
    method: "POST",
    url: '/trips',
    params: {
        page
    },
    data: {
        date_from: dateFrom ? useMoment(dateFrom).format(ApiDate) : undefined,
        date_to: dateTo ? useMoment(dateTo).format(ApiDate) : undefined,
        agregator: agregator
    }
}), opts)