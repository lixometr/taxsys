import useField from "@/compositions/validators/useField";
import { AgregName } from "@/types/agregator.enum";
import { watch } from "@vue/composition-api";
import * as yup from "yup"
import "yup-phone"

export const name = useField('', [yup.string().required()])
export const middleName = useField('', [yup.string().required()])
export const lastName = useField('', [yup.string().required()])
export const serialLicense = useField('', [yup.string().required()])
export const countryLicense = useField('', [yup.string().required()])
export const city = useField('', [yup.string().required()])
export const phone = useField("", [yup.number().typeError("Введите корректный номер телефона"),]);
export const birthday = useField("", [yup.date().required()]);
export const dateLicense = useField("", [yup.date().required()]);
export const endTimeLicense = useField("", [yup.date().required()]);
export const driverExp = useField("", [yup.number().required()]);
export const passport = useField("", [yup.string().required()]);
export const passportDate = useField("", [yup.date().required()]);
export const passportWho = useField("", [yup.string().required()]);

const gettGroup = {
    _learningDate: '',
    get learningDate() {
        const field = useField(this._learningDate, [yup.string().test('', 'Заполните одно из полей', value => {
            if (value || this.gettId.value.value) return true
            return false
        })])
        watch(field.value, val => {
            this._learningDate = val
        })
        return field
    },
    _gettId: '',
    get gettId() {
        const field = useField(this._gettId, [yup.number().test('', 'Заполните одно из полей', (value) => {
            if (value || this.learningDate.value.value) return true
            return false
        })])
        watch(field.value, val => {
            this._gettId = val
        })
        return field
    }
}
export const learningDate = gettGroup.learningDate
export const gettId = gettGroup.gettId


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