import useRouter from '@/compositions/useRouter'
import useField from '@/compositions/validators/useField'
import useForm from '@/compositions/validators/useForm'
import { UserModule } from '@/store/modules/user'
import * as yup from 'yup'
export default function useLoginForm({ afterLogin }: { afterLogin: Function }) {
  const router = useRouter()
  // login.exec({
  //   phone: "+79660108888",
  //   password: "123456",
  //   deviceName: "test",
  // });
  const loginForm = useForm({
    fields: {
      phone: useField(
        process.env.NODE_ENV === 'development' ? '+79660108888' : '',
        [yup.number().typeError('Введите корректный номер телефона')],
      ),
      password: useField(
        process.env.NODE_ENV === 'development' ? '123456' : '',
        [yup.string().required('Введите пароль')],
      ),
    },

    watchAfterSubmit: true,
  })

  const sendInfo = async () => {
    const login = await UserModule.login({
      phone: loginForm.values.phone,
      password: loginForm.values.password,
    })
    if (!login.error.value) {
      await UserModule.fetchUser()
      await UserModule.fetchBalance()
      afterLogin()
    }
  }

  const onLogin = loginForm.handleSubmit(async (e: MouseEvent) => {
    e.preventDefault()
    await sendInfo()
  })

  return {
    onLogin,
    loginForm,
  }
}
