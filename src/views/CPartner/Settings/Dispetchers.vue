<template>
  <div class="settings-dispetchers page-items flex-layout flex-1">
    <div class="flex-layout flex-1" v-if="items.length > 0">
      <page-filters :calendar.sync="date">
        <template v-slot:filters>
          <agregator-filters v-model="agregator" />
        </template>
      </page-filters>
      <page-title :between="true">
        <div><h2>Диспетчерские</h2></div>
        <div>
          <app-button color="orange" @click="addDispetcher"
            >Добавить диспетчерскую <svgPlus class="ml-10"
          /></app-button>
        </div>
      </page-title>

      <div class="settings-dispetchers-items flex-layout flex-1">
        <dispetchers-item
          v-for="(item, idx) in items"
          :key="idx"
          :item="item"
          @refresh="fetchItems"
        />
        <!-- <app-pagination
          class="mt-auto"
          :nowPage="page"
          :totalPages="totalPages"
          @next="nextPage"
          @prev="prevPage"
          @showMore="nextPage"
        /> -->
      </div>
    </div>
    <dispetcher-placeholder v-else @refresh="fetchItems" />
  </div>
</template>

<script lang="ts">
import DispetcherPlaceholder from "@/components/Placeholders/DispetcherPlaceholder.vue";
import DispetchersItem from "@/components/Settings/Dispetchers/DispetchersItem.vue";
import PageFilters from "@/components/Page/PageFilters.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiGetDispetchers } from "@/api/dispetchers";
import useItemsPage from "@/compositions/useItemsPage";
import svgPlus from "@/assets/icons/plus.svg";
import AgregatorFilters from "@/components/Travels/AgregatorFilters.vue";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import useGlobalLoading from "@/compositions/useGlobalLoading";
import { errorHandler } from "@/helpers/error-handler";
@Component({
  metaInfo: {
    title: "Диспетчерские",
  },
  setup() {
    const agregator = ref("all");
    const date = ref({
      start: new Date(),
      end: new Date(),
    });

    const toFetch = computed(() => ({
      dateFrom: date.value.start,
      dateTo: date.value.end,
      agregator: agregator.value,
    }));
    const items = ref([]);

    const fetchItems = async ({ gLoading = false } = {}) => {
      const { exec, result } = useApiGetDispetchers({
        toast: { error: errorHandler() },
        loading: gLoading,
      });
      await exec(toFetch.value);
      items.value = result.value;
    };
    fetchItems({ gLoading: true });
    watch(toFetch, () => {
      fetchItems({ gLoading: false });
    });

    const addDispetcher = () => {
      const { showByName } = useModal();
      showByName(ModalName.addDispetcher);
    };
    return {
      agregator,
      date,
      items,
      addDispetcher,
      fetchItems,
    };
  },
  components: {
    PageTitle,
    PageFilters,
    svgPlus,
    AgregatorFilters,
    DispetchersItem,
    DispetcherPlaceholder,
  },
})
export default class SettignsDispetchers extends Vue {}
</script>

<style lang="scss">
</style>