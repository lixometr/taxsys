<template>
  <div class="page-manual-payments flex-layout flex-1 page-items">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <manual-payments-filters v-model="entity" />
      </template>
    </page-filters>
    <div class="flex-layout flex-1" v-if="items.length">
      <page-title :between="true">
        <div><h2>Ручные выплаты</h2></div>
        <div><download-btn /></div>
      </page-title>

      <div class="travels-items flex flex-column flex-1">
        <manual-payments-item
          v-for="item in items"
          :key="item.id"
          :item="item"
          :showActions="entity === 'orders'"
          @accept="accept(item)"
          @decline="decline(item)"
          @remove="remove(item)"
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
    <div class="flex-layout flex-1" v-else>
      <manual-payments-applys-placeholder v-if="entity === 'orders'" />
      <manual-payments-pay-placeholder v-if="entity === 'payments'" />
    </div>
  </div>
</template>

<script lang="ts">
import DownloadBtn from "@/components/DownloadBtn.vue";
import ManualPaymentsPayPlaceholder from "@/components/Placeholders/ManualPaymentsPayPlaceholder.vue";
import ManualPaymentsApplysPlaceholder from "@/components/Placeholders/ManualPaymentsApplysPlaceholder.vue";
import ManualPaymentsFilters from "@/components/ManualPayments/ManualPaymentsFilters.vue";
import ManualPaymentsItem from "@/components/ManualPayments/ManualPaymentsItem.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import {
  useApiManualPayments,
  useApiPaymentAccept,
  useApiPaymentDecline,
  useApiPaymentDelete,
} from "@/api/payments";
import useItemsPage from "@/compositions/useItemsPage";
import { errorHandler } from "@/helpers/error-handler";
@Component({
  metaInfo: {
    title: "Ручные выплаты",
  },
  setup() {
    const entity = ref("payments");
    const date = ref({
      start: undefined,
      end: undefined,
    });

    const {
      page,
      nextPage,
      prevPage,
      showMore,
      totalPages,
      init,
      items,
      refreshItems,
    } = useItemsPage({
      api: useApiManualPayments,
    });
    const toFetch = computed(() => ({
      dateFrom: date.value.start,
      dateTo: date.value.end,
      page: page.value,
      isPaid: entity.value === "payments",
    }));
    init({ fetchData: toFetch });
    const accept = async (item) => {
      const { exec, error } = useApiPaymentAccept({
        toast: { success: () => "Платеж принят", error: errorHandler() },
      });
      await exec({ id: item.id });
      if (error.value) return;
      await refreshItems();
    };
    const decline = async (item) => {
      const { exec, error } = useApiPaymentDecline({
        toast: { success: () => "Платеж отклонен", error: errorHandler() },
      });
      await exec({ id: item.id });
      if (error.value) return;
      await refreshItems();
    };
    const remove = async (item) => {
      const { exec, error } = useApiPaymentDelete({
        toast: { success: () => "Платеж удален", error: errorHandler() },
      });
      await exec({ id: item.id });
      if (error.value) return;
      await refreshItems();
    };
    return {
      accept,
      decline,
      remove,
      entity,
      date,
      page,
      showMore,
      nextPage,
      prevPage,
      items,
      totalPages,
    };
  },
  components: {
    PageTitle,
    PageFilters,
    ManualPaymentsItem,
    ManualPaymentsFilters,
    ManualPaymentsApplysPlaceholder,
    ManualPaymentsPayPlaceholder,
    DownloadBtn,
  },
})
export default class ManualPayments extends Vue {}
</script>

<style lang="scss">
</style>