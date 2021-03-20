import { FormSchemaItem } from "@/components/FormSchema/form-schema.type";
import { name, city, parkCommission, agregatorCommission, bonusCommission, gettLogin, gettPassword, gettApiLogin, gettApiPassword, parkId, paymentGroup, cityApiKey, clientId, apiKeyV7 } from "./dispetchers-fields";
import { AgregName } from "@/types/agregator.enum";
export const baseSchema: FormSchemaItem[] = [
    {
        type: "app-input",
        field: name,
        props: {
            label: "Название",
        },
        class: "col-lg-4",
        sort: 1,
    },
    {
        type: "city-select",
        field: city,
        props: {
            label: "Город",
        },
        class: "col-lg-4",
        sort: 2,
    },
    {
        type: "app-input",
        field: paymentGroup,
        props: {
            label: "Группа выплат",
        },
        class: "col-lg-4",
        sort: 3,
    },

]



const yandexSchema: FormSchemaItem[] = [
    ...baseSchema,
    {
        type: "app-input",
        field: apiKeyV7,
        props: {
            label: "API ключ V7",
        },
        class: "col-lg-4",
        sort: 4,
    },
    {
        type: "app-input",
        field: parkId,
        props: {
            label: "ID парка",
        },
        class: "col-lg-4",
        sort: 5,
    },
    {
        type: "app-input",
        field: clientId,
        props: {
            label: "ID клиента",
        },
        class: "col-lg-4",
        sort: 6,
    },
]
const cityMobilSchema: FormSchemaItem[] = [
    ...baseSchema,
    {
        type: "app-input",
        field: cityApiKey,
        props: {
            label: "Api ключ",
        },
        class: "col-12",
        sort: 4,
    },


]
const gettSchema: FormSchemaItem[] = [
    ...baseSchema,
    {
        type: "app-input",
        field: gettLogin,
        props: {
            label: "Логин Gett",
        },
        class: "col-lg-6",
        sort: 4,
    },
    {
        type: "app-input",
        field: gettPassword,
        props: {
            label: "Пароль Gett",
        },
        class: "col-lg-6",
        sort: 5,
    },
    {
        type: "app-input",
        field: gettApiLogin,
        props: {
            label: "Логин Gett Api",
        },
        class: "col-lg-6",
        sort: 5,
    },
    {
        type: "app-input",
        field: gettApiPassword,
        props: {
            label: "Пароль Gett Api",
        },
        class: "col-lg-6",
        sort: 6,
    },
    {
        type: "app-input",
        field: parkCommission,
        props: {
            label: "Комиссия парка",
            sufix: '%'
        },
        class: "col-lg-4",
        sort: 7,
    },
    {
        type: "app-input",
        field: agregatorCommission,
        props: {
            label: "Комиссия агрегатора",
            sufix: '₽'
        },
        class: "col-lg-4",
        sort: 8,
    },
    {
        type: "app-input",
        field: bonusCommission,
        props: {
            label: "Комиссия с бонусов",
            sufix: '₽'
        },
        class: "col-lg-4",
        sort: 9,
    },

]

export const schema = {
    [AgregName.citymobil]: cityMobilSchema,
    [AgregName.yandex]: yandexSchema,
    [AgregName.gett]: gettSchema,
}

