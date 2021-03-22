import { OmitFalsy } from "@/transformers/omitfalsy.transform"

export class StaffDto {
    FIO: string
    phone: string
    @OmitFalsy()
    NumberOfCard: string
    @OmitFalsy()
    NumberOfPassport: string
    @OmitFalsy()
    INN: string
    @OmitFalsy()
    StartWork: string
    @OmitFalsy()
    EndWork: string
    @OmitFalsy()
    SalaryRate: number
    @OmitFalsy()
    PenaltyForAbsenteeism: number
    @OmitFalsy()
    AnswerLonger: number
    @OmitFalsy()
    PenaltyRate: number
    @OmitFalsy()
    CheckoutDay: number
    @OmitFalsy()
    PayOff: number
    @OmitFalsy()
    AdvanceCalculation: number
    @OmitFalsy()
    AdvancePayment: number
}