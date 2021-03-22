<template>
  <div class="page-travels page-items flex-layout flex-1">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <aggregator-filters v-model="agregator" />
      </template>
    </page-filters>
    <div v-if="items.length" class="flex-layout flex-1">
      <page-title>
        <h2>Поездки</h2>
      </page-title>
      <div class="travels-items flex flex-column flex-1">
        <travels-item v-for="item in items" :key="item.id" :item="item" />
        <app-pagination
          class="mt-auto"
          :nowPage="page"
          :totalPages="totalPages"
          @next="nextPage"
          @prev="prevPage"
          @showMore="showMore"
        />
      </div>
    </div>
    <travel-placeholder v-else />
  </div>
</template>

<script lang="ts">
import TravelPlaceholder from "../../components/Placeholders/TravelPlaceholder.vue";
import TravelsItem from "@/components/Travels/TravelsItem.vue";
import AggregatorFilters from "@/components/Travels/AgregatorFilters.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiGetTravels } from "@/api/travel";
import useItemsPage from "@/compositions/useItemsPage";
@Component({
  metaInfo: {
    title: "Поездки",
  },
  setup() {
    const agregator = ref("all");
    const date = ref({
      start: undefined,
      end: undefined,
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
    TravelsItem,
    TravelPlaceholder,
  },
})
export default class Travels extends Vue {}
</script>

<style lang="scss">
</style>