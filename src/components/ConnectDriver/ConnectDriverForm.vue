<template>
  <form class="connect-driver-form" @submit.prevent="onSubmit">
    <div class="d-flex justify-content-center w-100 mb-15">
      <register-driver-agregator :item="agregatorItem" :value="true" />
    </div>
    <form-schema class="row" :schema="fSchema">
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
    <div class="text-center">
      <app-button color="orange-grad" type="submit">отправить</app-button>
    </div>
  </form>
</template>

<script lang="ts">
import RegisterDriverAgregator from "../Register/RegisterDriver/RegisterDriverAgregator.vue";
import RegisterDriverAgregators from "../Register/RegisterDriver/RegisterDriverAgregators.vue";
import AppCheckbox from "../AppCheckbox.vue";
import FormSchema from "../FormSchema/FormSchema.vue";
import AppDatePicker from "../AppDatePicker.vue";
import RegisterDriverInputs from "../Register/RegisterDriver/RegisterDriverInputs.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { schema } from "@/components/Register/RegisterDriver/register-driver-schema";
import { AgregatorType, AgregName } from "@/types/agregator.enum";
import { computed, ref, toRefs } from "@vue/composition-api";
import useForm from "@/compositions/validators/useForm";
import { fields } from "../Register/RegisterDriver/register-driver-fields";
import * as _ from "lodash";
import { DriverEntity } from "@/models/driver.entity";
import { useApiDriverAddAgregator, useApiGetDriverInfo } from "@/api/driver";
import { errorHandler } from "@/helpers/error-handler";
interface IProps {
  [key: string]: any;
  agregator: AgregName;
  id: number;
}
@Component({
  components: {
    RegisterDriverInputs,
    AppDatePicker,
    FormSchema,
    AppCheckbox,
    RegisterDriverAgregators,
    RegisterDriverAgregator,
  },
  setup(props: IProps, { emit }) {
    const { agregator, id } = toRefs(props);
    const normSchema = {
      [AgregName.gett]: [
        {
          class: "col-lg-12",
        },
      ],
    };
    const driver = ref({} as DriverEntity);
    const fetchDriver = async () => {
      const { result, error, exec } = useApiGetDriverInfo();
      await exec({ id: id.value });
      if (error.value) return;
      driver.value = result.value;
    };
    fetchDriver();
    const fSchema = computed(() => {
      let mergedSchema = schema[agregator.value];
      const currentNormSchema = normSchema[agregator.value];
      mergedSchema = _.merge(mergedSchema, currentNormSchema);
      //   mergedSchema = mergedSchema.filter(item => !!item)
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
      return fields[agregator.value];
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
      const exec = form.handleSubmit(async () => {
        const toSend = form.serialize();
        console.log(toSend);
        const { exec, error } = useApiDriverAddAgregator({
          toast: {
            error: errorHandler(),
            success: () => "Агрегатор успешно добавлен!",
          },
        });
        await exec({
          id: id.value,
          agregator: agregator.value,
          values: toSend,
        });
        return;
      });
      await exec();
    };
    const agregatorItem = computed(() => {
      return AgregatorType[agregator.value];
    });
    return {
      agregatorItem,
      onSubmit,
      fSchema,
    };
  },
})
export default class ConnectDriverForm extends Vue {
  @Prop(String) agregator: AgregName;
  @Prop(Number) id: number;
}
</script>

<style lang="scss">
.connect-driver-form {
  &__agregators {
    justify-content: center;
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
