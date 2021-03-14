<template>
  <div class="block-car-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-input
        label="Мобильный  номер GPS маяка"
        v-model="values.gps"
        :errors="errors.gps"
        class="mb-15"
      />
      <app-input
        label="Сообщение для блокировки"
        v-model="values.messageBlock"
        :errors="errors.messageBlock"
        class="mb-15"
      />
      <app-input
        label="Сообщение для разблокировки"
        v-model="values.messageUnblock"
        :errors="errors.messageUnblock"
        class="mb-15"
      />
    
      <div class="d-flex justify-content-center">
        <app-button
          class="block-car-form__btn mt-10"
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
        gps: useField("", [yup.string().required()]),
        messageUnblock: useField("", [yup.string().required()]),
        messageBlock: useField("", [yup.string().required()]),
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
export default class BlockCarForm extends Vue {}
</script>

<style lang="scss">
.block-car-form {
  &__btn {
    padding: 1rem 6rem;
  }
}
</style>
