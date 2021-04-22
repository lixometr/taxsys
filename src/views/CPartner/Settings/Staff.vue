<template>
  <div class="settings-staff page-items flex-layout flex-1">
    <div class="flex-1 flex-layout" v-if="items.length">
      <page-title :between="true">
        <div><h2>Персонал</h2></div>
        <div>
          <app-button color="orange" @click="addStaff"
            >Добавить сотрудника <svgPlus class="ml-10"
          /></app-button>
        </div>
      </page-title>

      <div class="settings-staff-items flex-layout flex-1">
        <staff-item
          v-for="item in items"
          :item="item"
          :key="item.id"
          @delete="deleteItem(item.id)"
        />
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
    <staff-placeholder @refresh="refreshItems" v-else />
  </div>
</template>

<script lang="ts">
import StaffPlaceholder from "@/components/Placeholders/StaffPlaceholder.vue";
import StaffItem from "@/components/Settings/Staff/StaffItem.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiDeleteStaff, useApiGetStaff } from "@/api/staff";
import useItemsPage from "@/compositions/useItemsPage";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import { errorHandler } from "@/helpers/error-handler";
@Component({
  metaInfo: {
    title: "Персонал",
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
      refreshItems,
    } = useItemsPage({
      api: useApiGetStaff,
    });
    const toFetch = computed(() => ({
      page: page.value,
    }));
    init({ fetchData: toFetch });
    const addStaff = () => {
      const { showByName } = useModal();
      showByName(ModalName.addStaff);
    };
    const deleteItem = async (id: number) => {
      const { exec: deleteStaff, error } = useApiDeleteStaff({
        toast: {
          success: () => "Сотрудник успешно удален!",
          error: errorHandler(),
        },
      });
      await deleteStaff({ id });
      if (error.value) return;
      await refreshItems();
    };
    return {
      refreshItems,
      deleteItem,
      page,
      showMore,
      nextPage,
      prevPage,
      items,
      totalPages,
      addStaff,
    };
  },
  components: {
    PageTitle,
    svgPlus,
    StaffItem,
    StaffPlaceholder,
  },
})
export default class SettignsStaff extends Vue {}
</script>

<style lang="scss">
</style>