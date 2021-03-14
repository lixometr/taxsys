<template>
  <div class="applications-controller__wish-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-text-area
        label="Ваши пожелания"
        :inputAttrs="{ rows: '3' }"
        v-model="values.text"
        :errors="errors.text"
      />
      <div class="d-flex justify-content-end">
        <app-button color="orange-grad" type="submit">отправить</app-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import AppTextArea from "../../AppTextArea.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
@Component({
  components: { AppTextArea },
  setup() {
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        text: useField("", [yup.string().required()]),
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
    });
    return {
      onSubmit,
      values,
      errors,
    };
  },
})
export default class ApplicationsControllerWishForm extends Vue {}
</script>

<style lang="scss">
.applications-controller__wish-form {
  .btn {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  }
}
</style>