import { DateTransform } from "@/transformers/date.transform"
import { ToInteger } from "@/transformers/integer.transform"

export class AddCarRecordDto {
    @ToInteger()
    car_id: number
    @ToInteger()
    mileage: number
    note: string
    @DateTransform()
    done_at: string
}