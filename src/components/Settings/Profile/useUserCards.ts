import { useApiGetPartnerCards, useApiPartnerDeleteCard, useApiPartnerSetDefault } from "@/api/partner-card"
import useModal from "@/compositions/useModal"
import { errorHandler } from "@/helpers/error-handler"
import { UserModule } from "@/store/modules/user"
import { ModalName } from "@/types/modal.enum"
import { ref } from "@vue/composition-api"

export default function useUserCards() {
  const cards = ref([])
  const getCards = async () => {
    const { exec, error, result } = useApiGetPartnerCards({
      toast: {
        error: errorHandler(),
      },
    })
    await exec()
    if (error.value) return
    cards.value = result.value
  }
  getCards()
  const addCard = () => {
    const { showByName } = useModal()
    showByName(ModalName.addCard, {
      props: {
        type: 'partner',
        id: UserModule.user.id,
      },
      on: {
        send: () => {
          getCards()
          return
        },
      },
    })
    return
  }
  const updateDefault = async (item) => {
    const { exec, error } = useApiPartnerSetDefault({
      toast: {
        error: errorHandler(),
        success: () => 'Карта по умолчанию успешно установлена!',
      },
    })
    await exec({ id: item.id })
    if (error.value) return
    await getCards()
    return
  }
  const removeCard = async (item) => {
    const { exec, error } = useApiPartnerDeleteCard({
      toast: {
        error: errorHandler(),
        success: () => 'Карта успешно удалена!',
      },
    })
    await exec({ id: item.id })
    await getCards()
    if (error.value) return
  }

  return {
    removeCard,
    updateDefault,
    addCard,
    cards,
  }
}
