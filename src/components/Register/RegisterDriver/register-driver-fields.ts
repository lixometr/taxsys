import useOptionalFields from "@/compositions/optional-fields";
import useField from "@/compositions/validators/useField";
import { AgregName } from "@/types/agregator.enum";
import { watch } from "@vue/composition-api";
import * as yup from "yup"
import "yup-phone"

export const name = useField('', [yup.string().required()])
export const middleName = useField('', [yup.string().required()])
export const lastName = useField('', [yup.string().required()])
export const serialLicense = useField('', [yup.string().required().length(10)])
export const countryLicense = useField('', [yup.string().required()])
export const city = useField('', [yup.string().required()])
export const phone = useField("", [yup.number().typeError("Введите корректный номер телефона"),]);
export const birthday = useField("", [yup.date().required()]);
export const dateLicense = useField("", [yup.date().required()]);
export const endTimeLicense = useField("", [yup.date().required()]);
export const driverExp = useField("", [yup.number().required()]);
export const passport = useField("", [yup.string().required().length(10)]);
export const passportDate = useField("", [yup.date().required()]);
export const passportWho = useField("", [yup.string().required()]);
const { group } = useOptionalFields({
    validators: {
        learningDate: yup.string().nullable(),
        gettId: yup.number().nullable().optional()
    },
    onlyOne: true
})

export const learningDate = group.learningDate
export const gettId = group.gettId


export const photoPassport = useField(null, [yup.string().required()]);
export const photoLicense = useField(null, [yup.string().required()]);
export const selfiDriver = useField(null, [yup.string().required()]);

export const baseFields = {
    name,
    middleName,
    lastName,
    serialLicense,
    countryLicense,
    city,
    phone,
    birthday
}
export const fields = {
    [AgregName.yandex]: {
        passport,
        dateLicense,
        endTimeLicense,
        driverExp
    },
    [AgregName.gett]: {
        passport,
        gettId,
        learningDate,
        photoPassport,
        photoLicense,
        selfiDriver,
    },
    [AgregName.citymobil]: {
        endTimeLicense,
        dateLicense,
        passport,
        passportDate,
        passportWho,
        photoPassport,
    }
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