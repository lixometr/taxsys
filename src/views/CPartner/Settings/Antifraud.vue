<template>
  <div class="settings-antifraud flex-layout flex-1">
    <page-title>
      <div class="settings-antifraud__title-wrapper">
        <h2 class="mr-10">Антифрод</h2>
        <div>
          <app-button
            class="settings-antifraud__btn-add-param"
            color="orange"
            @click="createItem"
          >
            Добавить параметр
            <svgPlus class="ml-10" />
          </app-button>
        </div>
      </div>
    </page-title>
    <div
      class="settings-antifraud__content flex-layout flex-1"
      v-if="items.length"
    >
      <settings-antifraud-item
        v-for="item in items"
        :key="item.id"
        class="mb-20"
        :item="item"
        @remove="removeItem(item)"
        @edit="editItem(item)"
        @active="toggleActive($event, item)"
      />
      <app-pagination
        :nowPage="page"
        :totalPages="totalPages"
        @next="nextPage"
        @prev="prevPage"
        @showMore="showMore"
        class="mt-auto"
      />
    </div>
    <antifraud-placeholder v-else />
  </div>
</template>

<script lang="ts">
import AntifraudPlaceholder from "@/components/Placeholders/AntifraudPlaceholder.vue";
import SettingsAntifraudItem from "@/components/Settings/Antifraud/SettingsAntifraudItem.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import useItemsPage from "@/compositions/useItemsPage";
import {
  useApiDeleteAntifraud,
  useApiGetAntifrauds,
  useApiUpdateAntifraud,
} from "@/api/antifraud";
import { computed } from "@vue/composition-api";
import { AntifraudEntity } from "@/models/antifraud.entity";
import { errorHandler } from "@/helpers/error-handler";
@Component({
  components: {
    PageTitle,
    svgPlus,
    SettingsAntifraudItem,
    AntifraudPlaceholder,
  },
  setup() {
    const { showByName } = useModal();

    const {
      page,
      nextPage,
      prevPage,
      showMore,
      totalPages,
      items,
      init,
      refreshItems,
    } = useItemsPage({
      api: useApiGetAntifrauds,
      useQuery: false,
    });
    const toFetch = computed(() => ({ page: page.value }));
    init({ fetchData: toFetch });

    const createItem = () => {
      showByName(ModalName.antifraudAddParam, {
        props: {
          isNew: true,
        },
        on: {
          send: () => {
            refreshItems();
          },
        },
      });
    };

    const removeItem = async (item: AntifraudEntity) => {
      const { exec, error } = useApiDeleteAntifraud({
        toast: {
          success: () => {
            return "Успешно удален!";
          },
          error: errorHandler(),
        },
      });
      await exec({ id: item.id });
      if (!error.value) {
        await refreshItems();
      }
    };
    const editItem = async (item: AntifraudEntity) => {
      showByName(ModalName.antifraudAddParam, {
        props: {
          isNew: false,
          item: item,
        },
        on: {
          send: () => {
            refreshItems();
          },
        },
      });
    };
    const toggleActive = async (active: boolean, item: AntifraudEntity) => {
      const { exec, error } = useApiUpdateAntifraud({
        toast: {
          success: () => (active ? "Активирован" : "Деактивирован"),
          error: errorHandler(),
        },
      });
      await exec({
        id: item.id,
        name: item.name,
        costTripMore: item.cost_trip_more,
        bonusSumMore: item.sum_bonus_more,
        timeTripMore: item.time_trip_more,
        timeTripLess: item.time_trip_less,
        costPerMinMore: item.cost_min_more,
        costPerMinLess: item.cost_min_less,
        costPerKmMore: item.cost_km_more,
        tipSumMorePerc: item.sum_tip_more_perc,
        tipSumMoreRub: item.sum_tip_more_rub,
        active,
        isDefault: item.default,
      });
      if (!error.value) {
        await refreshItems();
      }
    };
    return {
      toggleActive,
      editItem,
      removeItem,
      page,
      nextPage,
      prevPage,
      showMore,
      totalPages,
      createItem,
      items,
    };
  },
})
export default class SettingsAntifraud extends Vue {}
</script>

<style lang="scss">
.settings-antifraud {
  &__title-wrapper {
    display: flex;
    align-self: center;
    justify-content: space-between;
    @include xs {
      flex-direction: column;
    }
  }
  &__btn-add-param {
    @include xs {
      margin-top: 1rem;
    }
  }
}
</style>