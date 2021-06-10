<template>
  <modal-content class="give-car-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Выдача авто</h2>
      <search-input
        class="give-car-modal__search"
        v-model="searchPhrase"
        @input="onSearch"
      />
    </template>
    <template>
      <give-car-form
        :carId="carId"
        @send="onSend"
        :drivers="drivers"
      />
    </template>
  </modal-content>
</template>

<script lang="ts">
import GiveCarForm from "../Rent/GiveCarForm.vue";
import SearchInput from "../SearchInput.vue";
import AddCardForm from "../AddCard/AddCardForm.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";
import { useApiGetDriverSugestions } from "@/api/driver";
import { errorHandler } from "@/helpers/error-handler";

@Component({
  components: { ModalContent, AddCardForm, SearchInput, GiveCarForm },
  setup(props, { emit }) {
    const searchPhrase = ref("");
    const drivers = ref([]);
    const onSearch = async (search: string) => {
      if (search.length < 2) return;
      const { exec, result, error } = useApiGetDriverSugestions({
        toast: { error: errorHandler() },
      });
      await exec({ search });
      if (error.value) return;
      drivers.value = result.value;
    };
    const onSend = () => {
      emit("send");
      emit("close");
    };
    return {
      drivers,
      searchPhrase,
      onSearch,
      onSend,
    };
  },
})
export default class GiveCarModal extends Vue {
  @Prop(Number) carId: number;
}
</script>

<style lang="scss">
.give-car-modal {
  width: 100%;
  max-width: 900px;
  margin: 0 30px;
  padding: 3.5rem 5rem;
  @include md {
    padding: 2rem;
  }
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