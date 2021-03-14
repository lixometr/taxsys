import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";
import { ApiDate } from "@/types/constants";

export const useApiSignupDriver = (opts?: UseApiOptions) => useApi(
    (data: any) => {
        const toSend = { ...data }
        toSend.phone = toSend.phone.replace(/\s/ig, '')
        toSend.birthday = useMoment(toSend.birthday).format(ApiDate)
        toSend.dateLicense = useMoment(toSend.dateLicense).format(ApiDate)
        toSend.endTimeLicense = useMoment(toSend.endTimeLicense).format(ApiDate)
        toSend.passportDate = useMoment(toSend.passportDate).format(ApiDate)
        const formData = new FormData()
        console.log(toSend)
    
        Object.keys(toSend).map(key => {
            let val = toSend[key]
            formData.append(key, val)
        })
        return {
            method: 'POST',
            url: '/driver/signup',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        }
    },
    opts
)
export const useApiSignupPark = (opts?: UseApiOptions) => useApi(
    (data) => {
        const formData = new FormData()
        Object.keys(data).map(key => {
            formData.append(key, data[key])
        })
        return {
            method: 'POST',
            url: '/park/signup',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        }
    },
    opts
)