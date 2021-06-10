import {
  useApiGetAgregatorBalance,
  useApiGetAgregators,
} from '@/api/agregators'
import { errorHandler } from '@/helpers/error-handler'
import { ref } from '@vue/composition-api'

export default () => {
  const availableAgregators = ref([])
  const items = ref([])
  const totalBalance = ref(0)

  const fetchAvailableAgregators = async () => {
    const { exec, error, result } = useApiGetAgregators({
      loading: true,
      toast: { error: errorHandler() },
    })
    await exec()
    if (error.value) return
    availableAgregators.value = result.value as any[]
  }
  const fetchAgregatorBalances = async () => {
    const resolvers = availableAgregators.value.map(async (agregator) => {
      const { exec, error, result } = useApiGetAgregatorBalance({
        loading: true,
        toast: { error: errorHandler() },
      })
      await exec({ agregator })
      if (error.value) return
      return {
        name: agregator,
        balance: result.value,
      }
    })
    const balances = await Promise.all(resolvers)
    items.value = balances
  }
  const fetchTotalBalance = async () => {
    const { exec, error, result } = useApiGetAgregatorBalance({
      loading: true,
      toast: { error: errorHandler() },
    })
    await exec()
    if (error.value) return
    totalBalance.value = result.value
  }
  const isLoading = ref(true)
  const fetchData = async () => {
    isLoading.value = true
    await fetchAvailableAgregators()
    await fetchAgregatorBalances()
    await fetchTotalBalance()
    isLoading.value = false
  }
  fetchData()
  return { availableAgregators, items, totalBalance, isLoading }
}
