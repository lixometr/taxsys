import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";
import { ApiDate } from "@/types/constants";


export const useApiAutomaticPayments = (opts?: UseApiOptions) => useApi<{ dateFrom: Date, dateTo: Date, page: number, }, PaginationResponse<any>>(
    ({ dateFrom, dateTo, page, }) => {
        return {
            method: "POST",
            url: '/payments/',
            params: {
                page
            },
            data: {
                date_from: dateFrom ? useMoment(dateFrom).format(ApiDate) : undefined,
                date_to: dateTo ? useMoment(dateTo).format(ApiDate) : undefined,
                type: 'momental',
            }
        }
    }, opts)

export const useApiManualPayments = (opts?: UseApiOptions) => useApi<{ dateFrom: Date, dateTo: Date, page: number, isPaid: boolean }, PaginationResponse<any>>(
    ({ dateFrom, dateTo, page, isPaid }) => ({
        method: "POST",
        url: '/payments/',
        params: {
            page
        },
        data: {
            date_from: dateFrom ? useMoment(dateFrom).format(ApiDate) : undefined,
            date_to: dateTo ? useMoment(dateTo).format(ApiDate) : undefined,
            type: 'approval',
            is_paid: isPaid

        }
    }), opts)

export const useApiPaymentDecline = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "POST",
        url: `/payments/${id}/decline`,
    }), opts)
export const useApiPaymentAccept = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "POST",
        url: `/payments/${id}/pay`,

    }), opts)

export const useApiPaymentDelete = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "DELETE",
        url: `/payments/${id}`,
    }), opts)