import { Type } from "class-transformer"
import { Fine } from "./fine.entity"
import { ImageEntity } from "./image.entity"

class HistoryItem {
    action: string
    created_at: string
    details: { driver_id: number, fio: string }
    driver_id: number
    id: number
    model_id: number
    model_type: string
}
export class Car {
    first_deposit: number
    deposit_delay_days: number
    Brand: string
    Color: string
    Deposit: number
    Description: string
    DriverRequirements: string
    Equipment: "Стандарт"
    GosNomer: "H506HM799"
    images: [ImageEntity]
    License: null
    Milleage: number
    Model: "Solaris"
    Ransom: null
    Rent61: number
    Rent70: number
    STS: string
    Vin: string
    YandexID: string
    Year: number
    citimobil_id: number
    created_at: "2021-03-31T09:44:08.000000Z"
    driver_id: number
    hidden: boolean
    id: 4351
    @Type(() => Fine)
    fines: Fine[]
    inspections: any[]
    options: {
        auto_block: number
        auto_charge: number
        fines_autopay: boolean
        inspection_notification: boolean
        request_photo_control: number
        request_waybill: number
    }
    history: HistoryItem[]
    rentable: number
    tracker: any
    updated_at: "2021-03-31T09:44:08.000000Z"
}