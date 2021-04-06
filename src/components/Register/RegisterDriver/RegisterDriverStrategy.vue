<template>
  <div class="register-driver">
    <register-driver
      @back="goBack"
      @submit="driverFormSubmit"
      :agregators.sync="agregators"
      v-if="step === 1"
    />
    <register-car
      @back="step--"
      @submit="carFormSubmit"
      :agregators="agregators"
      v-if="step === 2"
    />
  </div>
</template>

<script lang="ts">
import RegisterCar from "./RegisterCar.vue";
import RegisterDriver from "./RegisterDriver.vue";
import RegisterTitleBack from "../TitleBack.vue";
import AuthForm from "../../Auth/AuthForm.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";
import { AgregName } from "@/types/agregator.enum";
import { useApiSignupDriver } from "@/api/signup";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { RegisterDriverDto } from "@/dto/register-driver.dto";
import useRouter from "@/compositions/useRouter";
@Component({
  setup(props, { emit }) {
    const router = useRouter();
    const agregators = ref([
      AgregName.gett,
      AgregName.yandex,
      AgregName.citymobil,
    ]);
    const step = ref(2);
    const goBack = () => {
      emit("back");
    };
    const driverValues = ref({});
    const carValues = ref({});
    const driverFormSubmit = (values: any) => {
      driverValues.value = values;
      step.value = 2;
    };
    const { exec: sendForm, result, error } = useApiSignupDriver({
      toast: {
        error: errorHandler(),
        success: () =>
          "Вы успешно зарегистрированы! Мы выслали вам смс с паролем",
      },
    });
    const carFormSubmit = async (values: any) => {
      // step.value = 3;
      carValues.value = values;
      const registerDto = plainToClass(RegisterDriverDto, {
        ...driverValues.value,
        ...carValues.value,
        agregators: agregators.value,
      });
      await sendForm(registerDto);
      if (error.value) return;
      setTimeout(() => {
        router.push({ name: "Login" });
      }, 1500);
    };
    return {
      goBack,
      driverFormSubmit,
      carFormSubmit,
      step,
      agregators,
    };
  },
  components: {
    AuthForm,
    RegisterTitleBack,
    RegisterDriver,
    RegisterCar,
  },
})
export default class RegisterDriverStrategy extends Vue {}
</script>

<style lang="scss">
</style>