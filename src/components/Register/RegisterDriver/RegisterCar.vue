<template>
  <auth-form class="register-car h-100">
    <template #title>
      <register-title-back
        class="mb-20"
        @back="goBack"
        title="Подключение автомобиля"
      />
    </template>
    <template>
      <register-car-form
        class="flex-1 h-100 flex-layout"
        @submit="onSubmit"
        :agregators="agregators"
      >
        <template #btn>
          <div class="register-car__footer ">
            <div class="register-car__policy">
              <div>Нажимая «Подключиться» вы принимаете</div>
              <div><a href="#">условия публичной оферты</a></div>
            </div>
            <app-button type="submit" color="orange-grad"
              >подключиться</app-button
            >
          </div>
        </template>
      </register-car-form>
    </template>
  </auth-form>
</template>

<script lang="ts">
import RegisterCarForm from "./RegisterCarForm.vue";
import RegisterTitleBack from "../TitleBack.vue";
import AuthForm from "../../Auth/AuthForm.vue";
import AppCheckbox from "../../AppCheckbox.vue";
import AppDatePicker from "../../AppDatePicker.vue";
import FormSchema from "../../FormSchema/FormSchema.vue";
import RegisterDriverAgregators from "./RegisterDriverAgregators.vue";
import { computed, ref, toRefs, watch } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import { baseSchema, schema } from "./register-car-schema";
import useForm from "@/compositions/validators/useForm";
import { fields, baseFields } from "./register-car-fields";
interface IProps {
  agregators: string[];
  [key: string]: any;
}
@Component({
  components: {
    RegisterDriverAgregators,
    FormSchema,

    AppDatePicker,
    AppCheckbox,
    AuthForm,
    RegisterTitleBack,
    RegisterCarForm,
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
export default class RegisterDriverCarForm extends Vue {
  @Prop({ type: Array, default: () => [] }) agregators: string[];
}
</script>

<style lang="scss">
.register-car {
  &__footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include sm {
      flex-direction: column;
    }
  }
  &__form-btn {
    margin-top: auto;
  }
  .form-schema__input {
    margin-bottom: 10px;
  }
  &__policy {
    margin-right: 15px;
    font-size: $fz_xs;
    @include sm {
      margin-right: 0;
      margin-top: 20px;
      order: 2;
      text-align: center;
    }
  }
  .app-image-upload {
    svg {
      color: #6979f8;
    }
  }
}
</style>
