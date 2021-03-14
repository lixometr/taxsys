<template>
  <div class="register-park">
    <auth-form>
      <template #title>
        <register-title-back @back="goBack" title="Подключение парка" />
      </template>
      <template>
        <register-park-form class="pt-40" @submit="onSubmit" />
      </template>
    </auth-form>
  </div>
</template>

<script lang="ts">
import RegisterTitleBack from "../TitleBack.vue";
import AuthForm from "../../Auth/AuthForm.vue";
import RegisterParkForm from "./RegisterParkForm.vue";
import { Component, Vue } from "vue-property-decorator";
import { useApiSignupPark } from "@/api/signup";

@Component({
  setup(props, { emit }) {
    const goBack = () => {
      emit("back");
    };
    const { exec: sendForm } = useApiSignupPark({toast: {error: () => 'Где api o_0'}});
    const onSubmit = async (values: any) => {
      await sendForm(values);
      return;
    };
    return { goBack, onSubmit };
  },
  components: { RegisterParkForm, AuthForm, RegisterTitleBack },
})
export default class RegisterPark extends Vue {}
</script>

<style lang="scss">
</style>