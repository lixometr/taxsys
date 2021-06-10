<template>
  <div class="page-travels page-items flex-layout flex-1">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <aggregator-filters v-model="agregator" />
      </template>
    </page-filters>
    <div v-if="items.length" class="flex-layout flex-1">
      <page-title :between="true">
        <div><h2>Поездки</h2></div>
        <div><download-btn @click="downloadList" /></div>
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
import DownloadBtn from "@/components/DownloadBtn.vue";
import TravelPlaceholder from "@/components/Placeholders/TravelPlaceholder.vue";
import TravelsItem from "@/components/Travels/TravelsItem.vue";
import AggregatorFilters from "@/components/Travels/AgregatorFilters.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiDownloadTravels, useApiGetTravels } from "@/api/travel";
import useItemsPage from "@/compositions/useItemsPage";
import { errorHandler } from "@/helpers/error-handler";
import downloadURI from "@/helpers/downloadUri";
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
    const downloadList = async () => {
      const { exec, error, result } = useApiDownloadTravels({
        toast: { error: errorHandler() },
      });
      await exec(toFetch.value);
      if (error.value) return;
      downloadURI(`data:text/csv,${result.value}`, "data.csv");
    };
    return {
      downloadList,
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
    DownloadBtn,
  },
})
export default class Travels extends Vue {}
</script>

<style lang="scss">
</style>