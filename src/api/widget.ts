import useApi, { UseApiOptions } from "@/compositions/useApi";
import { CreateWidgetDto } from "@/dto/widget.dto";
import buildFormData from "@/helpers/build-form-data";
import { classToPlain } from "class-transformer";

export const useApiGetWidgets = (opts?: UseApiOptions) => useApi<never, any>(() => ({
    method: "GET",
    url: '/widgets',

}), opts)
export const useApiGetWidget = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "GET",
        url: `/widgets/${id}`,

    }), opts)
export const useApiCreateWidget = (opts?: UseApiOptions) => useApi<CreateWidgetDto, { code: string }>(
    (data: CreateWidgetDto) => {
        const toSend = {
            ...classToPlain(data),
            background: data.background
        }
        const formData = buildFormData(toSend)
        return {
            method: "POST",
            url: `/widgets`,
            data: formData
        }

    }, opts)
export const useApiUpdateWidget = (opts?: UseApiOptions) => useApi<{data: CreateWidgetDto, id: number}, { code: string }>(
    ({data, id}) => {
        const toSend = {
            ...classToPlain(data),
            background: data.background,
            _method: 'PUT'
        }
        const formData = buildFormData(toSend)
        return {
            method: "POST",
            url: `/widgets/${id}`,
            data: formData,

        }

    }, opts)