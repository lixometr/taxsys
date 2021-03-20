<template>
  <div class="register-car-form">
    <form
      action="#"
      class="flex-1 h-100 flex-layout"
      @submit.prevent="onSubmit"
    >
      <form-schema class="row" :schema="formSchema"> </form-schema>
      <div class="register-car-form__btn">
        <slot name="btn" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
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
    const rename = {};
    let form = useForm({
      fields: formFields.value,
      rename,
    });
    const onSubmit = async () => {
      const exec = form.handleSubmit(() => {
        const toSend = form.serialize();
        emit("submit", toSend);
        return;
      });
     await exec();
    };
    watch(agregators, () => {
      form = useForm({
        fields: formFields.value,
        rename,
      });
    });
    const  submit = async () => {
      await onSubmit();
    };
    return { formSchema, submit, onSubmit };
  },
})
export default class RegisterCarForm extends Vue {
  @Prop({ type: Array, default: () => [] }) agregators: string[];
}
</script>

<style lang="scss">
.register-car-form {
  &__footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include sm {
      flex-direction: column;
    }
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
