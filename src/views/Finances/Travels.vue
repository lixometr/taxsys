<template>
  <div class="page-travels flex-layout">
    <page-title>
      <h2>Поездки</h2>
    </page-title>
    <page-filters :calendar.sync="date">
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
import useRouter from "@/compositions/useRouter";
@Component({
  metaInfo: {
    title: "Поездки",
  },
  setup() {
    const router = useRouter();
    const agregator = ref("all");
    const date = ref({
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
      totalPages,
    } = usePagination({ nowPage: +router.currentRoute.query.page });
    const toFetch = computed(() => ({
      dateFrom: date.value.start,
      dateTo: date.value.end,
      page: page.value,
      agregator: agregator.value,
    }));

    const { exec: fetchItems, result } = useApiGetTravels({
      toast: { error: (err) => "Ошибка при запросе данных" },
    });
    const gLoading = useGlobalLoading();
    gLoading.show();
    fetchItems(toFetch.value).then(() => {
      gLoading.hide();
      setPage(result.value.current_page);
      setTotalPages(result.value.last_page);
    });
    watch(toFetch, () => {
      window.scrollTo(0, 0);
      fetchItems(toFetch.value);
    });
    onPageChange(() => {
      router.push({ query: { page: page.value.toString() } });
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
      totalPages,
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