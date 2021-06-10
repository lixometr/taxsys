<template>
  <modal-content class="cd-driver-earns-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Заработок</h2>
    </template>
    <template>
      <app-chooser
        :items="periodItems"
        v-model="period"
        class="mb-25 cd-driver-earns-modal__chooser"
      />
      <div>
        <div
          class="cd-driver-earns-modal__row"
          v-for="(item, idx) in statItems"
          :key="idx"
        >
          <div class="color-grey-3">
            {{ item.name }}
          </div>
          <div class="color-grey-2">{{ item.value }} {{currency}}</div>
        </div>
      </div>
      <div class="cd-driver-earns-modal__footer">
        <div>Вы заработали:</div>
        <div class="color-green">{{ total }} {{ currency }}</div>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import AppChooser from "../AppChooser.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { useApiDriverGetStats } from "@/api/driver";
import { errorHandler } from "@/helpers/error-handler";
import { computed, ref, toRefs, watch } from "@vue/composition-api";
import { CDDriverEarnsEntity } from "@/models/cd-driver-earns.entity";
interface IProps {
  [key: string]: any;
  agregator: string;
}
enum periods {
  day = "day",
  week = "week",
  month = "month",
}
@Component({
  components: { ModalContent, AppChooser },
  setup(props: IProps, { emit }) {
    const { agregator } = toRefs(props);
    const onSend = () => {
      emit("send");
      emit("close");
    };

    const period = ref(periods.day);
    const stats = ref({} as CDDriverEarnsEntity);
    const fetchData = async () => {
      const { exec, error, result } = useApiDriverGetStats({
        toast: { error: errorHandler() },
      });
      let numPeriod = 1;
      if (period.value === periods.day) {
        numPeriod = 1;
      } else if (period.value === periods.week) {
        numPeriod = 7;
      } else {
        numPeriod = 30;
      }
      await exec({
        agregator: agregator.value,
        period: numPeriod,
      });
      if (error.value) return;
      stats.value = result.value;
    };
    fetchData();
    watch(period, () => {
      fetchData();
    });

    const periodItems = [
      {
        name: "Сегодня",
        value: periods.day,
      },
      {
        name: "Неделя",
        value: periods.week,
      },
      {
        name: "Месяц",
        value: periods.month,
      },
    ];
    const statItems = computed(() => {
      const items = [
        {
          name: "Количество поездок",
          value: stats.value.trips_cnt,
        },
        {
          name: "Сумма заказов",
          value: stats.value.trips_sum,
        },
        {
          name: "Заказы наличными",
          value: stats.value.trips_cash_sum,
        },
        {
          name: "Безналичные заказы",
          value: stats.value.trips_cashless_sum,
        },
        {
          name: "Комиссия",
          value: stats.value.fees,
        },
      ];
      return items;
    });
    const total = computed(() => {
      return stats.value.profit;
    });
    return {
      total,
      statItems,
      period,
      periodItems,
      stats,
      onSend,
    };
  },
})
export default class CDDriverEarnsModal extends Vue {
  @Prop(String) agregator: string;
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.cd-driver-earns-modal {
  width: 100%;
  max-width: 550px;
  margin: 0 30px;
  background: url(~@/assets/img/invoice_bg.png) center center no-repeat;
  background-size: 660px 600px;
  box-sizing: border-box;
  padding: 3.5rem 5rem;
  padding-bottom: 5rem;
  @include md {
    background-size: 660px 580px;
  }
  @include xs {
    margin: 0 5px;
    background-image: none;
    background-color: #fff;
    padding: 2rem 2rem;
  }
  .modal-header {
    margin-bottom: 3rem;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__footer {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #b8b5ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: $fz_ml;
  }
  &__chooser {
    max-width: 320px;
    margin: 0 auto;
    margin-bottom: 20px;
    .app-chooser__item {
      padding: 1rem 0;
    }
  }
}
</style>