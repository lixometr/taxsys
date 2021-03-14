<template>
  <div class="car-info-tracker-form">
    <form class="row w-100" action="#" @submit.prevent="onSubmit">
      <div class="col-lg-4">
        <app-input
          label="Сообщение для блокировки"
          v-model="values.messageBlock"
          :errors="errors.messageBlock"
          class=""
        />
      </div>
      <div class="col-lg-4">
        <app-input
          label="Сообщение для блокировки"
          v-model="values.messageBlock"
          :errors="errors.messageBlock"
          class=""
        />
      </div>
      <div class="col-lg-4">
        <app-input
          label="Сообщение для разблокировки"
          v-model="values.messageUnBlock"
          :errors="errors.messageUnBlock"
          class=""
        />
      </div>
      <div class="col-12 d-flex justify-content-center">
          <app-button type="submit" color="orange-grad">Сохранить</app-button>
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
@Component({
  setup(props, { emit }) {
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        messageBlock: useField("", [yup.string().required()]),
        messageUnBlock: useField("", [yup.string().required()]),
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);

      emit("send");
    });
    return {
      onSubmit,
      values,
      errors,
    };
  },
})
export default class CarInfoTrackerForm extends Vue {}
</script>

<style lang="scss">
</style>
