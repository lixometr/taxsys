<template>
  <div class="give-car-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-button
        type="button"
        color="bold-purple"
        :stroke="true"
        @click="toggleDriver"
      >
        <span v-if="!showDriverRegister">
          Добавить водителя
          <svgPlus width="20" class="ml-10" />
        </span>
        <span v-else> скрыть </span>
      </app-button>
      <give-car-form-driver-choose v-model="chosenDriverId" :items="drivers" />
      <give-car-form-driver-register
        @submit="onRegisterSubmit"
        ref="driverRegister"
        v-if="showDriverRegister"
      />
      <div class="d-flex justify-content-center">
        <app-button
          class="give-car-form__btn mt-10"
          type="submit"
          color="orange-grad"
          >Выдать</app-button
        >
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import GiveCarFormDriverRegister from "./GiveCarFormDriverRegister.vue";
import GiveCarFormDriverChoose from "./GiveCarFormDriverChoose.vue";
import AppCheckboxInput from "../AppCheckboxInput.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useToast from "@/compositions/useToast";
@Component({
  components: {
    AppCheckboxInput,
    svgPlus,
    GiveCarFormDriverChoose,
    GiveCarFormDriverRegister,
  },
  setup(props, { emit }) {
    const drivers = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ];
    const driverRegister = ref(null);
    const showDriverRegister = ref(false);
    const chosenDriverId = ref(null);
    const onRegisterSubmit = () => {
      return;
    };
    const toggleDriver = () => {
      showDriverRegister.value = !showDriverRegister.value;
    };
    const onSubmit = () => {
      if (showDriverRegister.value) {
        driverRegister.value.submit();
      } else {
        if (chosenDriverId.value === null) {
          const { error } = useToast();
          error({ message: "Выберите водителя" });
        }
        return;
      }
    };
    return {
      chosenDriverId,
      showDriverRegister,
      onSubmit,
      driverRegister,
      onRegisterSubmit,
      drivers,
      toggleDriver,
    };
  },
})
export default class GiveCarForm extends Vue {}
</script>

<style lang="scss">
.give-car-form {
  &__btn {
    padding: 1rem 6rem;
  }
}
</style>
