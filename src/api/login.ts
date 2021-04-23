import useApi, { UseApiOptions } from '@/compositions/useApi'
import { UserEntity } from '@/models/user.entity'
import { ConfigModule } from '@/store/modules/config'
import { plainToClass } from 'class-transformer'
import { AxiosResponse } from 'axios'
export const useApiLogin = (opts?: UseApiOptions) =>
  useApi<
    { phone: string; password: string },
    { token: string; expires_in: number }
  >(
    ({ phone, password }) => ({
      url: '/login',
      method: 'POST',
      data: { Phone: phone.replace(/\s/gi, ''), password },
    }),
    { ...opts },
  )

export const useGetCsrf = () =>
  useApi(() => ({
    method: 'GET',
    baseURL: ConfigModule.baseUrl,
    url: '/sanctum/csrf-cookie',
  }))

export const useApiGetUser = (opts?: UseApiOptions) =>
  useApi<null, UserEntity>(
    () => ({ url: '/user', method: 'GET' }),
    { ...opts },
    async ({ data }: AxiosResponse<UserEntity>) => {
      return plainToClass(UserEntity, data)
    },
  )
