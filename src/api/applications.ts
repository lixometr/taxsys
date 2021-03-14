import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetApplications = (opts: UseApiOptions) => useApi(() => ({
    method: 'GET',
    url: ''
}), { ...opts })