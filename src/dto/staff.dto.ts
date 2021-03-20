import { OmitFalsey } from "@/transformers/omitfalsy.transform"

export class StaffDto {
    FIO: string
    phone: string
    @OmitFalsey()
    NumberOfCard: string
    @OmitFalsey()
    NumberOfPassport: string
    @OmitFalsey()
    INN: string
    @OmitFalsey()
    StartWork: string
    @OmitFalsey()
    EndWork: string
    @OmitFalsey()
    SalaryRate: number
    @OmitFalsey()
    PenaltyForAbsenteeism: number
    @OmitFalsey()
    AnswerLonger: number
    @OmitFalsey()
    PenaltyRate: number
    @OmitFalsey()
    CheckoutDay: number
    @OmitFalsey()
    PayOff: number
    @OmitFalsey()
    AdvanceCalculation: number
    @OmitFalsey()
    AdvancePayment: number
}