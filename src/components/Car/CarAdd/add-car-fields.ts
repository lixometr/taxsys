import useField from "@/compositions/validators/useField";
import { AgregName } from "@/types/agregator.enum";
import * as yup from "yup"
import "yup-phone"
import { carNumber, color, license, mark, model, numberCtc, photoBack, photoCtcBack, photoCtcFront, photoFront, vin, year } from "@/components/Register/RegisterDriver/register-car-fields";

export const ctcNumber = useField('', [yup.string().required()])
export const run = useField('', [yup.string().required()])
export const complect = useField('', [yup.string().required()])
export const driverDemand = useField('', [yup.string().required()])
export const description = useField('', [yup.string().required()])
export const deposit = useField('', [yup.number().required()])
export const rent7_0 = useField('', [yup.number().required()])
export const rent6_1 = useField('', [yup.number().required()])
export const buyout = useField('', [yup.number().required()])

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
    carNumber, color, license, mark, model, numberCtc, photoBack, photoCtcBack, photoCtcFront, photoFront, vin, year
}