import { DateTransform } from "@/transformers/date.transform"
import { Expose, Transform } from "class-transformer"

export class GetStatisticsDto {
    @DateTransform()
    date_from: Date
    @DateTransform()
    date_to: Date
    @Transform(({ value }) => value === 'all' ? undefined : value)
    agregator: string
}