<template>
  <div class="add-card-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-input
        label="Номер карты"
        v-model="values.number"
        :errors="errors.number"
        class=""
      />
      <app-checkbox-input
        label="Сделать картой по умолчанию"
        v-model="values.isDefault"
        :errors="errors.isDefault"
        shape="rect"
      />
      <div class="d-flex justify-content-center">
        <app-button
          class="add-card-form__btn mt-10"
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
import { Component, Prop, Vue } from "vue-property-decorator";
import * as yup from "yup";
import { useApiDriverAddCard } from "@/api/driver";
import { toRefs } from "@vue/composition-api";
import { errorHandler } from "@/helpers/error-handler";
interface IProps {
  [key: string]: any;
  driverId: number;
}
@Component({
  components: { AppCheckboxInput },
  setup(props: IProps, { emit }) {
    const { driverId } = toRefs<IProps>(props);
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        number: useField("", [yup.string().matches(/^[0-9]+$/, "Введите корректное значение").length(16).required()]),
        isDefault: useField(false, [yup.boolean().required()]),
      },
      rename: {
        isDefault: "def",
      },
    });
    const { exec: addCard, error, result } = useApiDriverAddCard({
      toast: { error: errorHandler(), success: () => 'Карта успешно добавлена!' },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      await addCard({ ...toSend, id: driverId.value });
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
export default class AddCardForm extends Vue {
  @Prop([String, Number]) driverId: string;
}
</script>

<style lang="scss">
.add-card-form {
  &__btn {
    padding: 1rem 6rem;
  }
}
</style>
