<template>
  <div class="login-form">
    <form action="#" class="login-form__form" @submit.prevent="onLogin">
      <phone-input
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
        <router-link to="#">Восстановление доступа</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PhoneInput from "../../PhoneInput.vue";
import { UserModule } from "@/store/modules/user";
import { ref, watch } from "@vue/composition-api";
import { Component, Vue } from "vue-property-decorator";
import useLoginForm from "./useLoginForm";
import "yup-phone";
import useRouter from "@/compositions/useRouter";
@Component({
  components: { PhoneInput },
  setup() {
    const { loginForm, onLogin } = useLoginForm({
      afterLogin: () => {
        useRouter().push({ name: "Statistics" });
      },
    });
    return {
      loginForm,
      onLogin,
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