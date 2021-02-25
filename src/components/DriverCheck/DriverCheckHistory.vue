<template>
  <div class="driver-check-history flex-layout">
    <div class="app-card">
      <div class="driver-check-history__title">История проверок</div>
      <div class="driver-check-history__items">
        <driver-check-history-item
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
    <app-pagination
      class="mt-30"
      :nowPage="page"
      :totalPages="totalPages"
      @next="nextPage"
      @prev="prevPage"
      @showMore="showMore"
    />
  </div>
</template>

<script lang="ts">
import DriverCheckHistoryItem from "./DriverCheckHistoryItem.vue";
import { useApiGetDriverCheckHistory } from "@/api/driver-check";
import useItemsPage from "@/compositions/useItemsPage";
import { computed } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { DriverCheckHistoryItem },
  setup() {
    const {
      init,
      nextPage,
      prevPage,
      page,
      totalPages,
      showMore,
      items,
    } = useItemsPage({ api: useApiGetDriverCheckHistory, useQuery: false });
    const toFetch = computed(() => ({ page: page.value }));
    init({ fetchData: toFetch });
    return {
      page,
      nextPage,
      prevPage,
      totalPages,
      showMore,
      items,
    };
  },
})
export default class DriverCheckHistory extends Vue {
  //   @Prop({ type: Array, default: () => [] }) items: any;
}
</script>

<style lang="scss">
.driver-check-history {
  &__title {
    color: $violet;
    font-size: $fz_md;
    margin-bottom: 3.3rem;
  }
}
</style>