<template>
  <modal-content class="add-add-dispetcher" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Добавить диспетчерскую</h2>
    </template>
    <template>
      <add-dispetcher-form @send="onSend" />
    </template>
  </modal-content>
</template>

<script lang="ts">
import AddDispetcherForm from '../Settings/Dispetchers/AddDispetcherForm.vue'
import ModalContent from "./ModalContent.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { ModalContent, AddDispetcherForm  },
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
export default class AddDispetcherModal extends Vue {}
</script>

<style lang="scss">
.add-add-dispetcher {
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