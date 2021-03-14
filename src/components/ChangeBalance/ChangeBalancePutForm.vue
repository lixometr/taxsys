<template>
  <div class="change-balance-put-form">
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
    
      <div class="d-flex justify-content-center">
        <app-button
          class="change-balance-put-form__btn mt-10"
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
export default class ChangeBalancePutForm extends Vue {}
</script>

<style lang="scss">
.change-balance-put-form {
  &__btn {
    padding: 1rem 6rem;
  }
}
</style>
