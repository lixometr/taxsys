<template>
  <div class="suspicious-page-travels flex-layout flex-1 page-items">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <aggregator-filters v-model="agregator" />
      </template>
    </page-filters>
    <page-title>
      <h2>Подозрительные поездки</h2>
    </page-title>

    <div class="suspicious-travels-items flex flex-column flex-1">
      <suspicious-travels-item
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
      <app-pagination
        class="mt-auto"
        :nowPage="page"
        :totalPages="totalPages"
        @next="nextPage"
        @prev="prevPage"
        @showMore="nextPage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import SuspiciousTravelsItem from "@/components/SuspiciousTravels/SuspiciousTravelsItem.vue";
import AggregatorFilters from "@/components/Travels/AggregatorFilters.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiGetTravels } from "@/api/travel";
import useItemsPage from "@/compositions/useItemsPage";
@Component({
  metaInfo: {
    title: "Подозрительные Поездки",
  },
  setup() {
    const agregator = ref("all");
    const date = ref({
      start: new Date(),
      end: new Date(),
    });

    const {
      page,
      nextPage,
      prevPage,
      showMore,
      items,
      totalPages,
      init,
    } = useItemsPage({
      api: useApiGetTravels,
    });
    const toFetch = computed(() => ({
      dateFrom: date.value.start,
      dateTo: date.value.end,
      page: page.value,
      agregator: agregator.value,
    }));
    init({ fetchData: toFetch });

    return {
      agregator,
      date,
      page,
      showMore,
      nextPage,
      prevPage,
      items,
      totalPages,
    };
  },
  components: {
    PageTitle,
    PageFilters,
    AggregatorFilters,
    SuspiciousTravelsItem,
  },
})
export default class SuspiciousTravels extends Vue {}
</script>

<style lang="scss">
</style>