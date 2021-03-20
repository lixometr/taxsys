import { DateTransform } from "@/transformers/date.transform"
import { Transform } from "class-transformer"

export class RegisterParkDto {
    name: string
    middle_name: string
    last_name: string
    city: string

    @DateTransform()
    birthday: string
    passport: string
    @Transform(({ value }) => value.replace(/\s/g, ''))
    phone: string
}