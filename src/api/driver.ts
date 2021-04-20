import useApi, { UseApiOptions } from "@/compositions/useApi";
import { AddCardDto } from "@/dto/card.dto";
import buildFormData from "@/helpers/build-form-data";
import { DriverEntity } from "@/models/driver.entity";
import { AgregName } from "@/types/agregator.enum";
import { classToPlain, plainToClass } from "class-transformer";



export const useApiGetDrivers = (opts?: UseApiOptions) => useApi<{ page: number }, PaginationResponse<DriverEntity>>(({ page }) => ({
    method: "GET",
    url: '/drivers',
    params: {
        page
    },

}), opts, async ({ data }) => ({ ...data, data: data.data.map(driver => plainToClass(DriverEntity, driver)) }))

export const useApiGetDriversApplys = (opts?: UseApiOptions) => useApi<{ page: number }, PaginationResponse<DriverEntity>>(({ page }) => ({
    method: "GET",
    url: '/drivers',
    params: {
        page,
        trips: 'none',
    },

}), opts, async ({ data }) => ({ ...data, data: data.data.map(driver => plainToClass(DriverEntity, driver)) }))

export const useApiUpdateDriver = (opts?: UseApiOptions) => useApi<{ payment_group_id: number, antifraud_id: number, id: number }, any>(
    ({ payment_group_id, antifraud_id, id }) => ({
        method: "PUT",
        url: `/drivers/${id}`,
        data: {
            payment_group_id,
            antifraud_id
        }

    }), opts)
export const useApiAddDriverToBlacklist = (opts?: UseApiOptions) => useApi<{ id: number, cause: number }, any>(
    ({ id, cause }) => ({
        method: "PUT",
        url: `/drivers/${id}`,
        data: {
            is_blacklisted: cause
        }

    }), opts)

export const useApiGetDriverBlackList = (opts?: UseApiOptions) => useApi<{ page: number }, PaginationResponse<DriverEntity>>(({ page }) => ({
    method: "GET",
    url: '/drivers',
    params: {
        page,
        blacklisted: 1
    },

}), opts, async ({ data }) => ({ ...data, data: data.data.map(driver => plainToClass(DriverEntity, driver)) }))
export const useApiGetDriverInfo = (opts?: UseApiOptions) => useApi<{ id: number }, any>(({ id }) => ({
    method: "GET",
    url: `/drivers/${id}`,
    params: {
    },

}), opts, async ({ data }) => plainToClass(DriverEntity, data))


export const useApiDriverSetDefaultCard = (opts?: UseApiOptions) => useApi<{ cardId: number, id: number }, any>(
    ({ cardId, id }) => ({
        method: "POST",
        url: `/driver/${id}/set_default_card`,
        data: {
            card_id: cardId
        }

    }), opts)
export const useApiDriverDeleteCard = (opts?: UseApiOptions) => useApi<{ cardId: number, id: number }, any>(
    ({ cardId, id }) => ({
        method: "DELETE",
        url: `/driver/${id}/delete_card`,
        data: {
            card_id: cardId
        }

    }), opts)
export const useApiDriverAddCard = (opts?: UseApiOptions) => useApi<{ data: AddCardDto, id: number }, any>(
    ({ data, id }) => ({
        method: "POST",
        url: `/driver/${id}/add_card`,
        data: classToPlain(data)

    }), opts)

export const useApiDriverAddAgregator = (opts?: UseApiOptions) => useApi<{ id: number, agregator: AgregName, values: any }, any>(
    ({ id, agregator, values }) => {
        const toSend = {
            agreg: agregator,
            ...values
        }
        const formData = buildFormData(toSend)
        return {
            method: "POST",
            url: `/driver/${id}/addagreg`,
            data: formData
        }

    }, opts)