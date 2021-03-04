<template>
  <div class="approve-phone-code">
    <div class="approve-phone-code__input">
      <app-input
        :errors="errors.code"
        v-model="values.code"
        label="Код из СМС"
      />
    </div>
    <div class="approve-phone-code__btns">
      <div class="approve-phone-code__btn">
        <app-button :stroke="true" color="purple" @click="changeNumber"
          >Изменить номер</app-button
        >
      </div>
      <div class="approve-phone-code__btn">
        <app-button color="orange" @click="accept">Подвердить</app-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";
import useField from "@/compositions/validators/useField";
import * as yup from "yup";
import useForm from "@/compositions/validators/useForm";
@Component({
  setup(props, { emit }) {
    const { values, errors, handleSubmit } = useForm({
      fields: {
        code: useField("", [yup.string()]),
      },
    });
    const changeNumber = () => {
      emit("changeNumber");
    };
    const accept = handleSubmit(() => {
      emit("accept", values.code);
    });
    return { values, errors, changeNumber, accept };
  },
})
export default class ApprovePhoneCode extends Vue {}
</script>

<style lang="scss">
.approve-phone-code {
  &__input {
    margin-bottom: 20px;
  }
  &__btns {
    display: flex;
    justify-content: space-between;
  }
}
</style>