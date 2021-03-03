import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetGeoIp = (opts?: UseApiOptions) => useApi(
    () => ({
        method: "GET",
        url: '/geoip'
    }), {...opts})