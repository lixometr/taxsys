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
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { RegisterParkDto } from "@/dto/register-park.dto";
import useRouter from "@/compositions/useRouter";

@Component({
  setup(props, { emit }) {
    const router = useRouter();
    const goBack = () => {
      emit("back");
    };
    const { exec: sendForm, error } = useApiSignupPark({
      toast: {
        error: errorHandler(),
        success: () =>
          "Вы успешно зарегистрированы! Мы выслали вам смс с паролем",
      },
    });
    const onSubmit = async (values: any) => {
      await sendForm(plainToClass(RegisterParkDto, values));
      if (error.value) return;
      setTimeout(() => {
        router.push({ name: "Login" });
      }, 1500);
    };
    return { goBack, onSubmit };
  },
  components: { RegisterParkForm, AuthForm, RegisterTitleBack },
})
export default class RegisterPark extends Vue {}
</script>

<style lang="scss">
</style>