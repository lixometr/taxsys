<template>
  <div class="applications-controller__contacts">
    <form action="#" @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-lg-6">
          <app-input label="Сайт" v-model="values.site" :errors="errors.site" />
        </div>
        <div class="col-lg-6">
          <phone-input
            label="+7 800 900-50-50"
            v-model="values.phone"
            :errors="errors.phone"
          />
        </div>
        <div class="col-lg-6">
          <phone-input
            label="WhatsApp"
            v-model="values.whatsapp"
            :errors="errors.whatsapp"
          />
        </div>
        <div class="col-lg-6">
          <phone-input
            label="Viber"
            v-model="values.viber"
            :errors="errors.viber"
          />
        </div>
        <div class="col-lg-6">
          <app-input label="Telegram" v-model="values.tg" :errors="errors.tg" />
        </div>
        <div class="col-lg-6">
          <app-input
            label="Instagram"
            v-model="values.instagram"
            :errors="errors.instagram"
          />
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <app-button type="submit" color="orange-grad">отправить</app-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import PhoneInput from "../../PhoneInput.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
import "yup-phone";
@Component({
  components: { PhoneInput },
  setup() {
    const { values, errors, handleSubmit, serialize } = useForm({
      fields: {
        site: useField("", [yup.string()]),
        phone: useField("", [yup.number().typeError('Введите корректный номер телефона')]),
        whatsapp: useField("", [
          yup.number().typeError('Введите корректный номер телефона'),
        ]),
        viber: useField("", [
          yup.number().typeError('Введите корректный номер телефона'),
        ]),
        tg: useField("", [yup.string()]),
        instagram: useField("", [yup.string()]),
      },
    });
    const onSubmit = handleSubmit(() => {
      serialize();
    });
    return {
      values,
      errors,
      onSubmit,
    };
  },
})
export default class ApplicationsControllerContacts extends Vue {}
</script>

<style lang="scss">
</style>