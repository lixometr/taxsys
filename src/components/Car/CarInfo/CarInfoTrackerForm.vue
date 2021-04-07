<template>
  <div class="car-info-tracker-form">
    <form class="row w-100" action="#" @submit.prevent="onSubmit">
      <div class="col-lg-4">
        <phone-input
          label="Телефон"
          v-model="values.phone"
          :errors="errors.phone"
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
import PhoneInput from "../../PhoneInput.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Prop, Vue } from "vue-property-decorator";
import * as yup from "yup";
import { useApiCarUpdateTracker } from "@/api/car";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { CarTrackerDto } from "@/dto/car-tracker.dto";
import { toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  id: number;
  phone: string
  messageBlock: string
  messageUnBlock: string
}
@Component({
  components: { PhoneInput },
  setup(props: IProps, { emit }) {
    const { id, messageBlock, messageUnBlock, phone} = toRefs<IProps>(props);
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        phone: useField(phone.value, [
          yup.number().typeError("Введите корректный номер телефона"),
        ]),
        messageBlock: useField(messageBlock.value, [yup.string().required()]),
        messageUnBlock: useField(messageUnBlock.value, [yup.string().required()]),
      },
      rename: {
        messageBlock: "block_code",
        messageUnBlock: "unblock_code",
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();

      const { exec, error } = useApiCarUpdateTracker({
        toast: { error: errorHandler(), success: () => "Трекер обновлен!"},
      });
      await exec({
        data: plainToClass(CarTrackerDto, toSend),
        id: id.value,
      });
      if (error.value) return;
      emit("send");
    });
    return {
      onSubmit,
      values,
      errors,
    };
  },
})
export default class CarInfoTrackerForm extends Vue {
  @Prop(Number) id: number;
  @Prop(String) phone: string
  @Prop(String) messageBlock: string
  @Prop(String) messageUnBlock: string
}
</script>

<style lang="scss">
</style>
