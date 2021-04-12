import useApi, { UseApiOptions } from "@/compositions/useApi";
import { CreateApplicationDto, UpdateApplicationInfoDto } from "@/dto/application.dto";
import buildFormData from "@/helpers/build-form-data";
import { classToPlain } from "class-transformer";

export const useApiGetApplications = (opts: UseApiOptions) => useApi<never, any>(() => ({
    method: 'GET',
    url: 'partnerapp'
}), { ...opts })
export const useApiCreateApplication = (opts: UseApiOptions) => useApi<CreateApplicationDto, any>(
    (data: CreateApplicationDto) => {
        const toSend = {
            ...classToPlain(data),
            logo: data.logo,
            background: data.background,
            icon: data.icon
        }
        const formData = buildFormData(toSend)

        return {
            method: 'POST',
            url: '/partnerapp',
            data: formData
        }
    }, { ...opts })
export const useApiApplicationEditInfo = (opts: UseApiOptions) => useApi<{data: UpdateApplicationInfoDto, id: number}, any>(
    ({data, id}: {data: UpdateApplicationInfoDto, id: number}) => {
        return {
            method: 'PUT',
            url: `/partnerapp/${id}`,
            data: classToPlain(data)
        }
    }, { ...opts })