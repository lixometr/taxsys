<template>
  <modal-content class="add-card-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Добавление карты</h2>
    </template>
    <template>
      <add-card-form @send="onSend" :type="type" :id="id" />
    </template>
  </modal-content>
</template>

<script lang="ts">
import AddCardForm from "../AddCard/AddCardForm.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
enum ModalType {
  driver = 'driver',
  partner = 'partner'
}
@Component({
  components: { ModalContent, AddCardForm },
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
export default class AddCardModal extends Vue {
  @Prop(Number) driverId: string;
  @Prop(String) type: ModalType
}
</script>

<style lang="scss">
.add-card-modal {
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