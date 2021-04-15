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
        data: []
    }
    trips: {
        total_cash: number,
        total_cashless: number,
        sum: number, data: []
    }
}