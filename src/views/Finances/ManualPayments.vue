<template>
  <div class="page-manual-payments flex-layout flex-1 page-items">
    <page-title>
      <h2>Ручные выплаты</h2>
    </page-title>
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <manual-payments-filters v-model="entity" />
      </template>
    </page-filters>
    <div class="travels-items flex flex-column flex-1">
      <manual-payments-item v-for="item in items" :key="item.id" :item="item" />
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
</template>

<script lang="ts">
import ManualPaymentsFilters from "../../components/ManualPayments/ManualPaymentsFilters.vue";
import ManualPaymentsItem from "@/components/ManualPayments/ManualPaymentsItem.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiManualPayments } from "@/api/payments";
import useItemsPage from "@/compositions/useItemsPage";
@Component({
  metaInfo: {
    title: "Ручные выплаты",
  },
  setup() {
    const entity = ref("payments");
    const date = ref({
      start: new Date(),
      end: new Date(),
    });

    const {
      page,
      nextPage,
      prevPage,
      showMore,
      totalPages,
      init,
      items
    } = useItemsPage({
      api: useApiManualPayments,
    });
    const toFetch = computed(() => ({
      dateFrom: date.value.start,
      dateTo: date.value.end,
      page: page.value,
    }));
    init({fetchData: toFetch});
    
    return {
      entity,
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
    ManualPaymentsItem,
    ManualPaymentsFilters,
  },
})
export default class ManualPayments extends Vue {}
</script>

<style lang="scss">
</style>