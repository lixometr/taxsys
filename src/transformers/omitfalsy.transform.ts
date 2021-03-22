import { Transform } from "class-transformer"

export const OmitFalsy = () => {
    return Transform(({ value }) => {
        return !value ? undefined : value
    })
}