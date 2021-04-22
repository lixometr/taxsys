<template>
  <div class="suspicious-page-travels flex-layout flex-1 page-items">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <aggregator-filters v-model="agregator" />
      </template>
    </page-filters>
    <div class="flex-1 flex-layout" v-if="items.length">
      <page-title>
        <h2>Подозрительные поездки</h2>
      </page-title>

      <div class="suspicious-travels-items flex flex-column flex-1">
        <suspicious-travels-item
          v-for="item in items"
          :key="item.id"
          :item="item"
          @deny="itemDeny(item.id)"
          @approve="itemApprove(item.id)"
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
    <suspicious-travels-placeholder v-else/>
  </div>
</template>

<script lang="ts">
import SuspiciousTravelsPlaceholder from '@/components/Placeholders/SuspiciousTravelsPlaceholder.vue'
import SuspiciousTravelsItem from "@/components/SuspiciousTravels/SuspiciousTravelsItem.vue";
import AggregatorFilters from "@/components/Travels/AgregatorFilters.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import {
  useApiGetSuspiciousTravels,
  useApiModerateSuspiciousTravels,
} from "@/api/suspicious-travel";
import useItemsPage from "@/compositions/useItemsPage";
import useToast from "@/compositions/useToast";
import { errorHandler } from "@/helpers/error-handler";

@Component({
  metaInfo: {
    title: "Подозрительные Поездки",
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
      refreshItems,
    } = useItemsPage({
      api: useApiGetSuspiciousTravels,
    });
    const toFetch = computed(() => ({
      dateFrom: date.value.start,
      dateTo: date.value.end,
      page: page.value,
      agregator: agregator.value,
    }));
    init({ fetchData: toFetch });
    const { exec: moderate, error } = useApiModerateSuspiciousTravels({
      toast: { error: errorHandler() },
    });
    const { success } = useToast();
    const itemApprove = async (id: number) => {
      await moderate({ id, isApproved: true });
      if (error.value) return;
      success({ message: "Поездка успешно одобрена" });
      await refreshItems();
    };
    const itemDeny = async (id: number) => {
      await moderate({ id, isApproved: false });
      if (error.value) return;
      success({ message: "Поездка успешно отказана" });
      await refreshItems();
    };
    return {
      itemDeny,
      itemApprove,
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
    SuspiciousTravelsItem, SuspiciousTravelsPlaceholder
  },
})
export default class SuspiciousTravels extends Vue {}
</script>

<style lang="scss">
</style>