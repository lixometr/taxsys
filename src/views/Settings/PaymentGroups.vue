<template>
  <div class="settings-payment-groups page-items flex-layout flex-1">
    <page-title :between="true">
      <div><h2>Группы выплат</h2></div>
      <div>
        <app-button color="orange" @click="addDispetcher" :shadow="true"
          >Добавить группу <svgPlus class="ml-10"
        /></app-button>
      </div>
    </page-title>

    <div class="settings-payment-groups-items flex-layout flex-1">
      <payment-groups-item v-for="(item, idx) in 5" :key="idx" />
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
import PaymentGroupsItem from '../../components/Settings/PaymentGroups/PaymentGroupsItem.vue'
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiGetPaymentGroups } from "@/api/payment-groups";
import useItemsPage from "@/compositions/useItemsPage";
import svgPlus from "@/assets/icons/plus.svg";
@Component({
  metaInfo: {
    title: "Группы выплат",
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
      api: useApiGetPaymentGroups,
    });
    const toFetch = computed(() => ({
      page: page.value,
    }));
    // init({ fetchData: toFetch });
    const addDispetcher = () => {
      return;
    };
    return {
      page,
      showMore,
      nextPage,
      prevPage,
      items,
      totalPages,
      addDispetcher,
    };
  },
  components: {
    PageTitle,
    svgPlus, PaymentGroupsItem
  },
})
export default class SettignsPaymentGroups extends Vue {}
</script>

<style lang="scss">
</style>