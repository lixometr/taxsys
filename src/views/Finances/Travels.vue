<template>
  <div class="page-travels flex-layout">
    <page-title>
      <h2>Поездки</h2>
    </page-title>
    <page-filters :calendar.sync="date" @update:calendar="date = $event">
      <template v-slot:filters>
        <aggregator-filters v-model="agregator" />
      </template>
    </page-filters>
    <div class="travels-items flex-1">
      <travels-item v-for="item in items" :key="item.id" :item="item" />
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
import TravelsItem from "@/components/Travels/TravelsItem.vue";
import AggregatorFilters from "@/components/Travels/AggregatorFilters.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import usePagination from "@/compositions/usePagination";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiGetTravels } from "@/api/travel";
import useGlobalLoading from "@/compositions/useGlobalLoading";
@Component({
  setup() {
    const agregator = ref("all");
    const date = reactive({
      start: new Date(),
      end: new Date(),
    });
    const {
      onChange: onPageChange,
      setPage,
      page,
      nextPage,
      prevPage,
      setTotalPages,
      totalPages
    } = usePagination();
    const gLoading = useGlobalLoading();

    const { exec: fetchItems, result } = useApiGetTravels({
      toast: { error: (err) => "Ошибка при запросе данных" },
    });
    const toFetch = computed(() => ({
      dateFrom: date.start,
      dateTo: date.end,
      page: page.value,
      agregator: agregator.value,
    }));
    gLoading.show();
    fetchItems(toFetch.value).then(() => {
      gLoading.hide()
      setPage(result.value.current_page)
      setTotalPages(result.value.last_page)
    });
  
    watch(toFetch, () => {
      console.log("changed toFetch");
      fetchItems(toFetch.value);
    });
    const items = ref([]);
    watch(result, (data) => {
      items.value = data.data;
      
    });
    return {
      agregator,
      date,
      page,
      nextPage,
      prevPage,
      items,
      totalPages
    };
  },
  components: { PageTitle, PageFilters, AggregatorFilters, TravelsItem },
})
export default class Travels extends Vue {}
</script>

<style lang="scss">
.page-travels {
  height: 100%;
  display: flex;
  .travels-items {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>