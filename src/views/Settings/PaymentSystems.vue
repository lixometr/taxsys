<template>
  <div class="settings-payment-systems">
    <page-title>
      <div class="settings-payment-systems__title-wrapper">
        <h2>Платежные системы</h2>
        <div>
          <app-button
            class="settings-payment-systems__btn"
            color="orange"
            @click="addSystem"
          >
            Добавить платежную систему
            <svgPlus class="ml-10" />
          </app-button>
        </div>
      </div>
    </page-title>
    <div class="settings-payment-systems__items">
      <payment-systems-item
        v-for="item in 5"
        :key="item"
        class="mb-20"
        @remove="removeItem(item)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import PaymentSystemsItem from "../../components/Settings/PaymentSystems/PaymentSystemsItem.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";

@Component({
  setup() {
    const {showByName} = useModal()
    const addSystem = () => {
      showByName(ModalName.paymentSystemsAdd)
      return;
    };
    const removeItem = (item) => {
      return;
    };
    return {
      addSystem,
      removeItem
    };
  },
  components: { PageTitle, svgPlus, PaymentSystemsItem },
})
export default class SettingsPaymentSystems extends Vue {}
</script>

<style lang="scss">
.settings-payment-systems {
  &__title-wrapper {
    display: flex;
    align-content: center;
    justify-content: space-between;
    @include sm {
      flex-direction: column;
    }
  }
  &__btn {
    @include sm {
      margin-top: 1rem;
    }
  }
}
</style>