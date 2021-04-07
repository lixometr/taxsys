import { useApiGetSuggestionColor, useApiGetSuggestionMark, useApiGetSuggestionModel } from "@/api/car-suggestion";
import { FormSchemaItem } from "@/components/FormSchema/form-schema.type";
import useField from "@/compositions/validators/useField";
import { AgregName } from "@/types/agregator.enum";
import { carNumber, color, license, mark, model, numberCtc, photoBack, photoCtcBack, photoCtcFront, photoFront, vin, year } from "./register-car-fields";
export const sMark = {
    name: 'mark',
    type: "auto-complete-select",
    field: mark,
    props: {
        label: "Марка",
        selectLabel: 'name',
        searchFunc: useApiGetSuggestionMark,
    },
    class: "col-lg-4 col-md-6",
    sort: 1,
}
export const sModel = {
    type: "auto-complete-select",
    field: model,
    props: {
        label: "Модель",
        selectLabel: 'name',
        reduce: item => item.name,
        makeRequest: () => ({ markId: mark.value.value.id }),
        searchFunc: useApiGetSuggestionModel,
    },
    class: "col-lg-4 col-md-6",
    sort: 2,
}
export const sColor = {
    type: "auto-complete-select",
    field: color,
    props: {
        label: "Цвет",
        selectLabel: 'name',
        reduce: item => item.name,
        searchFunc: useApiGetSuggestionColor,
    },
    class: "col-lg-4 col-md-6",
    sort: 3,
}
export const baseSchema: FormSchemaItem[] = [
    sMark,
    sModel,
    sColor,
    {
        type: "app-input",
        field: year,
        props: {
            label: "Год",
        },
        class: "col-lg-4",
        sort: 4,
    },
    {
        type: "app-input",
        field: carNumber,
        props: {
            label: "Гос. номер",
        },
        class: "col-lg-4",
        sort: 5,
    },
]
const sNumberCtc = {
    type: "app-input",
    field: numberCtc,
    props: {
        label: "Серия номер СТС"
    },
    class: 'col-lg-4',

    sort: 7
}
const sVin = {
    type: "app-input",
    field: vin,
    props: {
        label: "Vin"
    },
    class: 'col-lg-4',
    sort: 8
}
const sLicense = {
    type: 'app-input',
    field: license,
    props: {
        label: "Лицензия "
    },
    class: 'col-lg-4',

    sort: 6
}
export const sPhotoCtcFront = {
    type: 'app-image-upload',
    field: photoCtcFront,
    props: {
        label: "Фото СТС (лицевая сторона)",
        icon: require('@/assets/icons/trash.svg')
    },
    class: 'col-lg-3',

    sort: 100
}
export const sPhotoCtcBack = {
    type: 'app-image-upload',
    field: photoCtcBack,
    props: {
        label: "Фото СТС (обратная сторона)",
        icon: require('@/assets/icons/file.svg')
    },
    class: 'col-lg-3',

    sort: 101
}
export const sPhotoFront = {
    type: 'app-image-upload',
    field: photoFront,
    props: {
        label: "Фото автомобиля (Cпереди)",
        icon: require('@/assets/icons/car_front.svg')
    },
    class: 'col-lg-3',

    sort: 102
}
export const sPhotoBack = {
    type: 'app-image-upload',
    field: photoBack,
    props: {
        label: "Фото автомобиля (Сзади)",
        icon: require('@/assets/img/car_back.png')
    },
    sort: 103,
    class: 'col-lg-3'
}
const yandexSchema = [
    sNumberCtc,
    sVin
]
const gettSchema = [
    sLicense
]

const cityMobilSchema = [
    sNumberCtc,
    sLicense,
    {
        type: 'div',
        field: useField('', []),
        class: "col-lg-12",
        sort: 99

    },
    sPhotoCtcFront,
    sPhotoCtcBack,
    sPhotoFront,
    sPhotoBack

]
export const schema = {
    [AgregName.yandex]: yandexSchema,
    [AgregName.citymobil]: cityMobilSchema,
    [AgregName.gett]: gettSchema
}