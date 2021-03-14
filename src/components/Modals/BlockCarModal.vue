<template>
  <modal-content class="block-car-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Блокировка авто</h2>
    </template>
    <template>
      <block-car-form @send="onSend" />
    </template>
  </modal-content>
</template>

<script lang="ts">
import BlockCarForm from '../BlockCar/BlockCarForm.vue'
import AddCardForm from "../AddCard/AddCardForm.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { ModalContent, AddCardForm, BlockCarForm },
  setup(props, { emit }) {
    const onSend = () => {
      emit("send");
      emit("close");
    };
    return {
      onSend,
    };
  },
})
export default class BlockCarModal extends Vue {}
</script>

<style lang="scss">
.block-car-modal {
  width: 100%;
  max-width: 580px;
  margin: 0 30px;
  @include xs {
    margin: 0 5px;
  }
  .modal-header {
    margin-bottom: 3rem;
  }
}
</style>