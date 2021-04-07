<template>
  <div class="add-car-record-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-date-picker
        label="Дата проведения"
        v-model="values.date"
        :errors="errors.date"
        class="mb-10"
      />
      <app-input
        label="Пробег"
        v-model="values.run"
        :errors="errors.run"
        class="mb-10"
      />
      <app-input
        label="Проведённые работы"
        v-model="values.works"
        :errors="errors.works"
        class="mb-10"
      />

      <div class="d-flex justify-content-center">
        <app-button
          class="add-car-record-form__btn mt-10"
          type="submit"
          color="orange-grad"
          >Выполнить</app-button
        >
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import AppDatePicker from "../AppDatePicker.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Prop, Vue } from "vue-property-decorator";
import * as yup from "yup";
import { useApiCarAddInspection } from "@/api/car";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { AddCarRecordDto } from "@/dto/add-car-record.dto";
import { toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  id: number;
}
@Component({
  components: { AppDatePicker },
  setup(props: IProps, { emit }) {
    const { id } = toRefs<IProps>(props);
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        date: useField("", [yup.string().required()]),
        run: useField("", [yup.number().required()]),
        works: useField("", [yup.string().required()]),
      },
      rename: {
        run: "mileage",
        works: "note",
        date: "done_at",
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      const { exec, error } = useApiCarAddInspection({
        toast: {
          error: errorHandler(),
          success: () => "Запись успешно добавлена!",
        },
      });
      await exec(
        plainToClass(AddCarRecordDto, { ...toSend, car_id: id.value })
      );
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
export default class AddCarRecordForm extends Vue {
  @Prop(Number) id: number
}
</script>

<style lang="scss">
.add-car-record-form {
  &__btn {
    padding: 1rem 6rem;
  }
}
</style>
