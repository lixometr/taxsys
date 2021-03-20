import { Transform } from "class-transformer"

export const OmitFalsey = () => {
    return Transform(({ value }) => {
        return !value ? undefined : value
    })
}