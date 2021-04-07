import { Fine } from "./fine.entity"

class HistoryItem {
    action: "driver_changed"
    created_at: "2021-04-07T09:06:17.000000Z"
    details: { driver_id: number, fio: string }
    driver_id: number
    id: 1
    model_id: 4351
    model_type: "App\Models\Car"
    updated_at: "2021-04-07T09:06:17.000000Z"
}
export class Car {
    Brand: "Hyundai"
    Color: "Белый"
    Deposit: 2000
    Description: "Автомобиль на автомате, в хорошем состоянии. Путевые листы предоставляем"
    DriverRequirements: "Стаж более 3х лет"
    Equipment: "Стандарт"
    GosNomer: "H506HM799"
    License: null
    Milleage: 110000
    Model: "Solaris"
    Ransom: null
    Rent61: 1650
    Rent70: 1550
    STS: "9916203254"
    Vin: "Z94K241CBLR155854"
    YandexID: null
    Year: 2019
    citimobil_id: null
    created_at: "2021-03-31T09:44:08.000000Z"
    driver_id: null
    hidden: false
    id: 4351
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
    partner_id: 3
    rentable: 1
    tracker: any
    updated_at: "2021-03-31T09:44:08.000000Z"
}