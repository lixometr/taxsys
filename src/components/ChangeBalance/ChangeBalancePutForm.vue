<template>
  <div class="change-balance-put-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-input
        label="Сумма"
        v-model="values.amount"
        :errors="errors.amount"
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
import { useApiRefill } from "@/api/balance";
import { errorHandler } from "@/helpers/error-handler";
import useRouter from "@/compositions/useRouter";
import { classToPlain, plainToClass } from "class-transformer";
import { PutBalanceDto, } from "@/dto/balance.dto";
@Component({
  components: { AppCheckboxInput },
  setup(props, { emit }) {
    const router = useRouter();
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        amount: useField("", [yup.number().required()]),
      },
    });
    const { exec, error, result } = useApiRefill({
      toast: { error: errorHandler() },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      await exec(plainToClass(PutBalanceDto, toSend));
      if (error.value) return;
      window.location = result.value.redirect;
      emit("send");
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
