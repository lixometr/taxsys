import useField from "@/compositions/validators/useField";
import { AgregName } from "@/types/agregator.enum";
import * as yup from "yup"

export const name = useField('', [yup.string().required()])
export const city = useField('', [yup.string().required()])
export const paymentGroup = useField('', [yup.string().required()])
export const gettLogin = useField('', [yup.string().required()])
export const gettPassword = useField('', [yup.string().required()])
export const gettApiLogin = useField('', [yup.string().required()])
export const gettApiPassword = useField('', [yup.string().required()])
export const parkCommission = useField('', [yup.number().required().max(100).min(0)])
export const agregatorCommission = useField('', [yup.number().required()])
export const bonusCommission = useField('', [yup.number().required()])

export const apiKeyV7 = useField('', [yup.string().required()])
export const cityApiKey = useField('', [yup.string().required()])
export const parkId = useField('', [yup.string().required()])
export const clientId = useField('', [yup.string().required()])

export const fields = {
    [AgregName.yandex]: {
       name,
       city,
       paymentGroup,
       apiKeyV7,
       parkId,
       clientId
    },
    [AgregName.gett]: {
        name,
        city,
        paymentGroup,
        gettLogin,
        gettPassword,
        gettApiLogin,
        gettApiPassword,
        parkCommission,
        agregatorCommission,
        bonusCommission
    },
    [AgregName.citymobil]: {
        name,
        city,
        paymentGroup,
        cityApiKey
    }
}
