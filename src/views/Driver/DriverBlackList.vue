<template>
  <div class="page-blacklist page-items flex-layout flex-1">
    <page-title>
      <h2>Чёрный список</h2>
    </page-title>

    <div class="driver-blacklist-items flex flex-column flex-1" v-if="false">
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
    <driver-black-list-placeholder v-else/>
  </div>
</template>

<script lang="ts">
import DriverBlackListPlaceholder from '../../components/Placeholders/DriverBlackListPlaceholder.vue'
import DriverBlackListItem from "../../components/DriverBlackList/DriverBlackListItem.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import useItemsPage from "@/compositions/useItemsPage";
import {useApiGetDriverBlackList} from "@/api/driver"
@Component({
  components: {
    PageTitle,
    DriverBlackListItem, DriverBlackListPlaceholder
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
      api: useApiGetDriverBlackList,
    });
    const toFetch = computed(() => ({
      page: page.value,
    }));
    init({fetchData: toFetch});

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