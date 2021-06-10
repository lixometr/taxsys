<template>
  <div class="give-car-form">
    <form action="#" @submit.prevent="onSubmit">
      <app-button
        type="button"
        color="bold-purple"
        :stroke="true"
        @click="toggleDriver"
      >
        <span v-if="!showDriverRegister">
          Добавить водителя
          <svgPlus width="20" class="ml-10" />
        </span>
        <span v-else> скрыть </span>
      </app-button>
      <give-car-form-driver-choose  v-if="!showDriverRegister" v-model="chosenDriverId" :items="drivers" />
      <give-car-form-driver-register
        @submit="onRegisterSubmit"
        ref="driverRegister"
        v-else
      />
      <div class="d-flex justify-content-center">
        <app-button
          class="give-car-form__btn mt-10"
          type="submit"
          color="orange-grad"
          >Выдать</app-button
        >
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import GiveCarFormDriverRegister from "./GiveCarFormDriverRegister.vue";
import GiveCarFormDriverChoose from "./GiveCarFormDriverChoose.vue";
import AppCheckboxInput from "../AppCheckboxInput.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ref, toRefs } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useToast from "@/compositions/useToast";
import { DriverEntity } from "@/models/driver.entity";
import { useApiCarChangeDriver } from "@/api/car";
import { errorHandler } from "@/helpers/error-handler";
import { useApiDriverAdd } from "@/api/driver-add";
import { RegisterDriverDto } from "@/dto/register-driver.dto";
import { plainToClass } from "class-transformer";
interface IProps {
  [key: string]: any;
  carId: number;
}
@Component({
  components: {
    AppCheckboxInput,
    svgPlus,
    GiveCarFormDriverChoose,
    GiveCarFormDriverRegister,
  },
  setup(props: IProps, { emit }) {
    const { carId } = toRefs<IProps>(props);
    const driverRegister = ref(null);
    const showDriverRegister = ref(false);
    const chosenDriverId = ref(null);
    const driverRegisterValues = ref({});

    const toggleDriver = () => {
      showDriverRegister.value = !showDriverRegister.value;
    };
    const attachDriver = async (driverId: number) => {
      const { exec, error, result } = useApiCarChangeDriver({
        toast: {
          error: errorHandler(),
          success: () => "Запрос на выдачу авто успешно добавлен!",
        },
      });
      await exec({ id: carId.value, driverId });
      if (error.value) return;
      emit("send");
    };
    const createDriver = async () => {
      const { exec, error, result } = useApiDriverAdd({
        toast: {
          error: errorHandler(),
          success: () => "Машина успешно выдана!"
        },
      });
      const toCreate = {...driverRegisterValues.value, car_id: carId.value}
      const driverDto = plainToClass(
        RegisterDriverDto,
        toCreate
      );
      await exec(driverDto);
      if(error.value) return
      emit('send')
    };
    const onRegisterSubmit = async (values: any) => {
      driverRegisterValues.value = values;
      await createDriver();
      return;
    };
    const onSubmit = async () => {
      if (showDriverRegister.value) {
        await driverRegister.value.submit();
      } else {
        if (chosenDriverId.value === null) {
          const { error } = useToast();
          error({ message: "Выберите водителя" });
          return;
        }
        await attachDriver(chosenDriverId.value);
        return;
      }
    };

    return {
      chosenDriverId,
      showDriverRegister,
      onSubmit,
      driverRegister,
      onRegisterSubmit,

      toggleDriver,
    };
  },
})
export default class GiveCarForm extends Vue {
  @Prop({ type: Array, default: () => [] }) drivers: DriverEntity[];
  @Prop(Number) carId: number;
}
</script>

<style lang="scss">
.give-car-form {
  &__btn {
    padding: 1rem 6rem;
  }
}
</style>
