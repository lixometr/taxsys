<template>
  <div class="register-driver-form">
    <register-driver-agregators
      class="mb-20"
      :value="agregators"
      @input="onChangeAgregators"
    />
    <register-driver-inputs
      ref="registerDriverInputs"
      @submit="onSubmit"
      :agregators="agregators"
    >
      <template #btn>
        <slot name="btn" />
      </template>
    </register-driver-inputs>
  </div>
</template>

<script lang="ts">
import RegisterDriverInputs from "./RegisterDriverInputs.vue";
import RegisterTitleBack from "../TitleBack.vue";
import AppDatePicker from "../../AppDatePicker.vue";
import CitySelect from "../../CitySelect.vue";
import AppImageUpload from "../../AppImageUpload.vue";
import FormSchema from "../../FormSchema/FormSchema.vue";
import RegisterDriverAgregators from "./RegisterDriverAgregators.vue";
import { computed, ref, toRefs, watch } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import { baseSchema, schema } from "./register-driver-schema";
import useForm from "@/compositions/validators/useForm";
import { FormSchemaItem } from "@/components/FormSchema/form-schema.type";
import { fields, baseFields } from "./register-driver-fields";
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
  },
  setup(props: IProps, { emit }) {
    const { agregators } = toRefs<IProps>(props);

    const onSubmit = (values) => {
      const toSend = {
        ...values,
        agregators: JSON.stringify(agregators.value),
      };

      emit("submit", toSend);
    };

    const onChangeAgregators = (newAgregators: string[]) => {
      emit("update:agregators", newAgregators);
    };
    const registerDriverInputs = ref(null);
    const submit = async () => {
      return await registerDriverInputs.value.submit();
    };
    return { onSubmit, submit, registerDriverInputs, onChangeAgregators };
  },
})
export default class RegisterDriverForm extends Vue {
  @Prop({ type: Array, default: () => [] }) agregators: string[];
}
</script>

<style lang="scss">
.register-driver-form {
  &__btn {
    margin-top: auto;
  }
  
}
</style>
