import { Transform } from "class-transformer"

export const FileTransform = () => {
    return Transform(({obj, key}) => {
        return obj[key]
    })
}