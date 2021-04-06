import useMoment from "@/compositions/useMoments"
import { ApiDate } from "@/types/constants"
import { FileTransform } from "@/transformers/file.transform"
import { Transform, Type } from "class-transformer"
import { OmitNull } from "@/transformers/omitnull.transform"

export class RegisterDriverDto {
    @Transform(({value}) => JSON.stringify(value), {toPlainOnly: true})
    agregators: string[]
    @Transform(({ value }) => value.replace(/\s/ig, ''))
    phone: string
    @Transform(({ value }) => useMoment(value).format(ApiDate), { toPlainOnly: true })
    birthday: Date
    @Transform(({ value }) => useMoment(value).format(ApiDate), { toPlainOnly: true })
    dateLicense: Date
    @Transform(({ value }) => useMoment(value).format(ApiDate), { toPlainOnly: true })
    endTimeLicense: Date
    @Transform(({ value }) => useMoment(value).format(ApiDate), { toPlainOnly: true })
    passportDate: Date
    @OmitNull()
    gettId: number
    @Transform(({ value }) => {
        if(value) {
            return useMoment(value).format(ApiDate)
        } else {
            return undefined
        }
    }, { toPlainOnly: true })
    learningDate: Date

    @Type(() => Blob)
    @FileTransform()
    photoLicense: Blob

    @Type(() => Blob)
    @FileTransform()
    selfiDriver: Blob

    @Type(() => Blob)
    @FileTransform()
    photoPassport: Blob

    @Type(() => Blob)
    @FileTransform()
    photoFront: Blob

    @Type(() => Blob)
    @FileTransform()
    photoBack: Blob
    @Type(() => Blob)
    @FileTransform()
    photoCtcBack: Blob
    @Type(() => Blob)
    @FileTransform()
    photoCtcFront: Blob


}
