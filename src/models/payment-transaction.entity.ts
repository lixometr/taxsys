export class PaymentTransactionEntity {
    id: number
    driver_id: number
    partner_id: number
    type: number
    amount: number
    comment: string
    pay_off: number
    payment_group: number
    created_at: string
    updated_at: string
}