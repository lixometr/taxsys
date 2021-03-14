import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetAgregators = (opts?: UseApiOptions) => useApi(() => ({
    method: 'GET',
    url: '/partner/aggregators',
}), {...opts})