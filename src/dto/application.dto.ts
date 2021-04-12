import { FileTransform } from "@/transformers/file.transform"
import { OmitNull } from "@/transformers/omitnull.transform"
import { PhoneTransfom } from "@/transformers/phone.transform"
import { Transform, Type } from "class-transformer"

export class CreateApplicationDto {
    google_dev: string
    app_name: string
    order_type: string
    @Transform(({value}) => value ? 1 : 0)
    need_design: boolean

    @OmitNull()
    @Type(() => Blob)
    @FileTransform()
    logo: Blob
    @OmitNull()
    @Type(() => Blob)
    @FileTransform()
    background: Blob
    @OmitNull()
    @Type(() => Blob)
    @FileTransform()
    icon: Blob
}
class UpdateApplicationContacts {
    site: string
    @PhoneTransfom()
    phone: string
    @PhoneTransfom()
    whatsapp: string
    @PhoneTransfom()
    viber: string
    @PhoneTransfom()
    telegram: string
    @PhoneTransfom()
    instagram: string
}
export class UpdateApplicationInfoDto {
    stop_reg: boolean
    allow_blacklist: boolean
    @Type(() => UpdateApplicationContacts)
    contacts: UpdateApplicationContacts
    wishes: string
}