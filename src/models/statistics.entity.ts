export class StatisticsEntity {
    drivers: {
        total_drivers: number,
        total_active_drivers: number,
        total_new_drivers: number,
        total_paid: number,
        total_pay_fee: number
    }
    fees: {
        total_agreg_fee: 0,
        data: {
            [key: string]: {
                agreg_fee: number
                park_fee: number
            }
        }
    }
    trips: {
        total_cash: number,
        total_cashless: number,
        sum: number, data: []
        total_payout: number
    }
}