<template>
  <div class="page-driver-list page-items flex-layout flex-1">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <driver-applys-filters v-model="entity" />
      </template>
    </page-filters>
    <page-title>
      <h2>Заявки водителей</h2>
    </page-title>

    <div class="driver-list-items flex flex-column flex-1">
      <driver-list-item
        v-for="item in 5"
        :key="item.id"
        :showAgregators="false"
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
import DriverApplysFilters from '../../components/DriverApplys/DriverApplysFilters.vue'
import DriverListItem from "../../components/DriverList/DriverListItem.vue";
import AppButton from "../../components/AppButton.vue";
import PageFilters from "../../components/Page/PageFilters.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useItemsPage from "@/compositions/useItemsPage";
import { useApiGetDriverList } from "@/api/driver-list";
@Component({
  components: {
    PageTitle,
    PageFilters,
    AppButton,
    svgPlus,
    DriverListItem, DriverApplysFilters
  },
  metaInfo: {
    title: "Заявки водителей",
  },
  setup() {
    const entity = ref(null);
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
      api: useApiGetDriverList,
    });
    const toFetch = computed(() => ({
      page: page.value,
      dateFrom: date.value.start,
      dateEnd: date.value.end,
    }));
    // init({fetchData: toFetch});

   

    return {
      entity,
      date,
      page,
      nextPage,
      prevPage,
      showMore,
      items,
      totalPages,
    };
  },
})
export default class DriverApplys extends Vue {}
</script>

<style lang="scss">
</style>