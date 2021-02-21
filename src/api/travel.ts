import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";

export const useApiGetTravels = (opts?: UseApiOptions) => useApi<{dateFrom: Date, dateTo: Date, agregator: string, page: number}, PaginationResponse<any>>(({dateFrom, dateTo, agregator, page}) => ({
    method: "POST",
    url: '/trips',
    params: {
        page
    },
    data: {
        date_from: useMoment(dateFrom).format('DD-MM-YYYY'),
        date_to: useMoment(dateTo).format('DD-MM-YYYY'),
        agregator: agregator
    }
}), opts)