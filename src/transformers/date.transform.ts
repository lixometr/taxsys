import useMoment from "@/compositions/useMoments"
import { Transform } from "class-transformer"
import { ApiDate } from "../types/constants"

export const DateTransform = () => {
    return Transform(({value}) => {
        return useMoment(value).format(ApiDate)
    })
}