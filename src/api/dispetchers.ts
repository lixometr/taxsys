import useApi, { UseApiOptions } from '@/compositions/useApi'
import useMoment from '@/compositions/useMoments'
import { CreateDispetcherDto } from '@/dto/dispetcher.dto'
import { ApiDate } from '@/types/constants'
import { classToPlain } from 'class-transformer'

export const useApiGetDispetchers = (opts: UseApiOptions) =>
  useApi<{ dateFrom: Date; dateTo: Date; agregator: string }, any[]>(
    ({ dateFrom, dateTo, agregator }) => ({
      method: 'GET',
      url: '/controlroom',
      params: {
        date_from: useMoment(dateFrom).format(ApiDate),
        date_to: useMoment(dateTo).format(ApiDate),
        agregator: agregator === 'all' ? undefined : agregator,
        'append[]': 'stats'
      },
    }),
    opts
  )
export const useApiCreateDispetcher = (opts: UseApiOptions) =>
  useApi<CreateDispetcherDto, any>(
    (data: CreateDispetcherDto) => ({
      method: 'POST',
      url: '/controlroom',
      params: classToPlain(data),
    }),
    opts,
  )
export const useApiDeleteDispetcher = (opts: UseApiOptions) =>
  useApi<{ id: number }, any>(
    ({ id }) => ({
      method: 'DELETE',
      url: `/controlroom/${id}`,
    }),
    opts,
  )
