<template>
  <div class="profile-notys-form">
    <form action="#" @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-6">
          <app-input
            label="Телефон"
            v-model="values.phone"
            :errors="errors.phone"
          />
        </div>
        <div class="col-md-6">
          <app-input
            label="E-mail"
            v-model="values.email"
            :errors="errors.email"
          />
        </div>
      </div>
      <div class="text-center mt-5">
        <app-button color="orange-grad" type="submit">выполнить</app-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";

@Component({
  setup() {
    const { values, errors, handleSubmit, serialize } = useForm({
      fields: {
        phone: useField("", []),
        email: useField("", []),
      },
    });
    const onSubmit = handleSubmit(() => {
        console.log(serialize())
    });
    return { values, errors, onSubmit };
  },
})
export default class ProfileNotysForm extends Vue {}
</script>

<style lang="scss">
.profile-notys-form {
    padding-top: 3rem;
}
</style>