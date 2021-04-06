import useApi, { UseApiOptions } from "@/compositions/useApi";
import { AntifraudEntity } from "@/models/antifraud.entity";



export const useApiGetAntifrauds = (opts?: UseApiOptions) => useApi<{ page?: number, paginate?: boolean }, PaginationResponse<any>>(({ page, paginate = true }) => ({
    method: "GET",
    url: '/partner/antifraud/',
    params: {
        page,
        paginate: paginate ? 5 : 0
    },

}), opts)

export const useApiDeleteAntifraud = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "DELETE",
        url: `/partner/antifraud/${id}`,

    }), opts)
interface AntifraudItemCreate {
    name: string
    costTripMore: number
    bonusSumMore: number

    timeTripMore: number
    timeTripLess: number
    costPerMinMore: number
    costPerMinLess: number
    costPerKmMore: number
    tipSumMorePerc: number
    tipSumMoreRub: number

    active: boolean
    isDefault: boolean
}
export const useApiCreateAntifraud = (opts?: UseApiOptions) => useApi<AntifraudItemCreate, any>(
    ({ name, costTripMore, timeTripMore, active, isDefault, bonusSumMore, timeTripLess, costPerMinMore, costPerMinLess, costPerKmMore, tipSumMoreRub, tipSumMorePerc }) => ({
        method: "POST",
        url: `/partner/antifraud`,
        data: {
            name: name,
            cost_trip_more: costTripMore,
            time_trip_more: timeTripMore,
            sum_bonus_more: bonusSumMore,
            time_trip_less: timeTripLess,
            sum_tip_more_rub: tipSumMoreRub,
            cost_min_more: costPerMinMore,
            sum_tip_more_perc: tipSumMorePerc,
            cost_min_less: costPerMinLess,
            cost_km_more: costPerKmMore,
            default: isDefault
        }
    }), opts)

interface AntifraudItemChange extends AntifraudItemCreate {
    id: number
    active: boolean
}
export const useApiUpdateAntifraud = (opts?: UseApiOptions) => useApi<AntifraudItemChange, any>(
    ({ name, id, costTripMore, timeTripMore, active, isDefault, bonusSumMore, timeTripLess, costPerMinMore, costPerMinLess, costPerKmMore, tipSumMoreRub, tipSumMorePerc }) => ({
        method: "PUT",
        url: `/partner/antifraud/${id}`,
        data: {
            name: name,
            cost_trip_more: costTripMore,
            time_trip_more: timeTripMore,
            sum_bonus_more: bonusSumMore,
            time_trip_less: timeTripLess,
            sum_tip_more_rub: tipSumMoreRub,
            cost_min_more: costPerMinMore,
            sum_tip_more_perc: tipSumMorePerc,
            cost_min_less: costPerMinLess,
            cost_km_more: costPerKmMore,
            active: active,
            default: isDefault
        }
    }), opts)

