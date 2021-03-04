<template>
  <modal-content class="approve-phone-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Подтвердите номер телефона</h2>
    </template>
    <template>
      <approve-phone />
    </template>
  </modal-content>
</template>

<script lang="ts">
import ApprovePhone from '../ApprovePhone/ApprovePhone.vue'
import ModalContent from "./ModalContent.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { ModalContent, ApprovePhone },
})
export default class ApprovePhoneModal extends Vue {}
</script>

<style lang="scss">
.approve-phone-modal {
  width: 100%;
  max-width: 580px;
  margin: 0 30px;
  padding: 3rem 6rem;
  .modal-header {
    margin-bottom: 0;
  }
  @include xs {
    margin: 0 5px;
  }
}
</style>