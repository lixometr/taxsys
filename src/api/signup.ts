import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";
import { RegisterDriverDto } from "@/dto/register-driver.dto";
import { RegisterParkDto } from "@/dto/register-park.dto";
import { ApiDate } from "@/types/constants";
import { classToPlain } from "class-transformer";

export const useApiSignupDriver = (opts?: UseApiOptions) => useApi<RegisterDriverDto, any>(
    (data: RegisterDriverDto) => {
        const toSend = {
            ...classToPlain(data),
            photoLicense: data.photoLicense,
            selfiDriver: data.selfiDriver,
            photoPassport: data.photoPassport,
            photoFront: data.photoFront,
            photoBack: data.photoBack,
            photoCtcBack: data.photoCtcBack,
            photoCtcFront: data.photoCtcFront
        }
        const formData = new FormData()
        Object.keys(toSend).map(key => {
            let val = toSend[key]
            if (val) {
                formData.append(key, val)

            }
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
    (data: RegisterParkDto) => {
        const formData = new FormData()
        Object.keys(classToPlain(data)).map(key => {
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