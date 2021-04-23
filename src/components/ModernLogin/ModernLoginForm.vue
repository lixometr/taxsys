<template>
  <form class="modern-login-form" @submit.prevent="submit">
    <phone-input
      class="modern-login-form__input"
      v-model="values.phone"
      :errors="errors.phone"
      label="+7 999 999 99 99"
    />
    <app-input
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
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
@Component({
  components: { PhoneInput, ModernBtn },
  setup() {
    const { values, errors, handleSubmit, serialize } = useForm({
      fields: {
        phone: useField("", [
          yup.number().typeError("Введите корректный номер телефона"),
        ]),
        password: useField("", [yup.string().required()]),
      },
    });
    const submit = handleSubmit(async () => {
      console.log(serialize());
    });
    return { values, errors, submit };
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