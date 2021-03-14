<template>
  <div class="car-add-form">
    <form action="#" @submit.prevent="onSubmit">
      <form-schema :schema="schema" class="row"></form-schema>
      <div class="d-flex justify-content-center">
        <app-button color="orange-grad" class="mt-30">Добавить автомобиль</app-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import FormSchema from "../../FormSchema/FormSchema.vue";
import { Component, Vue } from "vue-property-decorator";
import { schema } from "./add-car-schema";
import { fields } from "./add-car-fields";

import useForm from "@/compositions/validators/useForm";
@Component({
  components: { FormSchema },
  setup() {
    const { handleSubmit, serialize } = useForm({
      fields: fields,
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);
    });
    return {
      onSubmit,
      schema,
    };
  },
})
export default class CarAddForm extends Vue {}
</script>

<style lang="scss">
.car-add-form {
  max-width: 940px;
  margin: 0 auto;
  .app-image-upload {
    svg {
      color: #6979f8;
    }
  }
}
</style>