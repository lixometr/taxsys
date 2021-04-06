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
}