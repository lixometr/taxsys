<template>
  <div class="driver-info-stats">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
      :showArrow="false"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Показатели</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col-xl-4">
          <div class="row mb-15" v-for="(col, idx) in firstCol" :key="idx">
            <div class="color-grey-3 col">{{ col.name }}</div>
            <div class="color-grey-2 col">{{ col.value }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-4">
          <div class="row mb-15" v-for="(col, idx) in secondCol" :key="idx">
            <div class="color-grey-3 col">{{ col.name }}</div>
            <div class="color-grey-2 col">{{ col.value }}</div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import AppIcon from "../AppIcon.vue";
import AppImage from "../AppImage.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DriverEntity } from "@/models/driver.entity";
import AppStatus from "../AppStatus.vue";
import { AgregatorType } from "@/types/agregator.enum";
import { computed, toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  item: DriverEntity;
}
@Component({
  components: { AppStatus, AppImage, AppIcon },
  setup(props: IProps) {
    return {}
  },
})
export default class DriverInfoStats extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverEntity;
  get stats() {
    return this.item.stats || ({} as any);
  }
  get firstCol() {
    return [
      {
        name: "Количество поездок",
        value: this.stats.total_trips,
      },
      {
        name: "Сумма поездок:",
        value: this.stats.trips_sum,
      },
      {
        name: "Сумма безналичных:",
        value: this.stats.trips_cashless_sum,
      },
      {
        name: "Выплат:",
        value: this.stats.payouts,
      },
      {
        name: "Комиссия парка:",
        value: this.stats.park_fee,
      },
    ];
  }
  get secondCol() {
    return [
      {
        name: "Подозрительные поездки:",
        value: this.stats.total_suspicious
      },
      {
        name: "Комиссия агрегатора:",
        value: this.stats.agreg_fee
      },
      {
        name: "Сумма наличных:",
        value: this.stats.trips_cash_sum
      },
      {
        name: "Сумма выплат:",
        value: this.stats.payout_sum
      },
      {
        name: "Комиссия платежной системы:",
        value: this.stats.pay_fee
      }
    ]
  }
}
</script>

<style lang="scss">
</style>
