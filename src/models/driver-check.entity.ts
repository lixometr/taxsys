class FccpCheckResult {
    bailiff: "ТИССЕН А. Д.<br>"
    department: "ОСП по Дзержинскому району г. Новосибирска 630051, г. Новосибирск, пр. Дзержинского, 40"
    details: "Судебный приказ от 06.04.2018 № 2-516/2018-5 Постановление о взыскании исполнительского сбора СУДЕБНЫЙ УЧАСТОК № 5 ДЗЕРЖИНСКОГО СУДЕБНОГО РАЙОНА Г. НОВОСИБИРСКА"
    exe_production: "45978/18/54001-ИП от 16.07.2018 108234/19/54001-СД"
    ip_end: ""
    name: "МЕДЯНИК ДЕНИС СЕРГЕЕВИЧ 09.11.1983 630000, РОССИЯ, НОВОСИБИРСКАЯ ОБЛ., Г. НОВОСИБИРСК"
    subject: "Задолженность: 27236.74 руб. Исполнительский сбор: 2637.47 руб."
}
export class DriverCheckEntity {
    DateDriverLicense: string
    DateOfBirth: string
    NumberOfPassport: string
    SerialDriverLicense: string
    created_at: string
    driver_id: number
    fssp_check: {
        created_at: "2021-04-14T06:15:41.000000Z"
        driver_check_id: 20
        id: number
        result: [{
            query: any
            result: FccpCheckResult[]
        }]
        retries: number
        status: "done"
    }
    id: number
    lastname: "Сергеевич"
    license_check: {
        decis: string
        bdate: null
        cat: null
        created_at: "2021-04-14T06:15:41.000000Z"
        date: null
        divid: null
        division: null
        driver_check_id: 20
        id: 19
        num: null
        result: "ERROR_CAPTCHA_UNSOLVABLE"
        retries: 10
        srok: null
        stag: null
        status: "running"
        type: null
        updated_at: "2021-04-14T07:20:46.000000Z"
    }
    name: "Денис"
    partner_id: 4
    passport_check: {
        created_at: "2021-04-14T06:15:41.000000Z"
        driver_check_id: 20
        id: 8
        is_valid_passport: false
        result: string
        retries: 1
        status: "done"
        updated_at: "2021-04-14T07:38:12.000000Z"
    }
    statuses: { license: "done" | "error", fssp: "done" | "error", passport: "done" | "error", yandex: "done" | "error" }
    surname: "Медяник"
    yandex_check: {
        created_at: "2021-04-14T06:15:41.000000Z"
        driver_check_id: 20
        id: 8
        result: string
        retries: 10
        status: "done"
        updated_at: "2021-04-14T07:03:25.000000Z"
    }
    updated_at: "2021-04-14T06:15:41.000000Z"
}