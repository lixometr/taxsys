<template>
  <modal-content
    class="payment-systems-modal"
    :scrollable="true"
    v-on="$listeners"
  >
    <template #header>
      <h2 class="modal-title">Платежная система</h2>
    </template>
    <template>
      <payment-systems-add-form @send="onSent" />
    </template>
  </modal-content>
</template>

<script lang="ts">
import ModalContent from './ModalContent.vue'
import PaymentSystemsAddForm from "../Settings/PaymentSystems/PaymentSystemsAddForm.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PaymentSystemsAddForm, ModalContent },
})
export default class PaymentSystemsAddModal extends Vue {}
</script>

<style lang="scss">
.payment-systems-modal {
  width: 100%;
  max-width: 580px;
  margin: 0 30px;
  @include xs {
    margin: 0 5px;
  }
}
</style>