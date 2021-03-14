import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetStaff = (opts?: UseApiOptions) => useApi(() => ({
    method: 'GET',
    url: '',
}), {...opts})