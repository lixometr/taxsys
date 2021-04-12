export class UpdateNotificationsDto {

    blocked_trip: { telegram: boolean, email: boolean }

    driver_pay_request: { telegram: boolean, email: boolean }

    low_balance: { telegram: boolean, email: boolean }

    new_driver: { telegram: boolean, email: boolean }

}