<template>
  <div class="settings-staff page-items flex-layout flex-1">
    <page-title :between="true">
      <div><h2>Персонал</h2></div>
      <div>
        <app-button color="orange" @click="addStaff"
          >Добавить сотрудника <svgPlus class="ml-10"
        /></app-button>
      </div>
    </page-title>

    <div class="settings-staff-items flex-layout flex-1">
      <staff-item v-for="(item) in items" :item="item" :key="item.id" />
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
import StaffItem from "../../components/Settings/Staff/StaffItem.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import { useApiGetStaff } from "@/api/staff";
import useItemsPage from "@/compositions/useItemsPage";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
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
    return {
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
  },
})
export default class SettignsStaff extends Vue {}
</script>

<style lang="scss">
</style>