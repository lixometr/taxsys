<template>
  <div class="flex-1 flex-layout payment-systems-placeholder">
    <div class="row flex-1">
      <div class="col-xl-6">
        <div class="app-card payment-systems-placeholder__info">
          <div class="payment-systems-placeholder__title">
            Пока не добавлена диспетчерская, вы не можете подключить платежную
            систему для моментальных выплат водителям с вашего счета.
          </div>
          <div class="payment-systems-placeholder__img">
            <img src="@/assets/img/payment_systems_img.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="app-card">
          <div class="row">
            <div class="col-lg-6">
              <div class="app-card payment-systems-placeholder__system">
                <div class="payment-systems-placeholder__system-logo">
                  <img src="@/assets/img/tinkoff_logo.png" alt="" />
                </div>
                <ul class="payment-systems-placeholder__system-list">
                  <li>Выплаты на любую карту: 1%, минимум 30₽</li>
                  <li>Выплаты на карту Тинькофф: 0,8%</li>
                  <li>Овердрафт на выплаты до 3 млн.</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="app-card payment-systems-placeholder__system">
                <div class="payment-systems-placeholder__system-logo">
                  <img src="@/assets/img/paysystem_qiwi.png" alt="" />
                </div>
                <ul class="payment-systems-placeholder__system-list">
                  <li>Выплаты на карту: от 1% до 0,6 минимум 20₽</li>
                  <li>Выплаты на QIWI кошелек: 0,6%</li>
                  <li>Перевод с Точки на транзитный счет: 0,2%.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="payment-systems-placeholder__invoice">
            <div class="payment-systems-placeholder__invoice-title">
              Для заключения договора и интеграции требуется расчетный счет в
              банке платежной системы
            </div>
            <div class="payment-systems-placeholder__invoice-items">
              <div class="payment-systems-placeholder__invoice-item">
                <app-button color="purple-grad" size="sm"
                  >Открыть расчетный счет Тинькофф</app-button
                >
              </div>
              <div class="payment-systems-placeholder__invoice-item">
                <app-button color="purple-grad" size="sm"
                  >Открыть расчетный счет точка банк</app-button
                >
              </div>
            </div>
          </div>
          <div class="payment-systems-placeholder__invoice">
            <div class="payment-systems-placeholder__invoice-title">
              Подать заявку на подключение транзитного счета
            </div>
            <div class="payment-systems-placeholder__invoice-items">
              <div class="payment-systems-placeholder__invoice-item">
                <app-button color="orange" :stroke="true" size="sm"
                  >тинькофф выплаты водителям</app-button
                >
              </div>
              <div class="payment-systems-placeholder__invoice-item">
                <app-button color="orange" :stroke="true" size="sm"
                  >транзитный 302 счет QIWI</app-button
                >
              </div>
            </div>
          </div>

          <div class="text-center">
            <div class="font-md color-grey-2 mt-20 mb-10">
              Провести интеграцию с Taxsys
            </div>
            <app-button color="orange-grad" @click="addPaySystem"
              >добавить платежную систему</app-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";

@Component({
  components: { PagePlaceholder },
  setup(props, { emit }) {
    const addPaySystem = () => {
      const { showByName } = useModal();
      showByName(ModalName.paymentSystemsAdd, {
        on: {
          send: () => emit("refresh"),
        },
      });
    };
    return { addPaySystem };
  },
})
export default class PaymentSystemsPlaceholder extends Vue {}
</script>

<style lang="scss">
.payment-systems-placeholder {
  padding-top: 4rem;
  &__title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: $grey_2;
    @include md {
      font-size: 1.8rem;
    }
    @include sm {
      font-size: 1.4rem;
    }
  }
  &__img {
    position: absolute;
    bottom: 0;
    right: 0;
    @include sm {
      max-width: 100%;
      height: auto;
      img {
        max-width: 100%;
      }
    }
  }
  &__info {
    height: 100%;
    background: url(~@/assets/img/payment_systems_bg.png) left bottom no-repeat;
    background-size: 440px auto;
    min-height: 640px;
    @include lg {
      min-height: 550px;
    }
  }
  &__system {
    border: 1px solid rgba(184, 181, 255, 0.4);
    box-sizing: border-box;
    border-radius: 8px;
    @include md {
      margin-bottom: 15px;
    }
    &-logo {
      text-align: center;
    }
    &-list {
      margin-top: 20px;
      li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
        color: $grey_2;
        font-size: $fz_sm;
        &::before {
          content: "";
          background: #6979f8;
          margin-right: 10px;
          margin-top: 2px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }
      }
    }
  }
  &__invoice {
    &-title {
      text-align: center;
      font-size: $fz_md;
      margin: 20px 0;
      color: $grey_2;
    }
    &-items {
      display: flex;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(184, 181, 255, 0.4);
      @include md {
        flex-direction: column;
      }
    }
    &-item {
      flex: 1;
      display: flex;
      justify-content: center;
      &:first-child {
        border-right: 1px solid rgba(184, 181, 255, 0.4);
        @include md {
          border-right: none;
          margin-bottom: 10px;
        }
      }
    }
    .btn {
      font-size: $fz_xxs;
      max-width: 200px;
      font-weight: 500;
    }
  }
}
</style>