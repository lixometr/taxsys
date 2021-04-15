import useApi, { UseApiOptions } from "@/compositions/useApi";
import { DriverPutBalanceDto, DriverWriteOffBalanceDto } from "@/dto/driver-balance.dto";
import { classToPlain } from "class-transformer";

export const useApiDriverBalanceWriteoff = (opts?: UseApiOptions) => useApi<DriverWriteOffBalanceDto, { balance: number }>(
    (data: DriverWriteOffBalanceDto) => {
        const toSend = classToPlain(data)
        toSend.id = undefined
        toSend.amount = -toSend.amount
        if (toSend.pay_off) {
            return {
                method: "POST",
                url: `/driver/payments/${data.id}`,
                data: toSend
            }
        } else {
            return {
                method: "POST",
                url: `/driver/${data.id}/balance`,
                data: toSend
            }
        }
    },
    opts
)

export const useApiDriverBalancePut = (opts?: UseApiOptions) => useApi<DriverPutBalanceDto, any>(
    (data: DriverPutBalanceDto) => ({
        method: "POST",
        url: `/driver/${data.id}/balance`,
        data: {
            ...classToPlain(data),
            id: undefined
        }
    }),
    opts
)
