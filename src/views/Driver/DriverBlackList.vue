<template>
  <div class="page-blacklist page-items flex-layout flex-1">
    <page-title>
      <h2>Чёрный список</h2>
    </page-title>

    <div class="driver-blacklist-items flex flex-column flex-1">
      <driver-black-list-item v-for="item in 5" :key="item.id" />
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
import DriverBlackListItem from "../../components/DriverBlackList/DriverBlackListItem.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import useItemsPage from "@/compositions/useItemsPage";
import { useApiGetDriverList } from "@/api/driver-list";
@Component({
  components: {
    PageTitle,
    DriverBlackListItem,
  },
  metaInfo: {
    title: "Чёрный список",
  },
  setup() {
    const {
      page,
      nextPage,
      prevPage,
      showMore,
      items,
      totalPages,
      init,
    } = useItemsPage({
      api: useApiGetDriverList,
    });
    const toFetch = computed(() => ({
      page: page.value,
    }));
    // init({fetchData: toFetch});

    return {
      page,
      nextPage,
      prevPage,
      showMore,
      items,
      totalPages,
    };
  },
})
export default class DriverBlackList extends Vue {}
</script>

<style lang="scss">
</style>