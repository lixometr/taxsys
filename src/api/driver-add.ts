import useApi, { UseApiOptions } from "@/compositions/useApi";
import { PutBalanceDto } from "@/dto/balance.dto";
import { RegisterDriverDto } from "@/dto/register-driver.dto";
import { classToPlain } from "class-transformer";


export const useApiDriverAdd = (opts?: UseApiOptions) => useApi<RegisterDriverDto, any>(
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
            url: '/driver/add',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        }
    }, { ...opts })
