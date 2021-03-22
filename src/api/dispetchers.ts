import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";
import { CreateDispetcherDto } from "@/dto/dispetcher.dto";
import { ApiDate } from "@/types/constants";
import { classToPlain } from "class-transformer";

export const useApiGetDispetchers = (opts: UseApiOptions) => useApi<{ dateFrom: Date, dateTo: Date, agregator: string, page: number }, PaginationResponse<any>>(
    ({ dateFrom, dateTo, agregator, page }) => ({
        method: "GET",
        url: '/controlroom',
        params: {
            date_from: useMoment(dateFrom).format(ApiDate),
            date_to: useMoment(dateTo).format(ApiDate),
            agregator,
            page
        }
    })
)
export const useApiCreateDispetcher = (opts: UseApiOptions) => useApi<CreateDispetcherDto, any>(
    (data: CreateDispetcherDto) => ({
        method: "POST",
        url: '/controlroom',
        params: classToPlain(data)
    })
)