<template>
  <div class="flex-layout flex-1">
    <page-title>
      <h2 class="page-title">Поездки</h2>
    </page-title>
    <div class="flex-layout flex-1">
      <cd-agregator-travels-item
        v-for="(item, idx) in items"
        :item="item"
        :key="idx"
        class="mb-20"
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
</template>

<script lang="ts">
import CdAgregatorTravelsItem from "../../../components/CDAgregatorTravels/CdAgregatorTravelsItem.vue";
import PageTitle from "../../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import useItemsPage from "@/compositions/useItemsPage";
import { useApiGetTravels } from "@/api/travel";
import { computed } from "@vue/composition-api";
import useRouter from "@/compositions/useRouter";

@Component({
  components: { PageTitle, CdAgregatorTravelsItem },

  setup() {
    const router = useRouter();
    const agregator = router.currentRoute.params.name;
    const {
      items,
      init,
      totalPages,
      page,
      nextPage,
      prevPage,
      showMore,
    } = useItemsPage({
      api: useApiGetTravels,
    });
    const fetchData = computed(() => ({
      page: page.value,
      agregator,
    }));
    init({
      fetchData,
    });
    return { items, page, nextPage, prevPage, showMore, totalPages };
  },
})
export default class CDAgregatorTravels extends Vue {}
</script>

<style lang="scss">
</style>