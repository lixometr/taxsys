import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";
import { useApiGetUser, useApiLogin } from "@/api/login";
import useCookie from "@/compositions/useCookie";
import { UserEntity } from "@/models/user.entity";
import { UserToken } from "@/types/constants";
import { errorHandler } from "@/helpers/error-handler";
import useRouter from "@/compositions/useRouter";
import useToast from "@/compositions/useToast";
import { useApiGetBalance } from "@/api/balance";
@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule {
  user: UserEntity | null = null
  token: string | null = null
  balance: number = null
  get isAuth() {
    return !!this.token && this.user
  }
  @Mutation
  setUser(value: UserEntity) {
    this.user = value
  }
  @Mutation
  setToken(token: string) {
    this.token = token
  }
  @Mutation
  setBalance(balance: number) {
    this.balance = balance
  }
  @Action
  setTokenWithCookie({ token, expiresIn }: { token: string, expiresIn: number }) {
    this.setToken(token)
    const cookie = useCookie()
    cookie.set(UserToken, token, expiresIn)
  }
  @Action
  removeToken() {
    const cookie = useCookie()
    cookie.remove(UserToken)
    this.setToken(null)
  }
  @Action
  initToken() {
    const cookie = useCookie()
    const token = cookie.get(UserToken)
    this.setToken(token)
  }
  @Action
  async init() {
    this.initToken()
    if (this.token) {
      const result = await this.fetchUser()
      if (!result) return
      await this.fetchBalance()
    }
  }

  @Action
  async fetchUser() {
    const getUser = useApiGetUser({ toast: { error: errorHandler() } })
    await getUser.exec()
    if (!getUser.error.value) {
      this.setUser(getUser.result.value)
    } else {
      this.setUser(null)
      this.removeToken()
    }
    return getUser.result.value
  }
  @Action
  async fetchBalance() {
    const { exec, result, error } = useApiGetBalance({ toast: { error: errorHandler() } })
    await exec()
    if (!error.value) {
      this.setBalance(result.value.balance)
    }
  }
  @Action
  async login({ phone, password }) {
    const login = useApiLogin({
      toast: {
        error(err) {
          return 'Пользователь не найден'
          // return err.data.message
        },
        success(data) {
          return 'Успешный вход'
        }
      },
    })
    await login.exec({ phone, password })
    if (login.result.value) {
      this.setTokenWithCookie({ token: login.result.value.token, expiresIn: login.result.value.expires_in });
    }
    return login
  }
  @Action
  async logout() {
    this.removeToken()
    this.setUser(null)
    const router = useRouter()
    router.push({ name: "Login" })
    const { success } = useToast()
    success({
      message: 'Выход'
    })
    return true
  }
}
export const UserModule = getModule(User)