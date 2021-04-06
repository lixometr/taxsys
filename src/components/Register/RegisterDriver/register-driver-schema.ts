import { FormSchemaItem } from "@/components/FormSchema/form-schema.type";
import { AgregName } from "@/types/agregator.enum";
import { birthday, city, countryLicense, dateLicense, driverExp, endTimeLicense, gettId, lastName, learningDate, middleName, name, passport, passportDate, passportWho, phone, photoLicense, photoPassport, selfiDriver, serialLicense } from "./register-driver-fields"
export const baseSchema: FormSchemaItem[] = [
    {
        type: "app-input",
        field: middleName,
        props: {
            label: "Фамилия",
        },
        class: "col-lg-4",
        sort: 1,
    },
    {
        type: "app-input",
        field: name,
        props: {
            label: "Имя",
        },
        class: "col-lg-4",
        sort: 2,

    },

    {
        type: "app-input",
        field: lastName,
        props: {
            label: "Отчество",
        },
        class: "col-lg-4",
        sort: 3,

    },
    {
        name: "birthday",
        type: "app-date-picker",
        field: birthday,
        props: {
            label: "Дата рождения",
        },
        class: "col-lg-4",
        sort: 4,

    },
    {
        name: 'phone',
        type: "phone-input",
        field: phone,
        props: {
            label: "Телефон",
        },
        class: "col-lg-4",
        sort: 5,

    },
    {
        name: 'city',
        type: "city-select",
        field: city,
        props: {
            label: "Город",
        },
        class: "col-lg-4",
        sort: 6,

    },
    {
        type: "app-input",
        field: serialLicense,
        props: {
            label: "Серия/номер В.У.",
        },
        class: "col-lg-4",
        sort: 7,

    },
    {
        type: "app-select",
        field: countryLicense,
        props: {
            label: "Страна выдачи В.У.",
            options: ['Российская Федерация', 'Кыргызская Республика', 'Республика Беларусь', 'Республика Казахста']
        },
        class: "col-lg-4",
        sort: 11
    },
]

const sPassport = {
    type: "app-input",
    field: passport,
    props: {
        label: "Серия и номер паспорта",
    },
    class: "col-lg-4",
    sort: 12
}
const sDateLicense = {
    type: "app-date-picker",
    field: dateLicense,
    props: {
        label: "Дата выдачи В.У.",
    },
    class: "col-lg-4",
    sort: 8
}
const sEndTimeLicense = {
    type: "app-date-picker",
    field: endTimeLicense,
    props: {
        label: "Срок действия В.У.",
    },
    class: "col-lg-4",
    sort: 9
}
const sDriverExp = {
    type: "app-input",
    field: driverExp,
    props: {
        label: "Стаж вождения",
    },
    class: "col-lg-4",
    sort: 10

}
const sPassportDate = {
    type: "app-date-picker",
    field: passportDate,
    props: {
        label: "Дата выдачи паспорта",
    },
    class: "col-lg-6",
    sort: 13,
}
const sPassportWho = {
    type: "app-input",
    field: passportWho,
    props: {
        label: "Кем выдан паспорт",
    },
    class: "col-lg-6",
    sort: 14
}
const sPhotoPassport = {
    name: 'photo-passport',
    type: "app-image-upload",
    field: photoPassport,
    props: {
        label: "Разворот паспорта",
        icon: require('@/assets/icons/passport_open.svg')
    },
    class: "col-lg-4",
    sort: 101

}
const sPhotoLicense = {
    name: 'photo-license',
    type: "app-image-upload",
    field: photoLicense,
    props: {
        label: "Водительское удостоверение (лицевая)",
        icon: require('@/assets/icons/driver_license.svg')
    },
    class: "col-lg-4 driver-license",
    sort: 100
}

const sSelfiDriver = {
    name: 'selfi-driver',
    type: "app-image-upload",
    field: selfiDriver,
    props: {
        label: "Селфи на светлом фоне",
        icon: require('@/assets/icons/user_stroke.svg')
    },
    class: "col-lg-4",
    sort: 102
}
const yandexSchema: FormSchemaItem[] = [
    sPassport,
    sDateLicense,
    sEndTimeLicense,
    sDriverExp,
]
const cityMobilSchema: FormSchemaItem[] = [
    sDateLicense,
    sEndTimeLicense,
    sPassport,
    sPassportDate,
    sPassportWho,
    sPhotoPassport,
    sPhotoLicense
]
const gettSchema: FormSchemaItem[] = [
    sPassport,
    {
        name: 'gettid',
        type: "app-input",
        field: gettId,
        props: {
            label: "Gett ID",
            disabled: !!learningDate.value.value

        },
        class: "col-lg-6",
        sort: 15
    },
    {
        name: 'learning-date',
        type: "app-date-picker",
        field: learningDate,
        props: {
            label: "Дата прохождения обучения",
            disabled: !!gettId.value.value
        },
        class: "col-lg-6",
        sort: 16
    },
    sPhotoPassport,
    sPhotoLicense,
    sSelfiDriver
]

export const schema = {
    [AgregName.citymobil]: cityMobilSchema,
    [AgregName.yandex]: yandexSchema,
    [AgregName.gett]: gettSchema,
}

/*
Фамилия
Имя
Отчество
Телефон
Город: (должен определяться автоматически)
Серия/номер В.У.:
Страна выдачи: В.У.

*/

/*
yandex
Яндекс

Дата выдачи В.У.:
Срок действия В.У.:
Стаж вождения:

*/

/*
gett

Серия и номер паспорта
Gett ID  или Дата прохождения обучения
Фото разворота паспорта
Фото водительского удостоверения
Селфи водителя

*/

/*

city

Срок действия В.У.:
Дата выдачи В.У.:
Серия и номер паспорта
Дата выдачи паспорта
Кем выдан паспорт
Фото разворота паспорта

 */