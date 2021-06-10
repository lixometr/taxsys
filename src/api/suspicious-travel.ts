import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";

export const useApiGetSuspiciousTravels = (opts?: UseApiOptions) => useApi<{ dateFrom: Date, dateTo: Date, agregator: string, page: number }, PaginationResponse<any>>(({ dateFrom, dateTo, agregator, page }) => ({
    method: "GET",
    url: '/trips/suspicious',
    params: {
        page,
        date_from: dateFrom ? useMoment(dateFrom).format('DD-MM-YYYY') : undefined,
        date_to: dateTo ? useMoment(dateTo).format('DD-MM-YYYY') : undefined,
        agregator: agregator

    },
    data: {

    }
}), opts)
export const useApiModerateSuspiciousTravels = (opts?: UseApiOptions) => useApi<{ id: number, isApproved: boolean }, any>(
    ({ id, isApproved }) => ({
        method: "POST",
        url: `/trips/${id}/moderate_suspicious`,
        data: {
            suspicious_approved: isApproved ? 1 : 2
        }
    }), opts)

