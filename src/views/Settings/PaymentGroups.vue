<template>
  <div class="settings-payment-groups page-items flex-layout flex-1">
    <page-title :between="true">
      <div><h2>Группы выплат</h2></div>
      <div>
        <app-button color="orange" @click="addPaymentGroup" :shadow="true"
          >Добавить группу <svgPlus class="ml-10"
        /></app-button>
      </div>
    </page-title>

    <div class="settings-payment-groups-items flex-layout flex-1" v-if="items.length">
      <payment-groups-item
        v-for="(item, idx) in items"
        :item="item"
        :key="idx"
        @delete="onDeleteItem(item.id)"
      />
    </div>
    <payment-group-placeholder v-else/>
  </div>
</template>

<script lang="ts">
import PaymentGroupPlaceholder from '../../components/Placeholders/PaymentGroupPlaceholder.vue'
import PaymentGroupsItem from "../../components/Settings/PaymentGroups/PaymentGroupsItem.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, reactive, ref, watch } from "@vue/composition-api";
import {
  useApiDeletePaymentGroups,
  useApiGetPaymentGroups,
} from "@/api/payment-groups";
import useItemsPage from "@/compositions/useItemsPage";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import { errorHandler } from "@/helpers/error-handler";
@Component({
  metaInfo: {
    title: "Группы выплат",
  },
  setup() {
    const { exec: fetchItems, result } = useApiGetPaymentGroups();
    fetchItems();

    const items = ref([]);
    watch(result, (data: any) => {
      items.value = data;
    });
    const addPaymentGroup = () => {
      const { showByName } = useModal();
      showByName(ModalName.addPaymentGroup);
    };
    const onDeleteItem = async (id: number) => {
      const { exec, error } = useApiDeletePaymentGroups({
        toast: {
          error: errorHandler(),
          success: () => "Группа выплат успешно удалена!",
        },
      });
      await exec({ id });
      if (error.value) return;
      await fetchItems();
    };
    return {
      onDeleteItem,
      items,
      addPaymentGroup,
    };
  },
  components: {
    PageTitle,
    svgPlus,
    PaymentGroupsItem, PaymentGroupPlaceholder
  },
})
export default class SettignsPaymentGroups extends Vue {}
</script>

<style lang="scss">
</style>