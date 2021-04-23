<template>
  <statistics-item class="statistics-commission">
    <template #header>
      <div class="statistics-commission__header-row">
        <div class="statistics-item__title">Комиссия парка</div>
        <div class="statistics-commission__header-price">
          {{ parkCommission }} {{ currency }}
        </div>
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
import { computed, toRefs } from "@vue/composition-api";
import useMoment from "@/compositions/useMoments";
interface IProps {
  [name: string]: any;
  item: StatisticsEntity;
}
@Component({
  setup(props: IProps) {
    const { value: item } = toRefs<IProps>(props);
    const datesObj = computed(() => item.value?.fees?.data || {});
    const categories = computed(() => {
      const dates = Object.keys(datesObj.value).map((item) => {
        return new Date(item);
      });
      dates.sort((a, b) => b.getTime() - a.getTime());
      return dates.map(date => {
        return useMoment(date).format('YYYY-MM-DD')
      })
      // console.log(dates);
      // return dates;
    });
    const chartOptions = computed(() => ({
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
        categories: categories.value,
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
      colors: ["#5A13A7"],

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
    }));
    const series = computed(() => {
      const data = Object.keys(datesObj.value).map(
        (date) => datesObj.value[date].park_fee
      );
      return [
        {
          name: "Сумма заказов",
          data,
        },
      ];
    });

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
    return this.$store.getters.currency;
  }
  get parkCommission() {
    return this.value.fees?.total_agreg_fee || 0;
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