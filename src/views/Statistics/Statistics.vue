<template>
  <div class="page-statistics flex-layout flex-1">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <agregator-filters v-model="agregator" />
      </template>
    </page-filters>
    <statistics-row class="mt-20" />
    <div class="row">
      <div class="col-lg-7 flex-layout">
        <statistics-travels class="statistics-item flex-1" />
      </div>
      <div class="col-lg-5 flex-layout">
        <statistics-ratio class="statistics-item flex-1" />
      </div>
      <div class="col-lg-7 flex-layout">
        <statistics-park-commission class="statistics-item flex-1" />
      </div>
      <div class="col-lg-5 flex-layout">
        <statistics-pay-off class="statistics-item flex-1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StatisticsParkCommission from '../../components/Statistics/StatisticsParkCommission.vue'
import StatisticsPayOff from '../../components/Statistics/StatisticsPayOff.vue'
import StatisticsRatio from "../../components/Statistics/StatisticsRatio.vue";
import StatisticsTravels from "../../components/Statistics/StatisticsTravels.vue";
import StatisticsRow from "../../components/Statistics/StatisticsRow.vue";
import PageFilters from "../../components/Page/PageFilters.vue";
import AgregatorFilters from "../../components/Travels/AgregatorFilters.vue";
import { ref } from "@vue/composition-api";
import { Component, Vue } from "vue-property-decorator";

@Component({
  setup() {
    const date = ref({ start: undefined, end: undefined });
    const agregator = ref("all");
    return { date, agregator };
  },
  components: {
    AgregatorFilters,
    PageFilters,
    StatisticsRow,
    StatisticsTravels,
    StatisticsRatio, StatisticsPayOff, StatisticsParkCommission
  },
  metaInfo: {
    title: "Статистика",
  },
})
export default class extends Vue {}
</script>

<style lang="scss">
.page-statistics {
  .statistics-item {
    margin-top: 20px;
  }
}
</style>