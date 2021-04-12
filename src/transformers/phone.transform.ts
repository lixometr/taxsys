import { Transform } from "class-transformer"

export const PhoneTransfom = () => {
    return Transform(({ value }) => {
        return value?.replace(/\s/ig, '')

    })
}