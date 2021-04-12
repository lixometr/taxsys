import { ToInteger } from "@/transformers/integer.transform";
import { Transform } from "class-transformer";

export class AddCardDto {
    @Transform(({ value }) => {
        if (typeof value === 'string') {
            return parseInt(value?.replace(/\s/g, ''))
        }
        return value
    })
    number: string

    def: boolean
}