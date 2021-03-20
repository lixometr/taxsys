<template>
  <auth-form class="register-driver h-100 scrollbar">
    <template #title>
      <register-title-back
        class="mb-20"
        @back="goBack"
        title="Подключение водителя"
      />
    </template>
    <template #default>
      <register-driver-form
        :agregators="agregators"
        @update:agregators="$emit('update:agregators', $event)"
        @submit="onSubmit"
      >
        <template #btn>
          <div class="d-flex justify-content-end">
            <app-button type="submit" color="orange-grad"
              >Перейти к созданию автомобиля</app-button
            >
          </div></template
        ></register-driver-form
      >
    </template>
  </auth-form>
</template>

<script lang="ts">
import RegisterDriverForm from "./RegisterDriverForm.vue";
import RegisterDriverInputs from "./RegisterDriverInputs.vue";
import RegisterTitleBack from "../TitleBack.vue";
import AppDatePicker from "../../AppDatePicker.vue";
import CitySelect from "../../CitySelect.vue";
import AppImageUpload from "../../AppImageUpload.vue";
import FormSchema from "../../FormSchema/FormSchema.vue";
import RegisterDriverAgregators from "./RegisterDriverAgregators.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import AuthForm from "@/components/Auth/AuthForm.vue";
interface IProps {
  agregators: string[];
  [key: string]: any;
}
@Component({
  components: {
    RegisterDriverAgregators,
    FormSchema,

    AppImageUpload,
    CitySelect,
    AppDatePicker,
    AuthForm,
    RegisterTitleBack,
    RegisterDriverInputs,
    RegisterDriverForm,
  },
  setup(props: IProps, { emit }) {
    const onSubmit = (values: any) => {
      emit("submit", values);
    };

    const goBack = () => {
      emit("back");
    };

    return { onSubmit, goBack };
  },
})
export default class RegisterDriver extends Vue {
  @Prop({ type: Array, default: () => [] }) agregators: string[];
}
</script>

<style lang="scss">
.register-driver {
}
</style>
