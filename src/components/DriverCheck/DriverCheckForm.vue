<template>
  <div class="driver-check-form">
    <form action="#" class="driver-check-form__form" @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-3">
          <app-input
            v-model="form.values.surname"
            label="Фамилия"
            :errors="form.errors.surname"
          />
        </div>
        <div class="col-md-3">
          <app-input
            v-model="form.values.name"
            label="Имя"
            :errors="form.errors.name"
          />
        </div>
        <div class="col-md-3">
          <app-input
            v-model="form.values.lastname"
            label="Отчество"
            :errors="form.errors.lastname"
          />
        </div>
        <div class="col-md-3">
          <v-date-picker v-model="form.values.dateOfBirth">
            <template v-slot="{ inputValue, inputEvents }">
              <app-input
                :value="inputValue"
                label="Дата рождения"
                :errors="form.errors.dateOfBirth"
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <app-input
            v-model="form.values.numberOfPassport"
            label="Серия / номер паспорта"
            :errors="form.errors.numberOfPassport"
          />
        </div>
        <div class="col-md-4">
          <app-input
            v-model="form.values.driverLicense"
            label="Серия / номер В.У."
            :errors="form.errors.driverLicense"
          />
        </div>
        <div class="col-md-4">
          <v-date-picker v-model="form.values.dateDriverLicense">
            <template v-slot="{ inputValue, inputEvents }">
              <app-input
                :value="inputValue"
                :errors="form.errors.dateDriverLicense"
                label="Дата выдачи В.У."
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>
        </div>
      </div>
      <div
        class="flex justify-content-center align-items-center driver-check-form__btn-wrapper"
      >
        <app-button
          type="submit"
          class=""
          color="purple-grad driver-check-form__btn"
          >ПРОВЕРИТЬ</app-button
        >
        <svgInfo class="cursor-pointer" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { useApiDriverCheck } from "@/api/driver";
import useForm from "@/compositions/validators/useForm";
import useField from "@/compositions/validators/useField";
import * as yup from "yup";
import { computed } from "@vue/composition-api";
import svgInfo from "@/assets/icons/info.svg";
@Component({
  setup(props, { emit }) {
    const { exec: sendForm, result, error } = useApiDriverCheck({
      toast: {
        error: (err) => {
          return err.data.message;
        },
        success: (data) => {
          return data.message;
        },
      },
    });
    const form = useForm({
      fields: {
        name: useField("", [yup.string().required()]),
        surname: useField("", [yup.string().required()]),
        lastname: useField("", [yup.string().required()]),
        dateOfBirth: useField("", [yup.date().required()]),
        numberOfPassport: useField("", [yup.string().required()]),
        driverLicense: useField("", [yup.string().required()]),
        dateDriverLicense: useField("", [yup.date().required()]),
      },
      watchAfterSubmit: true,
    });

    const onSubmit = form.handleSubmit(async () => {
      await sendForm(form.serialize());
    });
    return {
      form,
      onSubmit,
    };
  },
  components: {
    svgInfo,
  },
})
export default class DriverCheckFrom extends Vue {}
</script>

<style lang="scss">
.driver-check-form {
  max-width: 800px;
  margin: 0 auto;
  &__btn-wrapper {
    margin-top: 7rem;
    @include sm {
      margin-top: 1rem;
    }
  }
  &__btn {
    margin-right: 10px;
  }
}
</style>