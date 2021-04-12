import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetStatistics = (opts?: UseApiOptions) => useApi(() => ({
    method: 'GET',
    url: '/statistics',
}), {...opts})