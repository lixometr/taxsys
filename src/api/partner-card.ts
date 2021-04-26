import useApi, { UseApiOptions } from "@/compositions/useApi";
import { AddCardDto } from "@/dto/card.dto";
import { CardEntity } from "@/models/card.entity";
import { classToPlain, plainToClass } from "class-transformer";

export const useApiGetPartnerCards = (opts?: UseApiOptions) => useApi<any, any>(
    () => ({
        method: "GET",
        url: `/partner/cards`,
        data: {
        }

    }), opts, ({data}) => {
        return data.map((card: CardEntity) => plainToClass(CardEntity, card))
    })

export const useApiPartnerAddCard = (opts?: UseApiOptions) => useApi<{data: AddCardDto}, any>(
    ({data}) => ({
        method: "POST",
        url: `/partner/add_card`,
        data: classToPlain(data)

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