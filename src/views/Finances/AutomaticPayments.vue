<template>
  <div class="page-travels flex-layout flex-1 page-items">
    <page-title>
      <h2>Автоматические выплаты</h2>
    </page-title>
    <page-filters :calendar.sync="date"> </page-filters>
    <div class="travels-items flex flex-column flex-1">
      <automatic-payments-item v-for="item in items" :key="item.id" :item="item" />
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
import AutomaticPaymentsItem from "@/components/AutomaticPayments/AutomaticPaymentsItem.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiAutomaticPayments } from "@/api/payments";
import useItemsPage from "@/compositions/useItemsPage";
@Component({
  metaInfo: {
    title: "Автоматические выплаты",
  },
  setup() {
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
      api: useApiAutomaticPayments,
    });
    const toFetch = computed(() => ({
      dateFrom: date.value.start,
      dateTo: date.value.end,
      page: page.value,
    }));
    init({fetchData: toFetch});

    return {
      date,
      page,
      showMore,
      nextPage,
      prevPage,
      items,
      totalPages,
    };
  },
  components: { PageTitle, PageFilters,  AutomaticPaymentsItem },
})
export default class AutomaticPayments extends Vue {}
</script>

<style lang="scss">
</style>