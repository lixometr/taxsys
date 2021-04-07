import { Transform } from "class-transformer"

const IntTransform = () => {
    return Transform(({ value }) => {
        return !value ? 0 : parseInt(value)
    })
}
const BoolTransform = () => {
    return Transform(({ value }) => {
        return !value ? false : value
    })
}

export class CarRequestsDto {
    @BoolTransform()
    inspection_notification: boolean
    @BoolTransform()
    fines_autopay: boolean
    @IntTransform()
    request_photo_control: number|boolean
    @IntTransform()
    request_waybill: number|boolean
    @IntTransform()
    auto_charge: number|boolean
    @IntTransform()
    auto_block: number|boolean
}