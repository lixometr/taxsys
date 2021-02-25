import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";


export const useApiAutomaticPayments = (opts?: UseApiOptions) => useApi<{ dateFrom: Date, dateTo: Date, page: number }, PaginationResponse<any>>(({ dateFrom, dateTo, page }) => ({
    method: "POST",
    url: '/payments/',
    params: {
        page
    },
    data: {
        date_from: useMoment(dateFrom).format('DD-MM-YYYY'),
        date_to: useMoment(dateTo).format('DD-MM-YYYY'),
        type: 'momental'
    }
}), opts)

export const useApiManualPayments = (opts?: UseApiOptions) => useApi<{ dateFrom: Date, dateTo: Date, page: number }, PaginationResponse<any>>(
    ({ dateFrom, dateTo, page }) => ({
        method: "POST",
        url: '/payments/',
        params: {
            page
        },
        data: {
            date_from: useMoment(dateFrom).format('DD-MM-YYYY'),
            date_to: useMoment(dateTo).format('DD-MM-YYYY'),
            type: 'approval'
        }
    }), opts)

export const useApiPaymentDecline = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "POST",
        url: `/payments/${id}/decline`,
    }), opts)
export const useApiPaymentPay = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "POST",
        url: `/payments/${id}/pay`,
     
    }), opts)

export const useApiPaymentDelete = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "DELETE",
        url: `/payments/${id}`,
    }), opts)