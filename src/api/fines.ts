import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetFines = (opts: UseApiOptions) => useApi(() => ({
    method: 'GET',
    url: '/fines'
}), { ...opts })