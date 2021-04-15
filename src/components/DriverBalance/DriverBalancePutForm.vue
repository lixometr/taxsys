<template>
  <div class="driver-balance-put-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-input
        label="Сумма"
        v-model="values.amount"
        :errors="errors.amount"
        class=""
      />
      <app-input
        label="Комментарий"
        v-model="values.comment"
        :errors="errors.comment"
        class=""
      />

      <div class="d-flex justify-content-center">
        <app-button
          class="driver-balance-put-form__btn mt-10"
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
import { Component, Prop, Vue } from "vue-property-decorator";
import * as yup from "yup";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { useApiDriverBalancePut } from "@/api/driver-balance";
import { DriverPutBalanceDto } from "@/dto/driver-balance.dto";
import { toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  driverId: number;
  agregator: string
}
@Component({
  components: { AppCheckboxInput },
  setup(props: IProps, { emit }) {
    const { driverId, agregator} = toRefs<IProps>(props);
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        amount: useField("", [yup.number().required()]),
        comment: useField("", [yup.string().optional()]),
      },
    });
    const { exec, error, result} = useApiDriverBalancePut({
      toast: {
        error: errorHandler(),
        success: () => "Баланс успешно пополнен!",
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      await exec(plainToClass(DriverPutBalanceDto, {...toSend, id: driverId.value, agreg: agregator.value}));
      if (error.value) return;
      emit("send", result.value);
    });
    return {
      onSubmit,
      values,
      errors,
    };
  },
})
export default class DriverBalancePutForm extends Vue {
  @Prop(Number) driverId: number;
  @Prop(String) agregator: string
}
</script>

<style lang="scss">
.driver-balance-put-form {
  &__btn {
    padding: 1rem 6rem;
  }
}
</style>
