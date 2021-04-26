<template>
  <div class="driver-add-car-form">
    <app-chooser
      class="driver-add-car-form__chooser mb-30"
      :items="carStatuses"
      v-model="carStatus"
    />
    <register-car-form
      ref="carForm"
      :agregators="agregators"
      @update:agregators="$emit('update:agregators', $event)"
      v-if="carStatus === 'new'"
      @submit="onSubmit"
    />
    <driver-add-car-exist-form ref="carFormExist" v-else v-model="carId" />
  </div>
</template>

<script lang="ts">
import DriverAddCarExistForm from "./DriverAddCarExistForm.vue";
import AppChooser from "../AppChooser.vue";
import RegisterCarForm from "../Register/RegisterDriver/RegisterCarForm.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ref, watch } from "@vue/composition-api";

@Component({
  components: { RegisterCarForm, AppChooser, DriverAddCarExistForm },
  setup(props, { emit }) {
    const carStatus = ref("new");
    const carStatuses = [
      {
        name: "Новый",
        value: "new",
      },
      {
        name: "Существующий",
        value: "exist",
      },
    ];
    const carId = ref(null);

    const carForm = ref(null);
    const carFormExist = ref(null);
    const submit = async () => {
      if (carStatus.value === "new") {
        await carForm.value.submit();
      } else {
        emit("submit", { car_id: carId.value });
      }
    };
    const onSubmit = (values: any) => {
      emit("submit", values);
    };
    watch(carId, (newId) => {
      if (carStatus.value !== "new") {
        emit("submit", { car_id: newId });
      }
    });
    watch(carStatus, (newStatus) => {
      emit("update:carStatus", newStatus);
    });
    return {
      carId,
      onSubmit,
      submit,
      carForm,
      carStatus,
      carStatuses,
      carFormExist,
    };
  },
})
export default class DriverAddCarForm extends Vue {
  @Prop({ type: Array, default: () => [] }) agregators: string[];
}
</script>

<style lang="scss">
.driver-add-car-form {
  &__chooser {
    max-width: 700px;
    margin: 0 auto;
  }
}
</style>