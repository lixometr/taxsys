<template>
  <div class="page-driver-list page-items flex-layout flex-1">
    <page-filters :calendar.sync="date">
      <template v-slot:filters>
        <driver-list-filters v-model="entity" />
      </template>
    </page-filters>
    <page-title :between="true">
      <div><h2>Список водителей</h2></div>
      <div>
        <app-button color="orange" @click="addDriver" :shadow="true"
          >Добавить водителя <svgPlus class="ml-10"
        /></app-button>
      </div>
    </page-title>

    <div class="driver-list-items flex flex-column flex-1">
      <driver-list-item
        v-for="item in 5"
        :key="item.id"
        :showAgregators="true"
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
import DriverListItem from "../../components/DriverList/DriverListItem.vue";
import AppButton from "../../components/AppButton.vue";
import DriverListFilters from "../../components/DriverList/DriverListFilters.vue";
import PageFilters from "../../components/Page/PageFilters.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useItemsPage from "@/compositions/useItemsPage";
import { useApiGetDriverList } from "@/api/driver-list";
import useRouter from "@/compositions/useRouter";
@Component({
  components: {
    PageTitle,
    PageFilters,
    DriverListFilters,
    AppButton,
    svgPlus,
    DriverListItem,
  },
  metaInfo: {
    title: "Список водителей",
  },
  setup() {
    const router = useRouter();
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

    const addDriver = () => {
      router.push({ name: "AddDriver" });
    };

    return {
      entity,
      date,
      addDriver,
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