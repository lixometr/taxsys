<template>
  <statistics-item class="statistics-commission">
    <template #header>
      <div class="statistics-commission__header-row">
        <div class="statistics-item__title">Комиссия парка</div>
        <div class="statistics-commission__header-price">{{parkCommission}} {{currency}}</div>
      </div>
    </template>
    <template>
      <apexchart
        width="100%"
        height="350"
        type="area"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </template>
  </statistics-item>
</template>

<script lang="ts">
import StatisticsItem from "./StatisticsItem.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { StatisticsEntity } from "@/models/statistics.entity";

@Component({
  setup() {
    const chartOptions = {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        curve: "smooth",
      },

      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2011 GMT",
          "01/02/2011 GMT",
          "01/03/2011 GMT",
          "01/04/2011 GMT",
          "01/05/2011 GMT",
          "01/06/2011 GMT",
        ],
        labels: {
          style: { fontFamily: "Montserrat" },
          datetimeFormatter: {
            year: "yyyy",
            month: "dd.MM.yy",
            day: "dd.MM",
            hour: "HH:mm",
          },
        },
      },
      legend: {
        show: false,
      },
      colors: ['#5A13A7'],

      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex }) {
          return (
            '<div class="statistics-item__tooltip">' +
            "<span>" +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        },
      },
    };
    const series = [
      {
        name: "Сумма заказов",
        data: [30, 40, 35, 50, 49, 60],
      },
    ];

    return {
      series,
      chartOptions,
    };
  },
  components: { StatisticsItem },
})
export default class StatisticsParmCommission extends Vue {
    @Prop({ type: Object, default: () => ({}) }) value: StatisticsEntity;

    get currency() {
      return this.$store.getters.currency
    }
    get parkCommission () {
      return this.value.fees?.total_agreg_fee || 0
    }
}
</script>

<style lang="scss">
.statistics-commission {
  &__header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__header-price {
    font-size: 2.8rem;
    font-weight: 600;
    color: $grey_2;
    @include lg {
      font-size: 2rem;
    }
  }
}
</style>