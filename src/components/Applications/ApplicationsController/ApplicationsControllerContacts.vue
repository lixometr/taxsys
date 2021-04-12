<template>
  <div class="applications-controller__contacts">
    <form action="#" @submit.prevent>
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
          <app-input
            label="Telegram"
            v-model="values.telegram"
            :errors="errors.telegram"
          />
        </div>
        <div class="col-lg-6">
          <app-input
            label="Instagram"
            v-model="values.instagram"
            :errors="errors.instagram"
          />
        </div>
      </div>
      <!-- <div class="d-flex justify-content-end">
        <app-button type="submit" color="orange-grad">отправить</app-button>
      </div> -->
    </form>
  </div>
</template>

<script lang="ts">
import PhoneInput from "../../PhoneInput.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Prop, Vue } from "vue-property-decorator";
import * as yup from "yup";
import "yup-phone";
import { toRefs, watch } from "@vue/composition-api";
interface ContactValue {
  site: string;
  phone: string;
  whatsapp: string;
  viber: string;
  telegram: string;
  instagram: string;
}
interface IProps {
  [key: string]: any;
  value: ContactValue;
}
@Component({
  components: { PhoneInput },
  setup(props: IProps, { emit }) {
    const { value } = toRefs<IProps>(props);
    const { values, errors, validate, serialize, handleSubmit } = useForm({
      fields: {
        site: useField(value.value.site, [yup.string().optional().nullable()]),
        phone: useField(value.value.phone, [
          yup
            .string()
            .test("", "Введите корректный номер телефона", (value) => {
              return !value?.includes("_");
            })
            .nullable()
            .optional(),
        ]),
        whatsapp: useField(value.value.whatsapp, [
          yup
            .string()
            .test("", "Введите корректный номер телефона", (value) => {
              return !value?.includes("_");
            })
            .nullable()
            .optional(),
        ]),
        viber: useField(value.value.viber, [
          yup
            .string()
            .test("", "Введите корректный номер телефона", (value) => {
              return !value?.includes("_");
            })
            .nullable()
            .optional(),
        ]),
        telegram: useField(value.value.telegram, [
          yup.string().nullable().optional(),
        ]),
        instagram: useField(value.value.instagram, [
          yup.string().nullable().optional(),
        ]),
      },
    });
    watch(values, () => {
      emit("input", values);
    });
    const submit = async () => {
      let isValid = false
      await handleSubmit(() => {
        isValid = true
      })();
      return isValid
    };
    return {
      submit,
      values,
      errors,
    };
  },
})
export default class ApplicationsControllerContacts extends Vue {
  @Prop({ type: Object, default: () => ({}) }) value: ContactValue;
}
</script>

<style lang="scss">
</style>