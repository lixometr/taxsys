import { UserType } from '@/types/types'
import { Car } from './car.entity'
import { DriverEntity } from './driver.entity'

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
  blocked_trip: { telegram: boolean; email: boolean }

  driver_pay_request: { telegram: boolean; email: boolean }

  low_balance: { telegram: boolean; email: boolean }

  new_driver: { telegram: boolean; email: boolean }
}
class Role {
  created_at: string
  guard_name: string
  id: number
  name: UserType
  pivot: { model_id: 3; role_id: 1; model_type: string }
}
export class UserEntity {
  blacklist_reasons: string[]
  fio: string
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
  tg_blocked: boolean
  tg_id: number
  tg_link: string
  roles: Role[]
  driver?: DriverEntity

  get isPartner() {
    const isPartnerOrAdmin =
      this.roles.findIndex(
        (role) =>
          role.name === UserType.partner || role.name === UserType.admin,
      ) >= 0
    return isPartnerOrAdmin
  }
  get isDriver() {
    const isDriverOrAdmin =
      this.roles.findIndex(
        (role) => role.name === UserType.driver || role.name === UserType.admin,
      ) >= 0
    return isDriverOrAdmin
  }
}
