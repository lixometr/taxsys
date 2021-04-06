<template>
  <div class="susp-travels-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
      contentClass="font-sm color-3"
    >
      <template v-slot:header>
        <app-accardion-col :class="responsiveCol">{{
          item.id
        }}</app-accardion-col>
        <app-accardion-col :class="responsiveCol" class="color-grey-3">{{
          item.created_at | dateTime
        }}</app-accardion-col>
        <app-accardion-col :class="responsiveCol">{{
          driverFullName
        }}</app-accardion-col>
        <app-accardion-col :class="{[responsiveCol]: true, 'color-red': antifraud.costTrip }"
          >{{ item.Price }} {{ currency }}</app-accardion-col
        >
        <app-accardion-col :class="responsiveCol">
          <agregator-badge class="shrink-0" :type="item.Agreg">
          </agregator-badge>
        </app-accardion-col>
        <app-accardion-col :class="responsiveCol">
          <app-badge class="shrink-0">
            <app-icon
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
          <div class="row mt-30">
            <div class="col">
              <app-button
                color="orange"
                class="mb-15"
                :stroke="true"
                @click="deny"
                >Отказать</app-button
              >
            </div>
            <div class="col">
              <app-button color="orange" @click="approve">Одобрить</app-button>
            </div>
          </div>
        </app-accardion-col>

        <app-accardion-col :class="responsiveContent">
          <div class="row" v-if="agregComission">
            <div class="col-6">Комиссия агрегатора:</div>
            <div class="col-6">{{ agregComission }} {{ currency }}</div>
          </div>

          <div class="row" v-if="parkComission">
            <div class="col-6">Комиссия парка:</div>
            <div class="col-6">{{ parkComission }} {{ currency }}</div>
          </div>

          <div
            class="row"
            v-if="chargedDriver"
          >
            <div class="col-6">Начислено водителю:</div>
            <div class="col-6">{{ chargedDriver }} {{ currency }}</div>
          </div>

          <div
            class="row"
            :class="{ 'color-red': antifraud.bonus }"
            v-if="item.surcharges"
          >
            <div class="col-6">Доплаты:</div>
            <div class="col-6">{{ item.surcharges }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div
            class="row"
            :class="{ 'color-red': antifraud.timeTrip }"
            v-if="item.timeTrip"
          >
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

          <div
            class="row"
            :class="{ 'color-red': antifraud.costPerKm }"
            v-if="costPerKm"
          >
            <div class="col-6">Cтоимость км:</div>
            <div class="col-6">{{ costPerKm }} ₽</div>
          </div>

          <div
            class="row"
            :class="{ 'color-red': antifraud.costPerMin }"
            v-if="costPerMin"
          >
            <div class="col-6">Стоимость мин:</div>
            <div class="col-6">{{ costPerMin }} ₽</div>
          </div>

          <div class="row" :class="{ 'color-red': antifraud.tip }">
            <div class="col-6" v-if="item.tip">Чаевые:</div>
            <div class="col-6" v-if="item.tip">{{ item.tip }}</div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import AgregatorBadge from "../AgregatorBadge.vue";
import AppIcon from "../AppIcon.vue";
import useStore from "@/compositions/useStore";
import { AgregatorType, AgregName } from "@/types/agregator.enum";
import { PaymentType, PaymentName } from "@/types/payment-type.enum";
import { computed, warn } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import TravelsMixin from "../Travels/TravelsMixin.vue";

@Component({
  mixins: [TravelsMixin],
  components: { AppIcon, AgregatorBadge },
  setup(props, { emit }) {
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

    const deny = () => {
      emit("deny");
      return;
    };
    const approve = () => {
      emit("approve");
      return;
    };

    return {
      AgregatorType,
      PaymentType,
      PaymentName,
      getPaymentType,
      getAgregType,
      currency,
      deny,
      approve,
    };
  },
})
export default class TravelsItem extends Vue {
  @Prop(Object) item: any;
  get responsiveCol() {
    return " col-sm-6 col-md-4 col-xl-2";
  }

  get responsiveContent() {
    return " col-12 col-xl-4";
  }
  get warns(): Array<any> {
    return this.item.antifraud_result?.warns || [];
  }
  get antifraud() {
    interface IWarn {
      type: string;
      current: number;
      antifraud: number;
    }

    const warnTypes = this.warns.map((warn: IWarn) => warn.type);
    const result = {
      timeTrip:
        warnTypes.includes("time_trip_more") ||
        warnTypes.includes("time_trip_less"),
      costPerKm: warnTypes.includes("cost_km_more"),
      costPerMin:
        warnTypes.includes("cost_min_more") ||
        warnTypes.includes("cost_min_less"),
      costTrip: warnTypes.includes("cost_trip_more"),
      bonus: warnTypes.includes("sum_bonus_more"),
      tip:
        warnTypes.includes("sum_tip_more_rub") ||
        warnTypes.includes("sum_tip_more_perc"),
    };

    return result;
  }
}
</script>

<style lang="scss">
</style>