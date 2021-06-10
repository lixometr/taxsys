import useApi, { UseApiOptions } from '@/compositions/useApi'
import { AgregName } from '@/types/agregator.enum'

export const useApiGetAgregators = (opts?: UseApiOptions) =>
  useApi(
    () => ({
      method: 'GET',
      url: '/partner/aggregators',
    }),
    { ...opts },
  )
export const useApiGetAgregatorBalance = (opts?: UseApiOptions) =>
  useApi<{ agregator?: string }, any>(
    ({ agregator } = {}) => ({
      method: 'GET',
      url: '/driver/available_agreg_balance',
      params: {
        agreg: agregator || undefined,
      },
    }),
    { ...opts },
  )
