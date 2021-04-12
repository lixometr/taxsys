interface Partner {
    Adress: string
    BIK: string
    BankAccount: string
    BlockTravel: 0
    CardNumber: string
    City: string
    DateOfBirth: string
    DriversApplic: 0
    FIODirector: string
    INN: string
    LastName: string
    LowBalance: 0
    Name: string
    NameOrg: string
    NumberOfPassport: string
    OGRN: string
    ReqPay: 0
    SurName: string
    created_at: string
    email: string
    id: 3
    type_partner: string
    updated_at: string
    user_id: 3
}
class Notifications {

    blocked_trip: { telegram: boolean, email: boolean }

    driver_pay_request: { telegram: boolean, email: boolean }

    low_balance: { telegram: boolean, email: boolean }

    new_driver: { telegram: boolean, email: boolean }

}
export class UserEntity {
    Phone: string
    birthday: string
    city: string
    created_at: string
    id: number
    last_name: string
    middle_name: string
    name: string
    partner: Partner
    passport: string
    updated_at: string
    user_type: string
    username: string
    notifications: Notifications
}