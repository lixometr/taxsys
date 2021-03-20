<template>
  <div class="register-park-form flex-layout h-100">
    <form action="#" class="flex-1 flex-layout" @submit.prevent="onSubmit">
      <form-schema class="row" :schema="schema">
        <template v-slot:field-birthday="{ item }">
          <app-date-picker
            v-model="item.field.value.value"
            v-bind="item.props"
            :errors="item.field.errors.value"
            v-on="item.listeners"
          />
        </template>
        <template v-slot:field-city="{ item }">
          <city-select
            v-model="item.field.value.value"
            v-bind="item.props"
            :errors="item.field.errors.value"
            v-on="item.listeners"
          />
        </template>
      </form-schema>
      <div class="register-park-form__footer">
        <a href="#">Согласие на обработку ПД</a>
        <app-button type="submit" color="orange-grad"
          >Подключить парк</app-button
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import CitySelect from "../../CitySelect.vue";
import AppDatePicker from "@/components/AppDatePicker.vue";
import AppSelect from "../../AppSelect.vue";
import FormSchema from "../../FormSchema/FormSchema.vue";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import { fields } from "./register-park-fields";
import { schema } from "./register-park-schema";
@Component({
  components: { FormSchema, AppSelect, AppDatePicker, CitySelect },
  setup(props, {emit}) {
    const { serialize, values, errors, handleSubmit } = useForm({
      fields,
      rename: {
        middleName: "middle_name",
        lastName: "last_name",
      },
    });
    
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);
      emit('submit', toSend)
    });
    return { onSubmit, values, errors, schema };
  },
})
export default class RegisterParkForm extends Vue {}
</script>

<style lang="scss">
.register-park-form {
  &__footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @include xs {
      flex-direction: column;
      align-items: center;
    }
    .btn {
      @include xs {
        order: -1;
        margin-bottom: 20px;
      }
    }
  }
}
</style>