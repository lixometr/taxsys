import { FormSchemaItem } from "@/components/FormSchema/form-schema.type";
import { birthday, dateLicense, lastName, middleName, name, passport, serialLicense } from "../Register/RegisterDriver/register-driver-fields";
export const schema: FormSchemaItem[] = [
    {
        type: "app-input",
        field: lastName,
        props: {
            label: "Фамилия",
        },
        class: "col-md-3",
        sort: 1,
    },
    {
        type: "app-input",
        field: name,
        props: {
            label: "Имя",
        },
        class: "col-md-3",
        sort: 2,

    },

    {
        type: "app-input",
        field: middleName,
        props: {
            label: "Отчество",
        },
        class: "col-md-3",
        sort: 3,

    },
    {
        name: "birthday",
        type: "app-date-picker",
        field: birthday,
        props: {
            label: "Дата рождения",
        },
        class: "col-md-3",
        sort: 4,

    },
    {
        type: "app-input",
        field: passport,
        props: {
            maskPlaceholder: '',
            mask: '**********',
            label: "Серия и номер паспорта",
        },
        class: "col-md-4",
        sort: 12
    },
    {
        type: "app-input",
        field: serialLicense,
        props: {
            maskPlaceholder: '',
            mask: '**********',
            label: "Серия/номер В.У.",
        },
        class: "col-md-4",
        sort: 7,

    },
    {
        type: "app-date-picker",
        field: dateLicense,
        props: {
            label: "Дата выдачи В.У.",
        },
        class: "col-md-4",
        sort: 8
    }
]
