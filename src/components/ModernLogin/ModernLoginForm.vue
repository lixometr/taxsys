<template>
  <form class="modern-login-form" @submit.prevent="onLogin">
    <phone-input
      class="modern-login-form__input"
      v-model="values.phone"
      :errors="errors.phone"
      label="+7 999 999 99 99"
    />
    <app-input
      type="password"
      class="modern-login-form__input"
      v-model="values.password"
      :errors="errors.password"
      label="Пароль"
    />
    <div>
      <modern-btn class="modern-login-form__btn" type="submit"
        >войти</modern-btn
      >
    </div>
    <div class="modern-login-form__reset mt-20">
      <router-link to="#">Восстановить пароль</router-link>
    </div>
  </form>
</template>

<script lang="ts">
import ModernBtn from "../ModernBtn.vue";
import PhoneInput from "../PhoneInput.vue";
import { Component, Vue } from "vue-property-decorator";
import useLoginForm from "../Auth/Login/useLoginForm";
import useRouter from "@/compositions/useRouter";
@Component({
  components: { PhoneInput, ModernBtn },
  setup() {
    const {
      loginForm: { values, errors },
      onLogin,
    } = useLoginForm({
      afterLogin: () => {
        useRouter().push({ name: "CDFinances" });
      },
    });
    return { values, errors, onLogin };
  },
})
export default class ModernLoginForm extends Vue {}
</script>

<style lang="scss">
.modern-login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include xs {
    width: stretch;
  }
  &__input {
    width: 300px;
    @include xs {
      width: 100%;
    }
  }
  &__reset {
    a {
      color: #b8b5ff;
    }
  }
}
</style>