import useField from "@/compositions/validators/useField";
import { AgregName } from "@/types/agregator.enum";
import * as yup from "yup"
import "yup-phone"

export const mark = useField('', [yup.string().transform((value) => value.name).required()])
export const model = useField('', [yup.string().required()])
export const color = useField('', [yup.string().required()])
export const year = useField('', [yup.number().required().integer()])
export const carNumber = useField('', [yup.string().required()])
export const license = useField(null, [yup.number().nullable()])
export const numberCtc = useField('', [yup.string().required()])
export const vin = useField('', [yup.string().required()])
export const photoCtcFront = useField(null, [yup.string().required()])
export const photoCtcBack = useField(null, [yup.string().required()])

export const photoFront = useField(null, [yup.string().required()])
export const photoBack = useField(null, [yup.string().required()])


export const baseFields = {
    mark,
    model,
    year,
    color,
    carNumber
}

export const fields = {
    [AgregName.yandex]: {
        numberCtc,
        vin
    },
    [AgregName.gett]: {
        license,
    },
    [AgregName.citymobil]: {
        license,
        numberCtc,
        photoFront,
        photoBack,
        photoCtcBack,
        photoCtcFront

    },

}

/*
Марка
Модель
Год
Цвет
Гос. номер

*/

/*
yandex:

Серия номер стс
vin

gett:

Лицензия (если есть)

citymobil:

Серия номер СТС
Лицензия (если есть)
Фото стс лицевая часть
Фото стс обратная часть
Фото автомобиля спереди
Фото автомобиля сзади
*/