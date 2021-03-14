<template>
  <div class="car-info-payoff-form">
    <form class="row w-100" action="#" @submit.prevent="onSubmit">
      <div class="col-lg-4">
        <app-input
          label="Аренда 7/0"
          v-model="values.rent7_0"
          :errors="errors.rent7_0"
          sufix="₽ / день"
          class="car-info-payoff-form__input"
        />
      </div>
      <div class="col-lg-4">
        <app-input
          label="Аренда 6/1"
          v-model="values.rent6_1"
          :errors="errors.rent6_1"
          sufix="₽ / день"
          class="car-info-payoff-form__input"
        />
      </div>
      <div class="col-lg-4">
        <app-input
          label="Выкуп"
          v-model="values.buyout"
          :errors="errors.buyout"
          sufix="₽ / день"
          class="car-info-payoff-form__input"
        />
      </div>
      <div class="col-lg-4">
        <app-input
          label="Размер депозита"
          v-model="values.deposit"
          :errors="errors.deposit"
          sufix="₽ / день"
          class="car-info-payoff-form__input"
        />
      </div>
      <div class="col-lg-4">
        <app-input
          label="Первая часть депозита "
          v-model="values.depoistFirstPart"
          :errors="errors.depoistFirstPart"
          sufix="₽ / день"
          class="car-info-payoff-form__input"
        />
      </div>
      <div class="col-lg-4">
        <app-input
          label="Остаток в течении"
          v-model="values.rest"
          :errors="errors.rest"
          :sufix="daySclon"
          class="car-info-payoff-form__input"
        />
      </div>

      <div class="col-12 d-flex justify-content-center">
        <app-button type="submit" color="orange-grad">Сохранить</app-button>
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import useWordSclon from "@/compositions/useWordSclon";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { computed } from "@vue/composition-api";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
@Component({
  setup(props, { emit }) {
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        rent7_0: useField("", [yup.number().required()]),
        rent6_1: useField("", [yup.number().required()]),
        buyout: useField("", [yup.number().required()]),
        deposit: useField("", [yup.number().required()]),
        depoistFirstPart: useField("", [yup.number().required()]),
        rest: useField("", [yup.number().required()]),
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);

      emit("send");
    });
    const { exec } = useWordSclon(["дня", "дней", "дней"]);
    const daySclon = computed(() => exec(+values.rest));
    return {
      daySclon,
      onSubmit,
      values,
      errors,
    };
  },
})
export default class CarInfoPayoffForm extends Vue {}
</script>

<style lang="scss">
.car-info-payoff-form {
  &__input {
    .app-input__sufix {
      width: 100px;
    }
  }
}
</style>
