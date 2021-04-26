import useApi, { UseApiOptions } from "@/compositions/useApi";
import { AddCarRecordDto } from "@/dto/add-car-record.dto";
import { CarRequestsDto } from "@/dto/car-requests.dto";
import { CarTrackerDto } from "@/dto/car-tracker.dto";
import { CreateCarDto, UpdateCarPayoffDto } from "@/dto/car.dto";
import buildFormData from "@/helpers/build-form-data";
import { Car } from "@/models/car.entity";
import { classToPlain, plainToClass } from "class-transformer";

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
        without_driver: withoutDriver === false ? 0 : withoutDriver === undefined ? undefined : 1,
        paginate: paginate ? 10 : 0
    }
}), { ...opts })


export const useApiGetCarInfo = (opts?: UseApiOptions) => useApi<{ id: number }, Car>(({ id }) => ({
    method: 'GET',
    url: `/car/${id}`,
}), { ...opts }, async ({ data }) => {
    return plainToClass(Car, data)
})
export const useApiDeleteCar = (opts?: UseApiOptions) => useApi<{ id: number }, any>(({ id }) => ({
    method: 'DELETE',
    url: `/car/${id}`,
}), { ...opts })
export const useApiUpdateCar = (opts?: UseApiOptions) => useApi<{ id: number, data: any }, any>(({ id, data }) => ({
    method: 'PUT',
    url: `/car/${id}`,
    data: data
}), { ...opts })
export const useApiCarUpdateTracker = (opts?: UseApiOptions) => useApi<{ data: CarTrackerDto, id: number }, any>(
    ({ id, data }) => ({
        method: 'PUT',
        url: `/car/${id}`,
        data: {
            tracker: classToPlain(data)
        }
    }), { ...opts })
export const useApiCarEndRent = (opts?: UseApiOptions) => useApi<{ id: number, }, any>(({ id }) => ({
    method: 'PUT',
    url: `/car/${id}`,
    data: {
        driver_id: null
    }
}), { ...opts })
export const useApiBlockCar = (opts?: UseApiOptions) => useApi<{ id: number }, any>(({ id }) => ({
    method: 'POST',
    url: `/car/${id}/tracker/block`,
}), { ...opts })
export const useApiUnBlockCar = (opts?: UseApiOptions) => useApi<{ id: number }, any>(({ id }) => ({
    method: 'POST',
    url: `/car/${id}/tracker/unblock`,
}), { ...opts })
export const useApiCarAddInspection = (opts?: UseApiOptions) => useApi<AddCarRecordDto, any>(
    (data: AddCarRecordDto) => ({
        method: 'POST',
        url: `/inspection`,
        data: classToPlain(data)
    }), { ...opts })

export const useApiCarUpdateRequests = (opts?: UseApiOptions) => useApi<{ data: CarRequestsDto, id: number }, any>(
    ({ id, data }) => {
        return {
            method: 'PUT',
            url: `/car/${id}`,
            data: {
                options: classToPlain(data)
            }
        }
    }, { ...opts })

export const useApiCarUpdatePayoff = (opts?: UseApiOptions) => useApi<{ data: UpdateCarPayoffDto, id: number }, any>(
    ({ id, data }) => {
        return {
            method: 'PUT',
            url: `/car/${id}`,
            data: classToPlain(data)

        }
    }, { ...opts })
