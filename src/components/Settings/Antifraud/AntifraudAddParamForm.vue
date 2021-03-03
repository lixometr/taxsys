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
            v-model="values.name"
            label="Название параметра"
            :errors="errors.name"
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
            v-model="values.tipSumMoreRub"
            label="Сумма чаевых более"
            :errors="errors.tipSumMoreRub"
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
            v-model="values.tipSumMorePerc"
            label="Сумма чаевых более"
            :errors="errors.tipSumMorePerc"
            sufix="%"
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
            v-model="values.costPerKmMore"
            label="Стоимость километра более"
            :errors="errors.costPerKmMore"
            sufix="₽"
          ></app-input>
        </div>
        <div class="d-flex justify-content-center w-100">
          <app-checkbox-input
            label="Назначить по умолчанию для новых водителей"
            v-model="values.isDefault"
            :errors="errors.isDefault"
          />
        </div>
      </div>
      <div class="text-center">
        <app-button
          color="orange-grad"
          class="antifraud-addparam-form__btn"
          type="submit"
          >{{ btnText }}</app-button
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import AppCheckboxInput from "../../AppCheckboxInput.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Prop, Vue } from "vue-property-decorator";
import { useApiCreateAntifraud, useApiUpdateAntifraud } from "@/api/antifraud";
import * as yup from "yup";
import { AntifraudEntity } from "@/models/antifraud.entity";
import { toRefs } from "@vue/composition-api";
import { errorHandler } from "@/helpers/error-handler";
@Component({
  components: { AppCheckboxInput },
  setup(props: any, { emit }) {
    const item: AntifraudEntity = props.item;
    const isNew = props.isNew;
    const { values, handleSubmit, errors, serialize } = useForm({
      fields: {
        name: useField(item.name, [yup.string().required()]),
        costTripMore: useField(item.cost_trip_more?.toString(), [
          yup.number().required(),
        ]),
        bonusSumMore: useField(item.sum_bonus_more?.toString(), [
          yup.number().required(),
        ]),
        tipSumMorePerc: useField(item.sum_tip_more_perc?.toString(), [
          yup.number().required(),
        ]),
        tipSumMoreRub: useField(item.sum_tip_more_rub?.toString(), [
          yup.number().required(),
        ]),
        timeTripMore: useField(item.time_trip_more?.toString(), [
          yup.number().required(),
        ]),
        timeTripLess: useField(item.time_trip_less?.toString(), [
          yup.number().required(),
        ]),
        costPerMinMore: useField(item.cost_min_more?.toString(), [
          yup.number().required(),
        ]),
        costPerMinLess: useField(item.cost_min_less?.toString(), [
          yup.number().required(),
        ]),
        costPerKmMore: useField(item.cost_km_more?.toString(), [
          yup.number().required(),
        ]),
        isDefault: useField(!!item.default, [yup.boolean()]),
      },
      watchAfterSubmit: true,
    });

    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      if (isNew) {
        const { exec: createItem, error } = useApiCreateAntifraud({
          toast: { success: () => "Параметр создан!", error: errorHandler() },
        });
        await createItem(toSend);
        if(error.value) return
      } else {
        const { exec: updateItem, error } = useApiUpdateAntifraud({
          toast: { success: () => "Параметр обновлен!", error: errorHandler() },
        });
        await updateItem({ ...toSend, id: item.id });
        if (error.value) return;
      }
      emit("send");
    });
    return {
      onSubmit,
      values,
      errors,
    };
  },
})
export default class AntiformAddParamForm extends Vue {
  @Prop({ type: Boolean, default: true })
  isNew: boolean;
  @Prop({ type: Object, default: () => ({}) })
  item: AntifraudEntity;

  get btnText() {
    if (this.isNew) {
      return "добавить";
    } else {
      return "обновить";
    }
  }
}
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