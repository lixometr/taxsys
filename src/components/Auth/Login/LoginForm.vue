<template>
  <div class="login-form">
    <form action="#" class="login-form__form" @submit.prevent="onLogin">
      <app-input
        class="login-form__input"
        label="+7 999 999 99 99*"
        v-model="loginForm.values.phone"
        :errors="loginForm.errors.phone"
      />
      <app-input
        class="login-form__input"
        label="Пароль"
        type="password"
        v-model="loginForm.values.password"
        :errors="loginForm.errors.password"
      />
      <app-button color="orange-grad" width="220px">Войти</app-button>
    </form>
    <div class="login-form__footer">
      <div class="login-form__link">
        У вас нет аккаунта?
        <router-link :to="{ name: 'Register' }">Регистрация</router-link>
      </div>
      <div class="login-form__link">
        <router-link :to="{ name: 'Restore' }"
          >Восстановление доступа</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserModule } from "@/store/modules/user";
import { ref, watch } from "@vue/composition-api";
import { Component, Vue } from "vue-property-decorator";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import useRouter from "@/compositions/useRouter";
import * as yup from "yup";
import "yup-phone";
@Component({
  setup() {
    const router = useRouter();
    // login.exec({
    //   phone: "+79660108888",
    //   password: "123456",
    //   deviceName: "test",
    // });
    const loginForm = useForm({
      fields: {
        phone: useField(process.env.NODE_ENV === 'development' ? "+79660108888" : '', [
          yup.string().phone("7", true, "Введите корректный номер телефона"),
        ]),
        password: useField(process.env.NODE_ENV === 'production' ? "123456" : '', [yup.string().required("Введите пароль")]),
      },

      watchAfterSubmit: true,
    });
   
   

    let serverError = ref(null);
    const sendInfo = async () => {
      const login = await UserModule.login({
        phone: loginForm.values.phone,
        password: loginForm.values.password,
      });
      serverError.value = login.error.value;
      if (!login.error.value) {
        await UserModule.fetchUser();
        router.push({ name: "Home" });
      }
    };

    const onLogin = loginForm.handleSubmit(async (e: MouseEvent) => {
      e.preventDefault();
      await sendInfo();
    });

    return {
      onLogin,
      loginForm,
    };
  },
})
export default class LoginForm extends Vue {}
</script>

<style lang="scss">
.login-form {
  height: 100%;
  display: flex;
  flex-direction: column;
  &__form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__input {
    width: 100%;
    margin-bottom: 5rem;
    @include sm {
      margin-bottom: 3rem;
    }
    .app-input__el {
      padding-left: 2rem;
    }
  }
  &__link {
    &:first-child {
      @include xs {
        margin-bottom: 1rem;
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    @include xs {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>