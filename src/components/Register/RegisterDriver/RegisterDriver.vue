<template>
  <div class="register-driver">
    <register-driver-form @back="goBack" @submit="driverFormSubmit" :agregators.sync="agregators" v-if="step === 1" />
    <register-driver-car-form @back="step--" @submit="carFormSubmit" :agregators="agregators" v-if="step === 2" />
  </div>
</template>

<script lang="ts">
import RegisterDriverCarForm from "./RegisterDriverCarForm.vue";
import RegisterDriverForm from "./RegisterDriverForm.vue";
import RegisterTitleBack from "../RegisterTitleBack.vue";
import AuthForm from "../../Auth/AuthForm.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";
import { AgregName } from "@/types/agregator.enum";

@Component({
  setup(props, { emit }) {
    const agregators = ref([AgregName.gett, AgregName.yandex, AgregName.citymobil])
    const step = ref(1);
    const goBack = () => {
      emit("back");
    };
    const driverFormSubmit = (values: any) => {
      step.value = 2;
    };
    const carFormSubmit = (values: any) => {
      step.value = 3;
    };
    return {
      goBack,
      driverFormSubmit,
      carFormSubmit,
      step,
      agregators
    };
  },
  components: {
    AuthForm,
    RegisterTitleBack,
    RegisterDriverForm,
    RegisterDriverCarForm,
  },
})
export default class RegisterDriver extends Vue {}
</script>

<style lang="scss">
</style>