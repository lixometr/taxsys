import useApi, { UseApiOptions } from "@/compositions/useApi"

interface SuggestionItem {
    id: number
    name: string
}

export const useApiGetSuggestionColor = (opts?: UseApiOptions) => useApi<{ name: string }, SuggestionItem[]>(({ name }) => ({
    method: 'GET',
    url: '/suggestions/color',
    params: {
        name
    }
}), { ...opts })
export const useApiGetSuggestionMark = (opts?: UseApiOptions) => useApi<{ name: string }, SuggestionItem[]>(({ name }) => ({
    method: 'GET',
    url: '/suggestions/mark',
    params: {
        name
    }
}), { ...opts })
export const useApiGetSuggestionModel = (opts?: UseApiOptions) => useApi<{ markId: number }, SuggestionItem[]>(({ markId }) => ({
    method: 'GET',
    url: '/suggestions/mark/model',
    params: {
        mark_id: markId
    }
}), { ...opts })
