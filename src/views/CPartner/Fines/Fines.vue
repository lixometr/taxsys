<template>
  <div class="page-fines page-items flex-layout flex-1">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <fines-filters v-model="entity" />
      </template>
    </page-filters>
    <div  class="flex-layout flex-1" v-if="items.length > 0">
      <page-title>
        <h2>Штрафы</h2>
      </page-title>
      <div class="fines-items flex flex-column flex-1">
        <fines-item
          v-for="item in items"
          :key="item.id"
          :item="item"
          @payCard="payCard(item.id)"
          @payBalance="payBalance(item.id)"
        />
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
    <fines-placeholder v-else />
  </div>
</template>

<script lang="ts">
import FinesPlaceholder from "@/components/Placeholders/FinesPlaceholder.vue";
import FinesItem from "@/components/Fines/FinesItem.vue";
import FinesFilters from "@/components/Fines/FinesFilters.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiGetFines } from "@/api/fines";
import useItemsPage from "@/compositions/useItemsPage";
@Component({
  metaInfo: {
    title: "Штрафы",
  },
  setup() {
    const entity = ref("park");
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
      api: useApiGetFines,
    });
    const toFetch = computed(() => ({
      dateFrom: date.value.start,
      dateTo: date.value.end,
      page: page.value,
      filter: entity.value,
    }));
    init({ fetchData: toFetch });
    const payCard = () => {
      return;
    };
    const payBalance = () => {
      return;
    };
    return {
      entity,
      date,
      page,
      showMore,
      nextPage,
      prevPage,
      items,
      totalPages,
      payCard,
      payBalance,
    };
  },
  components: {
    PageTitle,
    PageFilters,
    FinesFilters,
    FinesItem,
    FinesPlaceholder,
  },
})
export default class Fines extends Vue {}
</script>

<style lang="scss">
</style>