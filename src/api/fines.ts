import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";
import { Fine } from "@/models/fine.entity";
import { ApiDate } from "@/types/constants";
import { plainToClass } from "class-transformer";

export const useApiGetFines = (opts: UseApiOptions) => useApi<{ dateFrom: Date, dateTo: Date, filter: string }, any>(({ dateFrom, dateTo, filter }) => ({
    method: 'GET',
    url: '/fines',
    params: {
        date_from: dateFrom ? useMoment(dateFrom).format(ApiDate) : undefined,
        date_to: dateTo ? useMoment(dateTo).format(ApiDate) : undefined,
        filter
    }
}), { ...opts }, ({data}) => {
    return {...data, data: data.data.map(item => plainToClass(Fine, item))}
})