import { AgregName } from "@/types/agregator.enum"
import { Transform } from "class-transformer"

export class DriverWriteOffBalanceDto {
    id: number
    @Transform(({ value }) => parseInt(value))
    amount: number
    comment?: string
    pay_off: boolean
}
export class DriverPutBalanceDto {
    id: number
    @Transform(({ value }) => parseInt(value))
    amount: number
    agreg: AgregName
}