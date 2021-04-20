<template>
  <form action="#" class="flex-1 flex-layout register-driver-inputs" @submit.prevent="onSubmit">
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
      <slot name="btn" />
    </div>
  </form>
</template>

<script lang="ts">
import AppDatePicker from "../../AppDatePicker.vue";
import AppCheckbox from "../../AppCheckbox.vue";
import FormSchema from "../../FormSchema/FormSchema.vue";
import useForm from "@/compositions/validators/useForm";
import { computed, toRefs, watch } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import { fields, baseFields } from "./register-driver-fields";
import { baseSchema, schema } from "./register-driver-schema";

interface IProps {
  agregators: string[];
  [key: string]: any;
}
@Component({
  components: { FormSchema, AppCheckbox, AppDatePicker },
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
    const rename = {
      middleName: "middle_name",
      lastName: "last_name",
    };
    let form = useForm({
      fields: formFields.value,
      rename,
    });
    const onSubmit = async () => {
      const exec = form.handleSubmit(() => {
        if (!agregators.value.length) return;
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
    const submit = async () => {
      await onSubmit();
    };
    return {
      submit,
      onSubmit,
      formSchema,
    };
  },
})
export default class RegisterDriverInput extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  agregators: string[];
}
</script>

<style lang="scss">
.app-image-upload {
  svg {
    color: #6979f8;
  }
}
.register-driver-inputs {
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