import { FormSchemaItem } from "@/components/FormSchema/form-schema.type";
import { sPhotoBack, sPhotoCtcBack, sPhotoCtcFront, sPhotoFront } from "@/components/Register/RegisterDriver/register-car-schema";
import useStore from "@/compositions/useStore";
import { buyout, complect, ctcNumber, deposit, description, driverDemand, rent6_1, rent7_0, run } from "./add-car-fields";
import { carNumber, color, license, mark, model, numberCtc, photoBack, photoCtcBack, photoCtcFront, photoFront, vin, year } from "@/components/Register/RegisterDriver/register-car-fields";
const store = useStore()
const currency = store.getters.currency

export const schema: FormSchemaItem[] = [
    {
        type: "app-input",
        field: mark,
        props: {
            label: "Марка",
        },
        class: "col-lg-3 col-md-6",
        sort: 1,
    },
    {
        type: "app-input",
        field: model,
        props: {
            label: "Модель",
        },
        class: "col-lg-3 col-md-6",
        sort: 2,
    },
    {
        type: "app-input",
        field: color,
        props: {
            label: "Цвет",
        },
        class: "col-lg-3 col-md-6",
        sort: 3,
    },
    {
        type: "app-input",
        field: year,
        props: {
            label: "Год",
        },
        class: "col-lg-3 col-md-6",
        sort: 4,
    },
    {
        type: "app-input",
        field: carNumber,
        props: {
            label: "Гос. номер",
        },
        class: "col-lg-3 col-md-6",
        sort: 5,
    },
    {
        type: "app-input",
        field: ctcNumber,
        props: {
            label: "Серия номер СТС ",
        },
        class: "col-lg-3 col-md-6",
        sort: 6,
    },
    {
        type: "app-input",
        field: vin,
        props: {
            label: "VIN код",
        },
        class: "col-lg-3 col-md-6",
        sort: 7,
    },
    {
        type: "app-input",
        field: run,
        props: {
            label: "Пробег",
        },
        class: "col-lg-3 col-md-6",
        sort: 8,
    },
    {
        type: "app-input",
        field: complect,
        props: {
            label: "Комплектация",
        },
        class: "col-md-6",
        sort: 9,
    },
    {
        type: "app-input",
        field: license,
        props: {
            label: "Лицензия (если есть)",
        },
        class: "col-md-6",
        sort: 10,
    },
    {
        type: "app-input",
        field: driverDemand,
        props: {
            label: "Требования к водителю",
        },
        class: "col-md-6",
        sort: 11,
    },
    {
        type: "app-input",
        field: description,
        props: {
            label: "Описание",
        },
        class: "col-md-6",
        sort: 12,
    },
    {
        type: "app-input",
        field: deposit,
        props: {
            label: "Депозит",
            sufix: currency

        },
        class: "col-lg-3 col-md-6",
        sort: 13,
    },
    {
        type: "app-input",
        field: rent7_0,
        props: {
            label: "Аренда 7/0",
            sufix: currency

        },
        class: "col-lg-3 col-md-6",
        sort: 14,
    },
    {
        type: "app-input",
        field: rent6_1,
        props: {
            label: "Аренда 6/1",
            sufix: currency
        },
        class: "col-lg-3 col-md-6",
        sort: 15,
    },
    {
        type: "app-input",
        field: buyout,
        props: {
            label: "Выкуп",
            sufix: currency
        },
        class: "col-lg-3 col-md-6",
        sort: 16,
    },
    sPhotoCtcFront,
    sPhotoCtcBack,
    sPhotoFront,
    sPhotoBack
]