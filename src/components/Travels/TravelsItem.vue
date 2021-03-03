<template>
  <div class="travels-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
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
          >{{ item.driver.name }} {{ item.driver.middle_name }}
          {{ item.driver.last_name }}</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader"
          >{{ item.Price }} {{ currency }}</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader">
          <app-badge class="shrink-0">
            <img
              :src="AgregatorType[item.Agreg].icon"
              alt="yandex"
              class="mr-10"
            />
            {{ AgregatorType.yandex.name }}
          </app-badge>
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <app-badge class="shrink-0">
            <component
              width="24"
              :is="getPaymentType(item.PaymentType).icon"
              alt="cash"
              class="mr-10 shrink-0"
            />
            {{ getPaymentType(item.PaymentType).name }}
          </app-badge>
        </app-accardion-col>
      </template>
      <template #default>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6">Номер заказа:</div>
            <div class="col-6 text-truncate">
              <a :href="orderIdLink" target="_blank"> {{ orderId }}</a>
            </div>
          </div>

          <div class="row" v-if="item.StartAdress">
            <div class="col-6">Адрес подачи:</div>
            <div class="col-6">
              {{ item.StartAdress }}
            </div>
          </div>

          <div class="row" v-if="item.EndAdress">
            <div class="col-6">Адрес назначения:</div>
            <div class="col-6">{{ item.EndAdress }}</div>
          </div>
        </app-accardion-col>

        <app-accardion-col :class="responsiveContent">
          <div class="row" v-if="fees.agreg_fee">
            <div class="col-6">Комиссия агрегатора:</div>
            <div class="col-6">{{ fees.agreg_fee }} {{ currency }}</div>
          </div>

          <div class="row" v-if="fees.park_fee">
            <div class="col-6">Комиссия парка:</div>
            <div class="col-6">{{ fees.park_fee }} {{ currency }}</div>
          </div>

          <div class="row" v-if="item.ChargedDriver">
            <div class="col-6">Начислено водителю:</div>
            <div class="col-6">{{ item.ChargedDriver }} ₽</div>
          </div>

          <div class="row" v-if="item.PaymentType !== PaymentName.cash && noCashInfo">
            <div class="col-6">Безнал:</div>
            <div class="col-6">{{ noCashInfo }} {{ currency }}</div>
          </div>

          <div class="row" v-if="fees.bonus">
            <div class="col-6">Доплаты:</div>
            <div class="col-6">{{ fees.bonus }} {{ currency }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row" v-if="timeTrip">
            <div class="col-6">Время:</div>
            <div class="col-6">
              <span v-if="timeTrip.days">{{ timeTrip.days }} д</span>
              <span v-if="timeTrip.hours"> {{ timeTrip.hours }} ч</span>
              <span v-if="timeTrip.min"> {{ timeTrip.min }} мин</span>
            </div>
          </div>

          <div class="row" v-if="item.distance">
            <div class="col-6">Расстояние:</div>
            <div class="col-6">{{ distanceKm }} км</div>
          </div>

          <div class="row" v-if="costPerKm">
            <div class="col-6">Cтоимость км:</div>
            <div class="col-6">{{ costPerKm }} ₽</div>
          </div>

          <div class="row" v-if="costPerMin">
            <div class="col-6">Стоимость мин:</div>
            <div class="col-6">{{ costPerMin }} ₽</div>
          </div>

          <div class="row">
            <div class="col-6" v-if="fees.tips">Чаевые:</div>
            <div class="col-6" v-if="fees.tips">{{ fees.tips }}</div>
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
export default class TravelsItem extends Vue {
  @Prop(Object) item: any;
  get responsiveHeader() {
    return "col-sm-6 col-md-4 col-xl-2";
  }

  get responsiveContent() {
    return "col-12 col-xl-4";
  }

  get distanceKm() {
    return this.item.distance / 1000;
  }

  get orderIdLink() {
    const orderIdYandex = this.item.OrderIDYandex;
    const agregType = this.item.Agreg;
    if (agregType === AgregName.yandex) {
      return `https://lk.taximeter.yandex.ru/order/${orderIdYandex}`;
    }
    return "";
  }
  get orderId() {
    if (this.item.Agreg === AgregName.yandex) {
      return this.item.OrderIDYandex;
    }
    return this.item.id;
  }
  get fees() {
    return this.item.fees || {};
  }
  get timeTrip() {
    const seconds = this.item.timeTrip
    const date = this.$moment.duration(seconds, 'seconds');
    const min = date.minutes();
    const hours = date.hours();
    const days = date.days();
    return {
      min,
      hours,
      days,
    };
  }
  get noCashInfo() {
    const result = this.item.Price + parseFloat(this.fees.agreg_fee) + parseFloat(this.fees.park_fee);
    if (isNaN(result) || result === Infinity) return false;

    return result.toFixed(2);
  }
  get costPerKm() {
    const result = this.item.Price / this.distanceKm;
    if (isNaN(result) || result === Infinity) return false;
    const norm = result.toFixed(2);
    return norm;
  }
  get costPerMin() {
    let result = this.item.Price / (this.item.timeTrip / 60);
    if (isNaN(result) || result === Infinity) return false;
    const norm = result.toFixed(2);

    return norm;
  }
}
</script>

<style lang="scss">
</style>