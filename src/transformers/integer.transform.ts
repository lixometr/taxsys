import { Transform } from "class-transformer"

export const ToInteger = () => {
    return Transform(({ value }) => {
        return parseInt(value)
    })
}