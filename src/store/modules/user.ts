import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";
import { useApiGetUser, useApiLogin } from "@/api/auth";
import useCookie from "@/compositions/useCookie";
import { UserEntity } from "@/models/user.entity";
import { UserToken } from "@/types/constants";
@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule {
  user: UserEntity | null = null
  token: string | null = null
  get isAuth() {
    return !!this.token
  }
  @Mutation
  setUser(value: UserEntity) {
    this.user = value
  }
  @Mutation
  setToken(token: string) {
    this.token = token
  }
  @Action
  setTokenWithCookie({ token, expiresIn }: { token: string, expiresIn: number }) {
    this.setToken(token)
    const cookie = useCookie()
    cookie.set(UserToken, token, expiresIn)
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
    await this.fetchUser()
  }
  @Action
  async fetchUser() {
    const getUser = useApiGetUser({ toast: { error: err => err.message } })
    await getUser.exec()
    if (!getUser.error.value) {
      this.setUser(getUser.result.value)
    }
    return getUser
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
  async logout() {
    return true
  }
}
export const UserModule = getModule(User)