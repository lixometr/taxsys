<template>
  <modal-content class="add-car-record-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Добавить запись о ТО</h2>
    </template>
    <template>
      <add-car-record-form @send="onSend" />
    </template>
  </modal-content>
</template>

<script lang="ts">
import AddCarRecordForm from '../Car/AddCarRecordForm.vue'
import AddCardForm from "../AddCard/AddCardForm.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { ModalContent, AddCardForm, AddCarRecordForm },
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
export default class AddCarRecordModal extends Vue {}
</script>

<style lang="scss">
.add-car-record-modal {
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