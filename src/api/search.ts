import useApi from "@/compositions/useApi";

export const useApiSearch = () => useApi(() => ({ url: '/search', method: 'GET' }))