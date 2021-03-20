<template>
  <modal-content class="add-payment-group-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Добавить группу</h2>
      <app-chooser class="add-payment-group-modal__chooser" v-model="groupType" :items="groupTypes"></app-chooser>
    </template>
    <template>
      <add-payment-group-form @send="onSend" />
    </template>
  </modal-content>
</template>

<script lang="ts">
import AppChooser from "../AppChooser.vue";
import AddPaymentGroupForm from "../Settings/PaymentGroups/AddPaymentGroupForm.vue";
import AddCardForm from "../AddCard/AddCardForm.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";

@Component({
  components: { ModalContent, AddCardForm, AddPaymentGroupForm, AppChooser },
  setup(props, { emit }) {
    const groupType = ref("momental");
    const onSend = () => {
      emit("send");
      emit("close");
    };
    const groupTypes = [
      {
        name: "Моментальные",
        value: "momental",
      },
      {
        name: "С одобрением",
        value: "withApprove",
      },
    ];
    return {
      groupTypes,
      onSend,
      groupType,
    };
  },
})
export default class AddPaymentGroupModal extends Vue {}
</script>

<style lang="scss">
.add-payment-group-modal {
  width: 100%;
  max-width: 1200px;
  margin: 0 30px;
  @include xs {
    margin: 0 5px;
  }
  .modal-header {
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    @include md {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__chooser {
    margin-left: auto;
    margin-right: auto;
    @include md {
      margin-left: 0;
      margin-right: 0;
      margin-top: 10px;
    }
  }
}
</style>