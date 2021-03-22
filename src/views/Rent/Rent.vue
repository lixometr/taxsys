<template>
  <div class="page-rent flex-layout flex-1 page-items">
    <page-filters class="page-rent-filters mt-30" :showCalendar="false">
      <template #filters>
        <div class="page-rent-filters__row">
          <rent-filters v-model="entity" />
        </div>
      </template>
    </page-filters>
    <div class="flex-layout flex-1" v-if="items.length">
      <page-title class="mb-30" :between="true">
        <div><h2>Аренда авто</h2></div>
        <div>
          <app-button color="orange" @click="createRent">
            Добавить авто <svgPlus class="ml-10"
          /></app-button>
        </div>
      </page-title>
      <div class="page-rent__items flex flex-column flex-1">
        <rent-item
          v-for="item in 5"
          :key="item"
          class="page-rent-item"
          @approve="onApprove"
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
      <rent-free-placeholder v-if="entity === 'free'"/>
      <rent-work-placeholder v-if="entity === 'work'"/>
    </div>
  </div>
</template>

<script lang="ts">
import RentWorkPlaceholder from '../../components/Placeholders/RentWorkPlaceholder.vue'
import RentFreePlaceholder from '../../components/Placeholders/RentFreePlaceholder.vue'
import PageTitle from "../../components/Page/PageTitle.vue";
import RentItem from "../../components/Rent/RentItem.vue";
import RentFilters from "../../components/Rent/RentFilters.vue";
import PageFilters from "../../components/Page/PageFilters.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useItemsPage from "@/compositions/useItemsPage";
import { useApiGetRents } from "@/api/rent";
import useRouter from "@/compositions/useRouter";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
@Component({
  setup() {
    const entity = ref("free");
    const router = useRouter();

    const createRent = () => {
      router.push({ name: "CarAdd" });
    };
    const onApprove = () => {
      const { showByName } = useModal();
      showByName(ModalName.giveCar);
    };
    const {
      page,
      totalPages,
      nextPage,
      prevPage,
      showMore,
      items,
      init,
    } = useItemsPage({ api: useApiGetRents });
    const toFetch = computed(() => ({ entity: entity.value }));
    // init({fetchData: toFetch})
    return {
      onApprove,
      entity,
      createRent,
      page,
      nextPage,
      prevPage,
      totalPages,
      showMore,
      items,
    };
  },
  components: { PageFilters, RentFilters, svgPlus, RentItem, PageTitle, RentFreePlaceholder, RentWorkPlaceholder },
})
export default class Rent extends Vue {}
</script>

<style lang="scss">
.page-rent {
  &-filters {
    .page-filters__row {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }

  &-item {
    margin-bottom: 3rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>