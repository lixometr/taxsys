import useApi, { UseApiOptions } from "@/compositions/useApi";
import { CreateDispetcherDto, GetDispetchersDto } from "@/dto/dispetcher.dto";
import { classToPlain } from "class-transformer";

export const useApiGetDispetchers = (opts: UseApiOptions) => useApi<GetDispetchersDto, any>(
    (data: GetDispetchersDto) => ({
        method: "GET",
        url: '/controlroom',
        params: classToPlain(data)
    })
)
export const useApiCreateDispetcher = (opts: UseApiOptions) => useApi<CreateDispetcherDto, any>(
    (data: CreateDispetcherDto) => ({
        method: "POST",
        url: '/controlroom',
        params: classToPlain(data)
    })
)