<template>
  <div class="add-payment-group-form">
    <form action="#" @submit.prevent="onSubmit">
      <div class="row mb-30">
        <div class="col-lg-6">
          <app-input
            label="Название групы"
            v-model="values.groupName"
            :errors="errors.groupName"
            class=""
          />
        </div>
        <div class="col-lg-6">
          <span class="mr-20">Время списания:</span>
          <span>
            <span class="mr-10">c</span>
            <app-input
              width="50px"
              :inputAttrs="{ class: 'color-purple' }"
              :inline="true"
              :showErrors="false"
              v-model="values.timePayoffFrom"
              :errors="errors.timePayoffFrom"
              class="mr-5"
          /></span>
          <span class="mr-20">
            <span class="mr-10">по</span>
            <app-input
              width="50px"
              :inputAttrs="{ class: 'color-purple' }"
              :inline="true"
              :showErrors="false"
              v-model="values.timePayoffTo"
              :errors="errors.timePayoffTo"
              class="mr-10"
            />
            <span>часов</span></span
          >
        </div>
      </div>
      <div class="mb-40">
        <div class="color-purple mb-15">Принимать заявки:</div>
        <div class="row">
          <div class="col-lg-4 add-payment-group-form__switcher-item">
            <div class="color-grey-2 font-md">Один раз в день</div>
            <app-switcher
              v-model="values.getOrdersDaily"
              :errors="errors.getOrdersDaily"
            />
          </div>
          <div class="col-lg-4 add-payment-group-form__switcher-item">
            <div class="color-grey-2 font-md">По будним дням</div>
            <app-switcher
              v-model="values.getOrdersWorkingDays"
              :errors="errors.getOrdersWorkingDays"
            />
          </div>
          <div class="col-lg-4 add-payment-group-form__switcher-item">
            <div class="color-grey-2 font-md">Ежедневно и круглосуточно</div>
            <app-switcher
              v-model="values.getOrdersEveryday"
              :errors="errors.getOrdersEveryday"
            />
          </div>
        </div>
      </div>
      <div class="mb-20">
        <div class="row">
          <div class="col-lg-4">
            <app-input
              v-model="values.autoPayoffReaching"
              :errors="errors.autoPayoffReaching"
              label="Авто. выплаты при достижении"
              sufix="₽"
            />
          </div>
          <div class="col-lg-4">
            <app-input
              v-model="values.minOrderSum"
              :errors="errors.minOrderSum"
              label="Минимальная сумма заявки"
              sufix="₽"
            />
          </div>
          <div class="col-lg-4">
            <app-input
              v-model="values.maxOrderSum"
              :errors="errors.maxOrderSum"
              label="Максимальная сумма заявки"
              sufix="₽"
            />
          </div>
          <div class="col-lg-4">
            <app-input
              v-model="values.maxPayoffSum"
              :errors="errors.maxPayoffSum"
              label="Максимальная сумма вывода в день"
              sufix="₽"
            />
          </div>
          <div class="col-lg-4">
            <app-input
              v-model="values.maxPayoffDay"
              :errors="errors.maxPayoffDay"
              label="Максимальная сумма вывода в день"
              sufix="₽"
            />
          </div>
          <div class="col-lg-4">
            <app-input
              v-model="values.payOffCommission"
              :errors="errors.payOffCommission"
              label="Комиссия за вывод"
              sufix="₽"
            />
          </div>
        </div>
      </div>
      <div class="mb-30">
        <add-payment-group-form-commission v-model="commissions" />
      </div>
      <div>
        <span class="mr-30">
          <span class="mr-15">Плата за приложение с первым заказом: </span>
          <span>
            <app-input
              :inline="true"
              v-model="values.payForApp"
              :errors="errors.payForApp"
              :showErrors="false"
              sufix="₽"
              width="100px"
            />
          </span>
        </span>

        <span>
          <span class="mr-30"> в </span>
          <span>
            <app-select
              :selectLabel="'name'"
              :showErrors="false"
              :inline="true"
              v-model="values.payForAppPeriod"
              :options="payForAppOptions"
              :reduce="(item) => item.value"
            />
          </span>
        </span>
      </div>
      <div class="d-flex justify-content-center">
        <app-button
          class="add-payment-group-form__btn mt-10"
          type="submit"
          color="orange-grad"
          >Сохранить</app-button
        >
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import AppSelect from "../../AppSelect.vue";
import AddPaymentGroupFormCommission from "./AddPaymentGroupFormCommission.vue";
import AppSwitcher from "../../AppSwitcher.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
import { ref } from "@vue/composition-api";

@Component({
  components: { AppSwitcher, AddPaymentGroupFormCommission, AppSelect },
  setup(props, { emit }) {
    const commissions = ref([]);
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        groupName: useField("", [yup.string().required()]),
        timePayoffFrom: useField("00:00", [yup.string().required()]),
        timePayoffTo: useField("00:00", [yup.string().required()]),
        getOrdersDaily: useField(true, [yup.boolean().required()]),
        getOrdersWorkingDays: useField(true, [yup.boolean().required()], {
          onInput: (newValue) => {
            if (newValue) {
              values.getOrdersEveryday = false;
            }
          },
        }),
        getOrdersEveryday: useField(true, [yup.boolean().required()], {
          onInput: (newValue) => {
            if (newValue) {
              values.getOrdersWorkingDays = false;
            }
          },
        }),
        autoPayoffReaching: useField("", [yup.number().required()]),
        minOrderSum: useField("", [yup.number().required()]),
        maxOrderSum: useField("", [yup.number().required()]),
        maxPayoffSum: useField("", [yup.number().required()]),
        maxPayoffDay: useField("", [yup.number().required()]),
        payOffCommission: useField(null, [yup.number().nullable()]),
        payForApp: useField(null, [yup.number().nullable()]),
        payForAppPeriod: useField("day", [yup.string().required()]),
      },
    });
    const onSubmit = handleSubmit(async () => {
      let toSend = serialize();
      toSend = { ...toSend, commissions: commissions.value };
      console.log(toSend);

      emit("send");
    });
    const payForAppOptions = [
      {
        name: "месяц",
        value: "month",
      },
      {
        name: "день",
        value: "day",
      },
    ];
    return {
      payForAppOptions,
      onSubmit,
      values,
      errors,
      commissions,
    };
  },
})
export default class AddCardForm extends Vue {}
</script>

<style lang="scss">
.add-payment-group-form {
  &__btn {
    padding: 1rem 6rem;
  }
  &__switcher-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include md {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
      > div {
        &:first-child {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
