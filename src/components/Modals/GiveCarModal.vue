<template>
  <modal-content class="give-car-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Выдача авто</h2>
      <search-input
        class="give-car-modal__search"
        
        v-model="searchPhrase"
        @search="onSearch"
      />
    </template>
    <template>
      <give-car-form @send="onSend" />
    </template>
  </modal-content>
</template>

<script lang="ts">
import GiveCarForm from '../Rent/GiveCarForm.vue'
import SearchInput from "../SearchInput.vue";
import AddCardForm from "../AddCard/AddCardForm.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";

@Component({
  components: { ModalContent, AddCardForm, SearchInput, GiveCarForm },
  setup(props, { emit }) {
    const searchPhrase = ref("");
    const onSearch = () => {
      return;
    };
    const onSend = () => {
      emit("send");
      emit("close");
    };
    return {
      searchPhrase,
      onSearch,
      onSend,
    };
  },
})
export default class GiveCarModal extends Vue {}
</script>

<style lang="scss">
.give-car-modal {
  width: 100%;
  max-width: 850px;
  margin: 0 30px;
  @include xs {
    margin: 0 5px;
  }
  .modal-header {
    margin-bottom: 3rem;
    display: flex;
    @include md {
      flex-direction: column;
    }
  }
  &__search {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    width: 100%;
    @include md {
      margin-top: 10px;
      margin-right: 0;
      margin-left: 0;
    }
  }
}
</style>