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
import { useApiCarUpdatePayoff } from "@/api/car";
import useWordSclon from "@/compositions/useWordSclon";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { UpdateCarPayoffDto } from "@/dto/car.dto";
import { errorHandler } from "@/helpers/error-handler";
import { Car } from "@/models/car.entity";
import { computed, toRefs } from "@vue/composition-api";
import { plainToClass } from "class-transformer";
import { Component, Prop, Vue } from "vue-property-decorator";
import * as yup from "yup";
interface IProps {
  [key: string]: any;
  item: Car;
}
@Component({
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        rent7_0: useField(item.value.Rent70, [yup.number().required()]),
        rent6_1: useField("", [yup.number().required()]),
        buyout: useField("", [yup.number().required()]),
        deposit: useField(null, [yup.number().required().nullable()]),
        depoistFirstPart: useField("", [yup.number().required()]),
        rest: useField("", [yup.number().required()]),
      },
      rename: {
        rent7_0: "Rent70",
        rent6_1: "Rent61",
        buyout: "Ransom",
        rest: "deposit_delay_days",
        depoistFirstPart: "first_deposit",
        deposit: "Deposit",
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);
      const { exec, error } = useApiCarUpdatePayoff({
        toast: {
          error: errorHandler(),
          success: () => "Данные успешно обновлены!",
        },
      });
      await exec({
        data: plainToClass(UpdateCarPayoffDto, toSend),
        id: item.value.id,
      });
      if (error.value) return;
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
export default class CarInfoPayoffForm extends Vue {
  @Prop() item: Car;
}
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
