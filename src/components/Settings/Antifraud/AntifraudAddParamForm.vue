<template>
  <div class="antifraud-addparam-form">
    <form
      action="#"
      class="antifraud-addparam-form__form"
      @submit.prevent="onSubmit"
    >
      <div class="row">
        <div class="col-md-6">
          <app-input
            v-model="values.paramName"
            label="Название параметра"
            :errors="errors.paramName"
          ></app-input>
        </div>
        <div class="col-md-6">
          <app-input
            v-model="values.costTripMore"
            label="Стоимость поездки более"
            :errors="errors.costTripMore"
            sufix="₽"
          ></app-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <app-input
            v-model="values.timeTripMore"
            label="Время поездки более"
            :errors="errors.timeTripMore"
            sufix="мин"
          ></app-input>
        </div>
        <div class="col-md-6">
          <app-input
            v-model="values.bonusSumMore"
            label="Сумма бонусов более"
            :errors="errors.bonusSumMore"
            sufix="₽"
          ></app-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <app-input
            v-model="values.timeTripLess"
            label="Время поездки менее"
            :errors="errors.timeTripLess"
            sufix="мин"
          ></app-input>
        </div>
        <div class="col-md-6">
          <app-input
            v-model="values.tipSumMore"
            label="Сумма чаевых более"
            :errors="errors.tipSumMore"
            sufix="₽"
          ></app-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <app-input
            v-model="values.costPerMinMore"
            label="Стоимость минуты более"
            :errors="errors.costPerMinMore"
            sufix="₽"
          ></app-input>
        </div>
        <div class="col-md-6">
          <app-input
            v-model="values.tipSumMore"
            label="Сумма чаевых более"
            :errors="errors.tipSumMore"
            sufix="₽"
          ></app-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <app-input
            v-model="values.costPerMinLess"
            label="Стоимость минуты менее"
            :errors="errors.costPerMinLess"
            sufix="₽"
          ></app-input>
        </div>
        <div class="col-md-6">
          <app-input
            v-model="values.costParkMore"
            label="Стоимость километра более"
            :errors="errors.costParkMore"
            sufix="₽"
          ></app-input>
        </div>
      </div>
      <div class="text-center">
        <app-button
          color="orange-grad"
          class="antifraud-addparam-form__btn"
          type="submit"
          >добавить</app-button
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
@Component({
  setup() {
    const { values, handleSubmit, errors, serialize } = useForm({
      fields: {
        paramName: useField("", [yup.string().required()]),
        costTripMore: useField("", [yup.number().required()]),
        bonusSumMore: useField("", [yup.number().required()]),
        tipSumMore: useField("", [yup.number().required()]),
        timeTripMore: useField("", [yup.number().required()]),
        timeTripLess: useField("", [yup.number().required()]),
        costPerMinMore: useField("", [yup.number().required()]),
        costPerMinLess: useField("", [yup.number().required()]),
        costParkMore: useField("", [yup.number().required()]),
      },
      watchAfterSubmit: true,
    });
    const onSubmit = handleSubmit(() => {
      const toSend = serialize();
      console.log(toSend)
    });
    return {
      onSubmit,
      values,
      errors,
    };
  },
})
export default class AntiformAddParamForm extends Vue {}
</script>

<style lang="scss">
.antifraud-addparam-form {
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