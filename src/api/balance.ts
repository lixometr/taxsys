import useApi, { UseApiOptions } from "@/compositions/useApi";
import { PutBalanceDto } from "@/dto/balance.dto";
import { classToPlain } from "class-transformer";


export const useApiRefill = (opts?: UseApiOptions) => useApi<{amount: number}, {status: string, redirect: Location}>((data: PutBalanceDto) => ({
    method: 'POST',
    url: '/refill',
    data: classToPlain(data)
}), { ...opts })

export const useApiGetBalance = (opts?: UseApiOptions) => useApi<any, {balance: number}>(() => ({
    method: 'GET',
    url: '/balance',
}), { ...opts })