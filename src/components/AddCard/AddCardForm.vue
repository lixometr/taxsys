<template>
  <div class="add-card-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-input
        label="Номер карты"
        v-model="values.number"
        :errors="errors.number"
        class=""
      />
      <app-checkbox-input
        label="Сделать картой по умолчанию"
        v-model="values.isDefault"
        :errors="errors.isDefault"
        shape="rect"
      />
      <div class="d-flex justify-content-center">
        <app-button
          class="add-card-form__btn mt-10"
          type="submit"
          color="orange-grad"
          >Выполнить</app-button
        >
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import AppCheckboxInput from "../AppCheckboxInput.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
@Component({
  components: { AppCheckboxInput },
  setup(props, { emit }) {
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        number: useField("", [yup.number().required()]),
        isDefault: useField(false, [yup.boolean().required()]),
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);

      emit('send')
    });
    return {
      onSubmit,
      values,
      errors,
    };
  },
})
export default class AddCardForm extends Vue {}
</script>

<style lang="scss">
.add-card-form {
  &__btn {
    padding: 1rem 6rem;
  }
}
</style>
