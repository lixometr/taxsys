import useApi, { UseApiOptions } from "@/compositions/useApi";

export const useApiGetPartnerCards = (opts?: UseApiOptions) => useApi<any, any>(
    () => ({
        method: "GET",
        url: `/partner/cards`,
        data: {
        }

    }), opts)

export const useApiPartnerAddCard = (opts?: UseApiOptions) => useApi<{ number: number, def: boolean, }, any>(
    ({ number, def }) => ({
        method: "POST",
        url: `/partner/add_card`,
        data: {
            number,
            def
        }

    }), opts)
export const useApiPartnerDeleteCard = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "DELETE",
        url: `/partner/delete_card`,
        data: {
            card_id: id,
        }

    }), opts)
export const useApiPartnerSetDefault = (opts?: UseApiOptions) => useApi<{ id: number }, any>(
    ({ id }) => ({
        method: "POST",
        url: `/partner/set_default_card`,
        data: {
            card_id: id,
        }

    }), opts)