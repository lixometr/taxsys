<template>
  <div class="page-statistics flex-layout flex-1">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <agregator-filters v-model="agregator" />
      </template>
    </page-filters>
    <statistics-row class="mt-20" :value="statistics"/>
    <div class="row">
      <div class="col-lg-7 flex-layout">
        <statistics-travels
          class="statistics-item flex-1"
          :value="statistics"
        />
      </div>
      <div class="col-lg-5 flex-layout">
        <statistics-ratio class="statistics-item flex-1" :value="statistics" />
      </div>
      <div class="col-lg-7 flex-layout">
        <statistics-park-commission
          class="statistics-item flex-1"
          :value="statistics"
        />
      </div>
      <div class="col-lg-5 flex-layout">
        <statistics-pay-off
          class="statistics-item flex-1"
          :value="statistics"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StatisticsParkCommission from "@/components/Statistics/StatisticsParkCommission.vue";
import StatisticsPayOff from "@/components/Statistics/StatisticsPayOff.vue";
import StatisticsRatio from "@/components/Statistics/StatisticsRatio.vue";
import StatisticsTravels from "@/components/Statistics/StatisticsTravels.vue";
import StatisticsRow from "@/components/Statistics/StatisticsRow.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import AgregatorFilters from "@/components/Travels/AgregatorFilters.vue";
import { computed, Ref, ref, watch } from "@vue/composition-api";
import { Component, Vue } from "vue-property-decorator";
import { useApiGetStatistics } from "@/api/statistics";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { GetStatisticsDto } from "@/dto/statistics.dto";
import { StatisticsEntity } from "@/models/statistics.entity";
import useMoment from "@/compositions/useMoments";

@Component({
  setup() {
    const today = new Date()
    const weekAgo = new Date(today.setDate(today.getDate() - 7))
    const date = ref({ start: weekAgo, end: new Date() });
    const agregator = ref("all");
    const toFetch = computed(() => ({
      date_from: date.value.start,
      date_to: date.value.end,
      agregator: agregator.value,
    }));
    const statistics = ref({} as StatisticsEntity);
    const fetchData = async ({ loading = true } = {}) => {
      const { exec, error, result } = useApiGetStatistics({
        toast: { error: errorHandler() },
        loading,
      });
      const toSend = plainToClass(GetStatisticsDto, toFetch.value);
      await exec(toSend);
      if (error.value) return;
      statistics.value = result.value;
    };
    watch(toFetch, () => {
      fetchData({ loading: false });
    });
    fetchData();
  
    const travelsValue = computed(() => {
      return statistics.value.trips;
    });
    const driversValue = computed(() => {
      return statistics.value.drivers;
    });
    const parkCommissionValue = computed(() => {
      return statistics.value.fees;
    });
    return {
      date,
      agregator,
      statistics,
      travelsValue,
      driversValue,
      parkCommissionValue,
    };
  },
  components: {
    AgregatorFilters,
    PageFilters,
    StatisticsRow,
    StatisticsTravels,
    StatisticsRatio,
    StatisticsPayOff,
    StatisticsParkCommission,
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