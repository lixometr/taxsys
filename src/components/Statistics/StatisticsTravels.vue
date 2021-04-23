<template>
  <statistics-item class="statistics-travels">
    <template #header>
      <div class="statistics-item__title">Сумма поездок</div>
    </template>
    <template>
      <div class="statistics-travels__labels">
        <div class="statistics-travels__label">
          Сумма заказов - <span>{{ orderSum }} {{ currency }}</span>
        </div>
        <div class="statistics-travels__label">
          Расчетная выплата - <span>{{ payoutSum }} {{ currency }}</span>
        </div>
      </div>
      <apexchart
        width="100%"
        height="400"
        type="bar"
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
import { computed, toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  value: StatisticsEntity;
}
@Component({
  setup(props: IProps, { emit }) {
    const { value: item} = toRefs<IProps>(props);
    const chartOptions = {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          horizontal: false,
        },
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
        position: "top",
        fontSize: "16px",
        fontFamily: "Montserrat",
        formatter: function (seriesName, opts) {
          const seriesSum = opts.w.globals.series[opts.seriesIndex].reduce(
            (sum, cur) => sum + cur,
            0
          );
          return `${seriesName} - <b>${seriesSum} ₽</b>`;
        },
        itemMargin: {
          horizontal: 20,
          vertical: 0,
        },
      },
      colors: ["#45117B", "#FFB801"],
      fill: {
        opacity: 1,
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
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
        data: [30, 40, 35, 50, 49, 60, 70, 91],
        fillColor: "#f00",
      },
      {
        data: [50, 40, 35, 50, 49, 60, 70, 91],
        fillColor: "#008FFB",
      },
    ];
    const orderSum = computed(() => {
      return item.value.trips?.sum
    });
    const payoutSum = computed(() => {
      return item.value.trips?.total_payout
    });

    return {
      payoutSum,
      orderSum,
      series,
      chartOptions,
    };
  },
  components: { StatisticsItem },
})
export default class StatisticsTravels extends Vue {
  @Prop({ type: Object, default: () => ({}) }) value: StatisticsEntity;
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.statistics-travels {
  &__labels {
    display: flex;
    justify-content: center;
    @include sm {
      flex-direction: column;
    }
  }
  &__label {
    font-size: $fz_md;
    &:first-child {
      margin-right: 30px;
      @include sm {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
    span {
      font-weight: bold;
    }
  }
}
</style>