import useApi, { UseApiOptions } from "@/compositions/useApi";
import { CreateCarDto } from "@/dto/car.dto";
import buildFormData from "@/helpers/build-form-data";
import { classToPlain } from "class-transformer";

export const useApiCreateCar = (opts?: UseApiOptions) => useApi<CreateCarDto, any>(
    (data: CreateCarDto) => {
        const toSend = {
            ...classToPlain(data),
            photoFront: data.photoFront || undefined,
            photoBack: data.photoBack || undefined,
            photoCtcBack: data.photoCtcBack || undefined,
            photoCtcFront: data.photoCtcFront || undefined
        }
        const formData = buildFormData(toSend)
        return {
            method: 'POST',
            url: '/car',
            data: formData
        }
    }, { ...opts })

export const useApiGetCarsRentable = (opts?: UseApiOptions) => useApi<{ withoutDriver: boolean, paginate?: boolean }, any>(({ withoutDriver, paginate = true }) => ({
    method: 'GET',
    url: '/cars/rentable',
    params: {
        without_driver: withoutDriver ? 1 : 0,
        paginate: paginate ? 10 : 0
    }
}), { ...opts })

interface SuggestionItem {
    id: number
    name: string
}
export const useApiGetSuggestionColor = (opts?: UseApiOptions) => useApi<{ name: string }, SuggestionItem[]>(({ name }) => ({
    method: 'GET',
    url: '/suggestions/color',
    params: {
        name
    }
}), { ...opts })
export const useApiGetSuggestionMark = (opts?: UseApiOptions) => useApi<{ name: string }, SuggestionItem[]>(({ name }) => ({
    method: 'GET',
    url: '/suggestions/mark',
    params: {
        name
    }
}), { ...opts })
export const useApiGetSuggestionModel = (opts?: UseApiOptions) => useApi<{ markId: number }, SuggestionItem[]>(({ markId }) => ({
    method: 'GET',
    url: '/suggestions/mark/model',
    params: {
        mark_id: markId
    }
}), { ...opts })

export const useApiGetCarInfo = (opts?: UseApiOptions) => useApi<{ markId: number }, SuggestionItem[]>(({ markId }) => ({
    method: 'GET',
    url: `/car/`,
    params: {
        mark_id: markId
    }
}), { ...opts })

