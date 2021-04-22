<template>
  <div class="page-add-driver flex-layout flex-1">
    <page-title class="mb-30">
      <title-back @back="onBack">
        <h2>Добавить водителя</h2>
      </title-back>
    </page-title>
    <div class="app-card flex-1">
      <div class="page-add-driver__form-wrapper">
        <driver-add-driver-form
          ref="driverForm"
          class="page-add-driver__driver-form"
          :agregators.sync="agregators"
          @submit="onDriverSubmit"
        />
        <driver-add-car-form
          ref="carForm"
          class="page-add-driver__car-form"
          :agregators="agregators"
          @submit="onCarSubmit"
          :carStatus.sync="carStatus"
        />
        <div class="d-flex justify-content-center mt-40">
          <app-button color="orange-grad" @click="submit">Добавить</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TitleBack from "@/components/Register/TitleBack.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import DriverAddCarForm from "@/components/DriverAdd/DriverAddCarForm.vue";
import DriverAddDriverForm from "@/components/DriverAdd/DriverAddDriverForm.vue";
import RegisterDriverForm from "@/components/Register/RegisterDriver/RegisterDriverForm.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref, nextTick } from "@vue/composition-api";
import { AgregName } from "@/types/agregator.enum";
import useRouter from "@/compositions/useRouter";
import { classToPlain, plainToClass } from "class-transformer";
import { RegisterDriverDto } from "@/dto/register-driver.dto";
import { useApiDriverAdd } from "@/api/driver-add";
import { errorHandler } from "@/helpers/error-handler";
@Component({
  metaInfo: {
    title: "Добавить водителя",
  },
  setup() {
    const router = useRouter();

    const driverForm = ref(null);
    const carForm = ref(null);
    const agregators = ref([]);
    const carStatus = ref("new");
    const driverValues = ref(undefined);
    const carValues = ref(undefined);
    const onDriverSubmit = (values: any) => {
      driverValues.value = values;
    };
    const onCarSubmit = (values: any) => {
      carValues.value = values;
    };
    const { exec, error, result } = useApiDriverAdd({
      toast: {
        error: errorHandler(),
        success: () => "Водитель успешно добавлен",
      },
    });
    const submit = async () => {
      driverValues.value = undefined;
      carValues.value = undefined;
      await driverForm.value.submit();
      await carForm.value.submit();

      if (!driverValues.value || !carValues.value) {
        console.log("no val", driverValues.value, carValues.value);
        return;
      }
      let toSend = {};
      if (carStatus.value === "new") {
        toSend = {
          ...driverValues.value,
          ...carValues.value,
          agregators: agregators.value,
        };
      } else {
        toSend = {
          ...driverValues.value,
          car_id: carValues.value,
          agregators: agregators.value,
        };
      }

      const driverDto = plainToClass(RegisterDriverDto, toSend);
      await exec(driverDto);
      if (error.value) return;
      router.push({ name: "DriverList" });
    };
    const onBack = () => {
      router.back();
    };
    return {
      carStatus,
      onDriverSubmit,
      onCarSubmit,
      onBack,
      submit,
      agregators,
      driverForm,
      carForm,
    };
  },
  components: {
    RegisterDriverForm,
    DriverAddDriverForm,
    DriverAddCarForm,
    PageTitle,
    TitleBack,
  },
})
export default class AddDriver extends Vue {}
</script>

<style lang="scss">
.page-add-driver {
  padding: 3rem 0;
  &__form-wrapper {
    max-width: 950px;
    margin: 0 auto;
  }
  &__driver-form {
    margin-bottom: 50px;
  }
}
</style>