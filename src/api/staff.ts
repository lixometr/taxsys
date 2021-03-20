import useApi, { UseApiOptions } from "@/compositions/useApi";
import { StaffDto } from "@/dto/staff.dto";
import { classToPlain } from "class-transformer";

export const useApiGetStaff = (opts?: UseApiOptions) => useApi<{page: number}, any>(({page}) => ({
    method: 'GET',
    url: '/staff',
    params: {
        page,
    },
}), { ...opts })
export const useApiAddStaff = (opts?: UseApiOptions) => useApi<StaffDto, any>((data: StaffDto) => ({
    method: 'POST',
    url: '/staff',
    data: classToPlain(data)
}), { ...opts })