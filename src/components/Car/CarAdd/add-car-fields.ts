import useField from "@/compositions/validators/useField";
import { AgregName } from "@/types/agregator.enum";
import * as yup from "yup"
import "yup-phone"
import {  color, license, mark,  model, carNumber, vin, year } from "@/components/Register/RegisterDriver/register-car-fields";
import { watch } from "@vue/composition-api";

export const ctcNumber = useField('', [yup.string().required().length(10)])
export const run = useField(null, [yup.number().nullable()])
export const complect = useField('', [yup.string().optional()])
export const driverDemand = useField('', [yup.string().optional()])
export const description = useField('', [yup.string().optional()])
export const deposit = useField(null, [yup.number().nullable()])

export const photoCtcFront = useField(null, [yup.string().nullable()])
export const photoCtcBack = useField(null, [yup.string().nullable()])

export const photoFront = useField(null, [yup.string().nullable()])
export const photoBack = useField(null, [yup.string().nullable()])



const buyoutGroup = {
    _rent70: null,
    get rent70() {
        const field = useField(this._rent70, [yup.number().nullable().test('', 'Заполните одно из полей', value => {
            if (value || this.buyout.value.value || this.rent61.value.value) return true
            return false
        })])
        watch(field.value, val => {
            this._rent70 = val
        })
        return field
    },
    _rent61: null,
    get rent61() {
        const field = useField(this._rent61, [yup.number().nullable().test('', 'Заполните одно из полей', (value) => {
            if (value || this.buyout.value.value || this.rent70.value.value) return true
            return false
        })])
        watch(field.value, val => {
            this._rent61 = val
        })
        return field
    },
    _buyout: null,
    get buyout() {
        const field = useField(this._buyout, [yup.number().nullable().test('', 'Заполните одно из полей', (value) => {
            if (value || this.rent61.value.value || this.rent70.value.value) return true
            return false
        })])
        watch(field.value, val => {
            this._buyout = val
        })
        return field
    }
}
export const rent6_1 =  buyoutGroup.rent61
export const rent7_0 =  buyoutGroup.rent70
export const buyout =  buyoutGroup.buyout
export const fields = {
    ctcNumber,
    run,
    complect,
    driverDemand,
    description,
    deposit,
    rent6_1,
    rent7_0,
    buyout,
    carNumber,
    color,
    license,
    mark,
    model,
    photoBack,
    photoCtcBack,
    photoCtcFront,
    photoFront,
    vin,
    year
}