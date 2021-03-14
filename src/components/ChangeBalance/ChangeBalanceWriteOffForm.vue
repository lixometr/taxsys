<template>
  <div class="change-balance-writeoff-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-input
        label="Сумма"
        v-model="values.amount"
        :errors="errors.amount"
        class=""
      />
      <app-input
        label="Коментарий"
        v-model="values.comment"
        :errors="errors.comment"
        class=""
      />
      <app-checkbox-input
        label="Выплатить"
        v-model="values.pay"
        :errors="errors.pay"
        shape="rect"
      />
      <div class="d-flex justify-content-center">
        <app-button
          class="change-balance-writeoff-form__btn mt-10"
          type="submit"
          color="orange-grad"
          >Выполнить</app-button
        >
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import AppCheckboxInput from "../AppCheckboxInput.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
@Component({
  components: { AppCheckboxInput },
  setup(props, { emit }) {
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        amount: useField("", [yup.number().required()]),
        comment: useField("", [yup.string()]),
        pay: useField(false, [yup.boolean().required()]),
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);

      emit('send')
    });
    return {
      onSubmit,
      values,
      errors,
    };
  },
})
export default class ChangeBalanceWriteOffForm extends Vue {}
</script>

<style lang="scss">
.change-balance-writeoff-form {
  &__btn {
    padding: 1rem 6rem;
  }
}
</style>
