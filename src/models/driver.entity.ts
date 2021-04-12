import { Type } from "class-transformer"
import { Car } from "./car.entity"
import { CardEntity } from "./card.entity"
import { ImageEntity } from "./image.entity"
import { UserEntity } from "./user.entity"
class Transaction {
    amount: string
    confirmed: boolean
    created_at: string
    id: 2103
    meta: { comment: string }
    payable_type: string
    type: string
}
export class DriverEntity {
    fio: string
    CityMobilDriver: 0
    DateDriverLicense: null
    DateIssuePasport: null
    DateOfBirth: null
    DateTraining: null
    DateValidityDriverLicense: "2024-02-25"
    DriverIdYandex: "0a1a09da3643ba127b8d2c3b641cd752"
    DrivingExperience: "2014-02-25"
    GettDriver: 0
    citimobil_balance: number
    GettId: null
    IssuedBy: null
    IssuingCountry: null
    NumberOfPassport: null
    PassportFace: null
    PhotoSelfie: null
    SerialDriverLicense: "0512613294"
    VuPhotoFace: null
    YandexBalans: "104.4466"
    YandexDriver: 1
    antifraud_id: null
    @Type(() => ImageEntity)
    images: [ImageEntity]
    @Type(() => Car)
    car: Car
    car_id: number
    @Type(() => CardEntity)
    cards: [CardEntity]
    created_at: "2020-12-30T21:01:22.000000Z"
    id: 11
    is_valid_passport: 0
    last_name: null
    lastname: "Мамедов "
    middle_name: null
    name: string
    partner_id: number
    payment_group_id: null
    trips_updated: string
    updated_at: string
    stats: {
        agreg_fee: number
        park_fee: number
        pay_fee: number
        payout_sum: number
        payouts: number
        total_suspicious: number
        total_trips: number
        trips_cash_sum: number
        trips_cashless_sum: number
        trips_sum: number
    }
    @Type(() => Transaction)
    transactions: Transaction[]
    user_id: number
    @Type(() => UserEntity)
    user: UserEntity
}