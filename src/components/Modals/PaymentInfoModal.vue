<template>
  <modal-content class="payment-info-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Информация о платеже</h2>
    </template>
    <template>
      <div>
        <div class="font-ml text-center color-grey-1 mt-35 mb-35">
          {{ item.driver.name }} {{ item.driver.middle_name }}
          {{ item.driver.last_name }}
        </div>
        <div class="payment-info-modal__items">
          <div class="payment-info-modal__item">
            <div>ID платежа:</div>
            <div>{{ item.id }}</div>
          </div>
          <div class="payment-info-modal__item">
            <div>ID водителя:</div>
            <div>{{ item.driver.id }}</div>
          </div>
          <div class="payment-info-modal__item">
            <div>Создание заявки:</div>
            <div>{{ item.created_at | dateTime }}</div>
          </div>
          <div class="payment-info-modal__item">
            <div>Дата платежа:</div>
            <div>2020.04.09 16:55:44</div>
          </div>
          <div class="payment-info-modal__item">
            <div>Сумма, способ оплаты:</div>
            <div class="d-flex align-items-center">
              {{ item.amount }} {{ currency }}
              <span class="payment-badge ml-10 shrink-0">
                <app-icon :src="paymentLogo" width="24"
              /></span>
            </div>
          </div>
          <div class="payment-info-modal__item">
            <div>Реквизиты отплаты</div>
            <div>{{ item.card.number }}</div>
          </div>
          <div
            class="payment-info-modal__item payment-info-modal__item--violet"
          >
            <div>Payment status='60'</div>
            <div>Final-status='true'</div>
          </div>
        </div>
        <div class="payment-info-modal__status success">ОПЛАЧЕН</div>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import ModalContent from "./ModalContent.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  PaymentAgregator,
  PaymentAgregatorById,
} from "@/types/payment-type.enum";
import { city } from "../Register/RegisterDriver/register-driver-fields";

@Component({
  components: { ModalContent },
})
export default class PaymentInfo extends Vue {
  @Prop({
    type: Object,
    default: () => ({}),
  })
  item: any;

  get currency() {
    return this.$store.getters.currency;
  }
  get paymentLogo() {
    const agregatorName = PaymentAgregatorById[this.item.type];
    if (agregatorName === PaymentAgregator.qiwi) {
      return require("@/assets/img/qiwi_logo.png");
    }
    return require("@/assets/icons/credit-card.svg");
  }

 
}
</script>

<style lang="scss">
.payment-info-modal {
  width: 100%;
  max-width: 580px;
  margin: 0 30px;
  padding: 3.3rem 6rem;
  background: url(~@/assets/img/payment_bg.png) center center no-repeat #fff;
  background-size: contain;
  .modal-header {
    margin-bottom: 0;
  }
  @include sm {
    padding: 2rem 2rem;
  }
  @include xs {
    margin: 0 5px;
  }
  &__items {
    padding-bottom: 3.6rem;
    border-bottom: 1px solid #b8b5ff;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    > div {
      &:first-child {
        color: $grey_3;
        margin-right: 10px;
      }
      &:last-child {
        color: $grey_2;
      }
    }
    &--violet {
      > div {
        color: $violet !important;
      }
    }
  }
  &__status {
    padding-top: 3.5rem;
    font-size: $fz_lg;
    text-align: center;
    text-transform: uppercase;
    &.success {
      color: $green;
    }
  }
}
</style>