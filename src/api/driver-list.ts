import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";

export const useApiGetDriverList = (opts?: UseApiOptions) => useApi<{ dateFrom: Date, dateTo: Date, page: number,  }, PaginationResponse<any>>(
    ({ dateFrom, dateTo, page,  }) => ({
        method: "POST",
        url: '/driver/list',
        params: {
            page
        },
        data: {
            date_from: useMoment(dateFrom).format('YYYY-MM-DD'),
            date_to: useMoment(dateTo).format('YYYY-MM-DD'),
            type: 'momental',
        }
    }), opts)
