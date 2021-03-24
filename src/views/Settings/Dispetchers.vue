<template>
  <div class="settings-dispetchers page-items flex-layout flex-1">
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
      <dispetchers-item v-for="(item, idx) in items" :key="idx" :item="item" />
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
import DispetchersItem from "../../components/Settings/Dispetchers/DispetchersItem.vue";
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
@Component({
  metaInfo: {
    title: "Диспетчерские",
  },
  setup() {
    const agregator = ref("yandex");
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
      api: useApiGetDispetchers,
    });
    const toFetch = computed(() => ({
      dateFrom: date.value.start,
      dateTo: date.value.end,
      page: page.value,
      agregator: agregator.value,
    }));
    init({ fetchData: toFetch });
    const addDispetcher = () => {
      const { showByName } = useModal();
      showByName(ModalName.addDispetcher);
    };
    return {
      agregator,
      date,
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
    PageFilters,
    svgPlus,
    AgregatorFilters,
    DispetchersItem,
  },
})
export default class SettignsDispetchers extends Vue {}
</script>

<style lang="scss">
</style>