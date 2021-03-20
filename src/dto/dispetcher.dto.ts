import { DateTransform } from "@/transformers/date.transform"

export class GetDispetchersDto {
    @DateTransform()
    date_from: Date
    @DateTransform()
    date_to: Date
    agregator: string
    page: number
}

export class CreateDispetcherDto {
    agreg: string
    name: string
    city_id: number
    paymentgroup_id: number
    keyApiV7: string
    parkId: string
    clientId: string
    loginGett: string
    passGett: string
    loginGettApi: string
    passGettApi: string
    commisionPark: number
    commisionAgreg: number
    commisionOfBonus:  number
    citiApiKey: string
}
