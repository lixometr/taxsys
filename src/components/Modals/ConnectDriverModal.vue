<template>
  <modal-content class="connect-driver-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Подключение водителя</h2>
    </template>
    <template>
        <connect-driver-form :id="id" :agregator="agregator"/>
    </template>
  </modal-content>
</template>

<script lang="ts">
import ConnectDriverForm from '../ConnectDriver/ConnectDriverForm.vue'
import AddCardForm from "../AddCard/AddCardForm.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgregName } from "@/types/agregator.enum";

@Component({
  components: { ModalContent, AddCardForm, ConnectDriverForm },
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
export default class ConnectDriverModal extends Vue {
  @Prop(Number) id: string;
  @Prop(String) agregator: AgregName
}
</script>

<style lang="scss">
.connect-driver-modal {
  width: 100%;
  max-width: 1000px;
  margin: 0 30px;
  @include xs {
    margin: 0 5px;
  }
  .modal-header {
    margin-bottom: 3rem;
  }
}
</style>