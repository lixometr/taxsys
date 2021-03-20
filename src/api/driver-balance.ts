import useApi, { UseApiOptions } from "@/compositions/useApi";
import { DriverPutBalanceDto, DriverWriteOffBalanceDto } from "@/dto/driver-balance.dto";
import { classToPlain } from "class-transformer";

export const useApiDriverBalanceWriteoff = (opts?: UseApiOptions) => useApi<DriverWriteOffBalanceDto, any>(
    (data: DriverWriteOffBalanceDto) => {
        const toSend = classToPlain(data)
        toSend.id = undefined
        if (toSend.pay_off) {
            return {
                method: "POST",
                url: `/driver/payments/${data.id}`,
                data: toSend
            }
        } else {
            toSend.amount = -toSend.amount
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
