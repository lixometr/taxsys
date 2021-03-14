<template>
  <auth-form class="register-driver-form h-100 scrollbar">
    <template #title>
      <register-title-back
        class="mb-20"
        @back="goBack"
        title="Подключение водителя"
      />
    </template>
    <template #default>
      <register-driver-agregators
        :value="agregators"
        @input="onChangeAgregators"
      />
      <form action="#" class="flex-1 flex-layout" @submit.prevent="onSubmit">
        <form-schema class="row" :schema="formSchema">
          <template v-slot:field-gettid="{ item }">
            <div class="gett-input-checkbox">
              <app-input
                v-model="item.field.value.value"
                v-bind="item.props"
                :errors="item.field.errors.value"
                v-on="item.listeners"
                class="gett-input__input"
              />
              <app-checkbox
                :value="!!item.field.value.value"
                @input="!$event ? (item.field.value.value = '') : null"
              />
            </div>
          </template>
          <template v-slot:field-learning-date="{ item }">
            <div class="gett-input-checkbox">
              <app-date-picker
                v-model="item.field.value.value"
                v-bind="item.props"
                :errors="item.field.errors.value"
                v-on="item.listeners"
                class="gett-input__input"
              />
              <app-checkbox
                :value="!!item.field.value.value"
                @input="!$event ? (item.field.value.value = '') : null"
              />
            </div>
          </template>
        </form-schema>
        <div class="register-driver-form__btn">
          <app-button type="submit" color="orange-grad"
            >Перейти к созданию автомобиля</app-button
          >
        </div>
      </form>
    </template>
  </auth-form>
</template>

<script lang="ts">
import RegisterTitleBack from "../TitleBack.vue";
import AppCheckbox from "../../AppCheckbox.vue";
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
    AppCheckbox,
    AuthForm,
    RegisterTitleBack,
  },
  setup(props: IProps, { emit }) {
    const { agregators } = toRefs<IProps>(props);
    const formSchema = computed(() => {
      let mergedSchema = [...baseSchema];
      agregators.value.map((agregator: string) => {
        mergedSchema = mergedSchema.concat(schema[agregator]);
      });
      mergedSchema = mergedSchema.filter((schemaItem, index) => {
        return (
          mergedSchema.findIndex(
            (fItem) => fItem.field === schemaItem.field
          ) === index
        );
      });

      return mergedSchema;
    });
    const formFields = computed(() => {
      let mergedFields = { ...baseFields };
      agregators.value.map((agregator: string) => {
        mergedFields = Object.assign({}, mergedFields, fields[agregator]);
      });
      return mergedFields;
    });
    let form = useForm({
      fields: formFields.value,
    });
    const onSubmit = () => {
      const exec = form.handleSubmit(() => {
        if (!agregators.value.length) return;
        const toSend = form.serialize();
        console.log(toSend);
        emit("submit", toSend);
        return;
      });
      exec();
    };
    watch(agregators, () => {
      form = useForm({
        fields: formFields.value,
      });
    });
    const goBack = () => {
      emit("back");
    };
    const onChangeAgregators = (newAgregators: string[]) => {
      emit("update:agregators", newAgregators);
    };
    return {  formSchema, onSubmit, goBack, onChangeAgregators };
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
    text-align: right;
  }
  .form-schema__input {
    margin-bottom: 10px;
  }
  .driver-license {
    svg {
      fill: none;
    }
  }
  .gett-input-checkbox {
    position: relative;
    .app-checkbox {
      position: absolute;
      right: 10px;
      top: 14px;
    }
    .gett-input__input {
      input {
        padding-right: 40px;
      }
    }
  }
}
</style>
