import useField from "@/compositions/validators/useField";
import { AgregName } from "@/types/agregator.enum";
import * as yup from "yup"
import "yup-phone"
import { color, license, mark, model, carNumber, vin, year } from "@/components/Register/RegisterDriver/register-car-fields";
import { watch } from "@vue/composition-api";
import useOptionalFields from "@/compositions/optional-fields";

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


const { group: buyoutGroup } = useOptionalFields({
    validators: {
        buyout: yup.number().nullable().optional(),
        rent61: yup.number().nullable().optional(),
        rent70: yup.number().nullable().optional()
    },
    onlyOne: false
})
export const rent6_1 = buyoutGroup.rent61
export const rent7_0 = buyoutGroup.rent70
export const buyout = buyoutGroup.buyout
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