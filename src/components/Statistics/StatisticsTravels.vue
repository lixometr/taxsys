<template>
  <statistics-item class="statistics-travels">
    <template #header>
      <div class="statistics-item__title">Сумма поездок</div>
    </template>
    <template>
      <apexchart
        width="100%"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </template>
  </statistics-item>
</template>

<script lang="ts">
import StatisticsItem from "./StatisticsItem.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  setup() {
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
        show: true,
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
        name: "Сумма заказов",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
        fillColor: "#f00",
      },
      {
        name: "Расчетная выплата",
        data: [50, 40, 35, 50, 49, 60, 70, 91],
        fillColor: "#008FFB",
      },
    ];

    return {
      series,
      chartOptions,
    };
  },
  components: { StatisticsItem },
})
export default class StatisticsTravels extends Vue {}
</script>

<style lang="scss">
.statistics-travels {
 
}
</style>