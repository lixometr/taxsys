import useApi, { UseApiOptions } from "@/compositions/useApi";
import { PutBalanceDto } from "@/dto/balance.dto";
import { classToPlain } from "class-transformer";


export const useApiGetCities = (opts?: UseApiOptions) => useApi(() => ({
    method: 'GET',
    url: '/cities',
}), { ...opts })
