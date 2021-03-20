<template>
  <div class="driver-add-driver-form">
    <h3 class="text-center mb-20">Выберите агрегатор</h3>
    <register-driver-form
      ref="driverForm"
      :agregators="agregators"
      @update:agregators="$emit('update:agregators', $event)"
      @submit="onSubmit"
    />
  </div>
</template>

<script lang="ts">
import RegisterDriverForm from "../Register/RegisterDriver/RegisterDriverForm.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";

@Component({
  components: { RegisterDriverForm },
  setup(props, { emit }) {
    const driverForm = ref(null);
    const submit = async () => {
      await driverForm.value.submit();
    };
    const onSubmit = (values: any) => {
      emit("submit", values);
    };
    return { driverForm, submit, onSubmit };
  },
})
export default class DriverAddDriverForm extends Vue {
  @Prop({ type: Array, default: () => [] }) agregators: string[];
}
</script>

<style lang="scss">
.driver-add-driver-form {
  .register-driver-agregators {
    justify-content: center;
  }
}
</style>