<template>
  <div class="manual-payments-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
      headerClass="color-grey-1"
      contentClass="font-sm color-grey-3"
    >
      <template v-slot:header>
        <app-accardion-col :class="responsiveHeader">{{
          item.id
        }}</app-accardion-col>
        <app-accardion-col :class="responsiveHeader" class="color-grey-3">{{
          item.created_at | dateTime
        }}</app-accardion-col>
        <app-accardion-col :class="responsiveHeader"
          >{{ item.driver.name }} {{ item.driver.lastname }}
          {{ item.driver.surname }}</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader"
          >{{ item.amount }} {{ currency }}</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader">
          <app-button
            :noHover="true"
            color="grey"
            class="manual-payments-item__btn-driver manual-payments-item__btn"
            >Новый водитель</app-button
          >
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <app-button
            :noHover="true"
            color="green"
            :stroke="true"
            class="manual-payments-item__btn"
            >Оплачен</app-button
          >
        </app-accardion-col>
      </template>
      <template #default>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col">Способ оплаты: (QIWI)</div>
            <div class="col">1548 8579 5896 6587</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col">Сумма заявки:</div>
            <div class="col">{{ item.amount }} {{ currency }}</div>
          </div>
          <div class="row">
            <div class="col">Сумма выплаты:</div>
            <div class="col">{{ sumWithCommision }} {{ currency }}</div>
          </div>
          <div class="row">
            <div class="col">Комиссия за вывод:</div>
            <div class="col">{{ commision }} {{ currency }}</div>
          </div>
        </app-accardion-col>

        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col">Договор:</div>
            <div class="col color-purple">{{ item.partner.Name }}</div>
          </div>
          <div class="row">
            <div class="col">Колличество поездок:</div>
            <div class="col">{{ item.driver.trips_count }}</div>
          </div>
          <div class="row" v-if="false">
            <div class="col">Поездки на проверке:</div>
            <div class="col">5</div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import useStore from "@/compositions/useStore";
import { AgregatorType, AgregName } from "@/types/agregator.enum";
import { PaymentType, PaymentName } from "@/types/payment-type.enum";
import { computed } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  setup() {
    const getPaymentType = (name: string) => {
      return (
        PaymentType[name] || {
          name: "Неизвестно",
        }
      );
    };
    const getAgregType = (name: string) => {
      return (
        AgregatorType[name] || {
          name: "Неизвестно",
        }
      );
    };
    const store = useStore();
    const currency = computed(() => {
      return store.getters.currency;
    });

    return {
      AgregatorType,
      PaymentType,
      PaymentName,
      getPaymentType,
      getAgregType,
      currency,
    };
  },
})
export default class ManualPaymentsItem extends Vue {
  @Prop(Object) item: any;
  get responsiveHeader() {
    return "col-sm-6 col-md-4 col-xl-2";
  }

  get responsiveContent() {
    return "col-12 col-xl-4";
  }
   get commision() {
    return this.item.group?.commision?.commision || 0;
  }
  get sumWithCommision() {
    return this.item.amount - this.commision;
  }
}
</script>

<style lang="scss">
.manual-payments-item {
  &__btn-driver {
    padding: 1.1rem 2rem;
    text-transform: none;
  }
}
</style>