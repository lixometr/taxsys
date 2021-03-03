import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";

interface RegisterParkData {
    name: string
    last_name: string
    middle_name: string
    birthday: Date
}
export const useApiRegisterPark = (opts: UseApiOptions) => useApi<RegisterParkData, any>(
    (data) => ({
        method: 'POST',
        url: "/register",
        data: {
           ...data,
           birthday: useMoment(data.birthday).format('YYYY-MM-DD')
        }
    }), {  ...opts, })
