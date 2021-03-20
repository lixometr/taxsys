import { Transform } from "class-transformer"

export const OmitNull = () => {
    return Transform(({ value }) => {
        return value === null ? undefined : value
    })
}