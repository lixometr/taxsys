<template>
  <div class="applications-controller__wish-form">
    <form action="#" @submit.prevent>
      <app-text-area
        label="Ваши пожелания"
        :inputAttrs="{ rows: '3' }"
        v-model="values.text"
        :errors="errors.text"
      />
      <!-- <div class="d-flex justify-content-end">
        <app-button color="orange-grad" type="submit">отправить</app-button>
      </div> -->
    </form>
  </div>
</template>

<script lang="ts">
import AppTextArea from "../../AppTextArea.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Prop, Vue } from "vue-property-decorator";
import * as yup from "yup";
import { toRefs, watch } from "@vue/composition-api";

interface IProps {
  [key: string]: any;
  value: string;
}
@Component({
  components: { AppTextArea },
  setup(props: IProps, { emit }) {
    const { value } = toRefs<IProps>(props);
    const { handleSubmit, values, errors, validate } = useForm({
      fields: {
        text: useField(value.value, [yup.string().optional().nullable()]),
      },
    });
    const submit = async () => {
      return await validate();
    };
    watch(values, () => {
      emit("input", values.text);
    });
    return {
      submit,
      values,
      errors,
    };
  },
})
export default class ApplicationsControllerWishForm extends Vue {
  @Prop({ type: String }) value: string;
}
</script>

<style lang="scss">
.applications-controller__wish-form {
  .btn {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  }
}
</style>