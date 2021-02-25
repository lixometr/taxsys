<template>
  <div class="payment-systems-form">
    <form
      action="#"
      class="payment-systems-form__form"
      @submit.prevent="onSubmit"
    >
      <app-select
        v-model="values.paymentSystem"
        label="Платежная система"
        :options="paymentSystemItems"
        :errors="errors.paymentSystem"
        :reduce="item => item.value"
        :searchable="false"
      />
      <app-input
        v-model="values.login"
        label="Логин API"
        :errors="errors.login"
      />
      <app-input
        v-model="values.password"
        label="Пароль API"
        :errors="errors.password"
      />
      <div class="text-center">
        <app-button
          color="orange-grad"
          class="payment-systems-form__btn"
          type="submit"
          >добавить</app-button
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import AppSelect from "../../AppSelect.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
@Component({
  components: { AppSelect },
  setup() {
    const { values, handleSubmit, errors, serialize } = useForm({
      fields: {
        paymentSystem: useField("", [yup.string().required()]),
        login: useField("", [yup.string().required()]),
        password: useField("", [yup.string().required()]),
      },
      watchAfterSubmit: true,
    });
    const onSubmit = handleSubmit(() => {
      const toSend = serialize();
      console.log(toSend);
    });
    const paymentSystemItems = [
      {
        label: 'Qiwi',
        value: 'qiwi'
      },
      {
        label: 'MANDARIN',
        value: 'mandarin'
      },
    ]
    return {
      onSubmit,
      values,
      errors,
      paymentSystemItems
    };
  },
})
export default class PaymentSystemsAddForm extends Vue {}
</script>

<style lang="scss">
.payment-systems-form {
  &__btn {
    margin-top: 2rem;
    padding-left: 7rem;
    padding-right: 7rem;
    @include xs {
      margin-top: 0;
    }
  }
  .app-input {
    margin-bottom: 2rem;
    @include xs {
      margin-bottom: 0;
    }
  }
}
</style>