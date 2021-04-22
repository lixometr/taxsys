<template>
  <div class="page-driver-list page-items flex-layout flex-1">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <driver-list-filters v-model="entity" />
      </template>
    </page-filters>
    <div class="flex-layout flex-1" v-if="items.length ">
      <page-title :between="true">
        <div><h2>Список водителей</h2></div>
        <div>
          <download-btn />
        </div>
      </page-title>

      <div class="driver-list-items flex flex-column flex-1">
        <driver-list-item
          v-for="item in items"
          :key="item.id"
          :item="item"
          :showAgregators="true"
          @refresh="refresh"
          :antifrauds="antifrauds"
          :paymentGroups="paymentGroups"
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
    <div class="flex-layout flex-1" key="noItems" v-else>
      <driver-list-connect-placeholder v-if="entity === 'park'"/>
      <driver-list-rent-placeholder v-if="entity === 'rent'"/>
    </div>
  </div>
</template>

<script lang="ts">
import DownloadBtn from '@/components/DownloadBtn.vue'
import DriverListRentPlaceholder from '@/components/Placeholders/DriverListRentPlaceholder.vue'
import DriverListConnectPlaceholder from '@/components/Placeholders/DriverListConnectPlaceholder.vue'
import DriverListItem from "@/components/DriverList/DriverListItem.vue";
import AppButton from "@/components/AppButton.vue";
import DriverListFilters from "@/components/DriverList/DriverListFilters.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref, watch } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useItemsPage from "@/compositions/useItemsPage";
import { useApiGetDrivers } from "@/api/driver";
import useRouter from "@/compositions/useRouter";
import { useApiGetAntifrauds } from "@/api/antifraud";
import { useApiGetPaymentGroups } from "@/api/payment-groups";
@Component({
  components: {
    PageTitle,
    PageFilters,
    DriverListFilters,
    AppButton,
    svgPlus,
    DriverListItem, DriverListConnectPlaceholder, DriverListRentPlaceholder, DownloadBtn
  },
  metaInfo: {
    title: "Список водителей",
  },
  setup() {
    const router = useRouter();
    const entity = ref('park');
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
      refreshItems,
    } = useItemsPage({
      api: useApiGetDrivers,
    });
    const toFetch = computed(() => ({
      page: page.value,
      dateFrom: date.value.start,
      dateEnd: date.value.end,
    }));
    init({ fetchData: toFetch });

    const refresh = async () => {
      await refreshItems();
    };
    const { exec: getAntifraud, result: antifrauds } = useApiGetAntifrauds();
    getAntifraud({ paginate: false });

    const {
      exec: getPaymentGroups,
      result: paymentGroups,
    } = useApiGetPaymentGroups();
    getPaymentGroups();

    return {
      paymentGroups,
      antifrauds,
      refresh,
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
export default class DriverList extends Vue {}
</script>

<style lang="scss">
</style>