import useApi, { UseApiOptions } from "@/compositions/useApi"
import { UserEntity } from "@/models/user.entity"
import { ConfigModule } from "@/store/modules/config"

export const useApiLogin = (opts?: UseApiOptions) => useApi<{ phone: string, password: string }, { token: string, expires_in: number }>(
    ({ phone, password }) => ({
        url: '/login',
        method: "POST",
        data: { Phone: phone.replace(/\s/ig, ''), password, },
    }),
    { ...opts }
)

export const useGetCsrf = () => useApi(() => ({ method: "GET", baseURL: ConfigModule.baseUrl, url: '/sanctum/csrf-cookie', }))

export const useApiGetUser = (opts?: UseApiOptions) => useApi<null, UserEntity>(() => ({ url: '/user', method: "GET" }), { ...opts })
