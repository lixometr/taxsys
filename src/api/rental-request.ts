import useApi, { UseApiOptions } from '@/compositions/useApi'
import { classToPlain } from 'class-transformer'

export const useApiCreateRentalRequest = (opts?: UseApiOptions) =>
  useApi<{ carId: number }, any>(
    ({ carId }) => ({
      method: 'POST',
      url: '/rental_request',
      data: {
        car_id: carId,
      },
    }),
    { ...opts },
  )
export const useApiRemoveRentalRequest = (opts?: UseApiOptions) =>
  useApi<{ id: number }, any>(
    ({ id }) => ({
      method: 'DELETE',
      url: `/rental_request/${id}`,
    }),
    { ...opts },
  )
export const useApiGetRentalRequest = (opts?: UseApiOptions) =>
  useApi<{ id: number }, any>(
    ({ id }) => ({
      method: 'GET',
      url: `/rental_request/${id}`,
    }),
    { ...opts },
  )
export const useApiGetRentalRequests = (opts?: UseApiOptions) =>
  useApi<any, any>(
    () => ({
      method: 'GET',
      url: '/rental_request',
    }),
    { ...opts },
  )
