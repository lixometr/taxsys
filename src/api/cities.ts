import useApi, { UseApiOptions } from "@/compositions/useApi";
import { PutBalanceDto } from "@/dto/balance.dto";
import { classToPlain } from "class-transformer";

interface City {
    id: number
    name: string
}
export const useApiGetCities = (opts?: UseApiOptions) => useApi<undefined, City[]>(() => ({
    method: 'GET',
    url: '/cities',
}), { ...opts })
