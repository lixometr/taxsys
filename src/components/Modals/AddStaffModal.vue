<template>
  <modal-content class="add-staff-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Добавить сотрудника</h2>
    </template>
    <template>
      <add-staff-form @send="onSend" />
    </template>
  </modal-content>
</template>

<script lang="ts">
import AddStaffForm from '../Settings/Staff/AddStaffForm.vue'
import AddCardForm from "../AddCard/AddCardForm.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { ModalContent, AddCardForm, AddStaffForm },
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
export default class AddStaffModal extends Vue {}
</script>

<style lang="scss">
.add-staff-modal {
  width: 100%;
  max-width: 840px;
  margin: 0 30px;
  @include xs {
    margin: 0 5px;
  }
  .modal-header {
    margin-bottom: 3rem;
  }
}
</style>