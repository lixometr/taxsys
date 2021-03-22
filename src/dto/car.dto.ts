import { FileTransform } from "@/transformers/file.transform"
import { ToInteger } from "@/transformers/integer.transform"
import { OmitFalsy } from "@/transformers/omitfalsy.transform"
import { Type } from "class-transformer"

export class CreateCarDto {
    mark: string
    model: string
    color: string
    year: string
    carNumber: string
    numberCtc: string
    vin: string
    @OmitFalsy()
    License: string
    @OmitFalsy()
    Equipment: string
    @OmitFalsy()
    Milleage: number

    @OmitFalsy()
    DriverRequirements: string

    @OmitFalsy()
    Description: string

    @OmitFalsy()
    Deposit: number

    @OmitFalsy()
    Rent70: number

    @OmitFalsy()
    Rent61: number

    @OmitFalsy()
    Ransom: number

    @OmitFalsy()
    driver_id: number

    @OmitFalsy()
    @Type(() => Blob)
    @FileTransform()
    photoFront: Blob

    @OmitFalsy()
    @Type(() => Blob)
    @FileTransform()
    photoBack: Blob

    @OmitFalsy()
    @Type(() => Blob)
    @FileTransform()
    photoCtcBack: Blob

    @OmitFalsy()
    @Type(() => Blob)
    @FileTransform()
    photoCtcFront: Blob
}