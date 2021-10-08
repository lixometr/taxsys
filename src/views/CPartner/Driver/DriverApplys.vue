<template>
  <div class="page-driver-list page-items flex-layout flex-1">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <driver-applys-filters v-model="entity" />
      </template>
    </page-filters>
    <div class="flex-layout flex-1" v-if="items.length && !isLoading">
      <page-title :between="true">
        <div><h2>Заявки водителей</h2></div>
        <div>
          <app-button color="orange" @click="addDriver" :shadow="true"
            >Добавить водителя <svgPlus class="ml-10"
          /></app-button>
        </div>
      </page-title>
      <div class="driver-list-items flex flex-column flex-1">
        <driver-list-item
          v-for="item in items"
          :key="item.id"
          :item="item"
          :showAgregators="false"
          @refresh="refresh"
          :paymentGroups="paymentGroups"
          :antifrauds="antifrauds"
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
    <div class="flex-layout flex-1" v-else key="noItems">
      <driver-applys-connect-placeholder v-if="entity === 'connect'" />
      <driver-applys-rent-placeholder v-if="entity === 'rent'" />
    </div>
  </div>
</template>

<script lang="ts">
import DriverApplysConnectPlaceholder from "@/components/Placeholders/DriverApplysConnectPlaceholder.vue";
import DriverApplysRentPlaceholder from "@/components/Placeholders/DriverApplysRentPlaceholder.vue";
import DriverApplysFilters from "@/components/DriverApplys/DriverApplysFilters.vue";
import DriverListItem from "@/components/DriverList/DriverListItem.vue";
import AppButton from "@/components/AppButton.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useItemsPage from "@/compositions/useItemsPage";
import { useApiGetDriversApplys } from "@/api/driver";
import { useApiGetAntifrauds } from "@/api/antifraud";
import { useApiGetPaymentGroups } from "@/api/payment-groups";
import useRouter from "@/compositions/useRouter";
@Component({
  components: {
    PageTitle,
    PageFilters,
    AppButton,
    svgPlus,
    DriverListItem,
    DriverApplysFilters,
    DriverApplysRentPlaceholder,
    DriverApplysConnectPlaceholder,
  },
  metaInfo: {
    title: "Заявки водителей",
  },
  setup() {
    const entity = ref("connect");
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
      api: useApiGetDriversApplys,
    });
    const isLoading = ref(false);
    const toFetch = computed(() => ({
      page: page.value,
      dateFrom: date.value.start,
      dateEnd: date.value.end,
    }));
    init({ fetchData: toFetch });

    const refresh = () => {
      refreshItems();
    };
    const { exec: getAntifraud, result: antifrauds } = useApiGetAntifrauds();

    const {
      exec: getPaymentGroups,
      result: paymentGroups,
    } = useApiGetPaymentGroups();
    const fetchData = async () => {
      isLoading.value = true;
      await getAntifraud({ paginate: false });
      await getPaymentGroups();
      isLoading.value = false;
    };
    fetchData();
    const router = useRouter();
    const addDriver = () => {
      router.push({ name: "AddDriver" });
    };
    return {
      isLoading,
      addDriver,
      antifrauds,
      paymentGroups,
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
export default class DriverApplys extends Vue {}
</script>

<style lang="scss"></style>
