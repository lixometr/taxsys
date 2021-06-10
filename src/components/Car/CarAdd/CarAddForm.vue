<template>
  <div class="car-add-form">
    <form action="#" @submit.prevent="onSubmit">
      <form-schema :schema="schema" class="row"> </form-schema>
      <div class="d-flex justify-content-center">
        <app-button color="orange-grad" type="submit" class="mt-30"
          >Добавить автомобиль</app-button
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import CarAddMarkInput from "./CarAddMarkInput.vue";
import FormSchema from "../../FormSchema/FormSchema.vue";
import { Component, Vue } from "vue-property-decorator";
import { schema } from "./add-car-schema";
import { fields } from "./add-car-fields";

import useForm from "@/compositions/validators/useForm";
import { useApiCreateCar } from "@/api/car";
import { plainToClass } from "class-transformer";
import { CreateCarDto } from "@/dto/car.dto";
import { errorHandler } from "@/helpers/error-handler";
@Component({
  components: { FormSchema, CarAddMarkInput },
  setup(props, {emit}) {
    const { handleSubmit, serialize, errors } = useForm({
      fields: fields,
      rename: {
        ctcNumber: "numberCtc",
        license: "License",
        complect: "Equipment",
        run: "Milleage",
        driverDemand: "DriverRequirements",
        description: "Description",
        deposit: "Deposit",
        rent7_0: "Rent70",
        rent6_1: "Rent61",
        buyout: "Ransom",
      },
    });
    const { exec, error } = useApiCreateCar({
      toast: {
        error: errorHandler(),
        success: () => "Автомобиль успешно создан!",
      },
    });
    const onSubmit = () => {
      handleSubmit(async () => {
        const toSend = serialize();
        await exec(
          plainToClass(CreateCarDto, { ...toSend, mark: toSend.mark.name })
        );
        if (error.value) return;
        emit('send')
      })();
    };
    return {
      onSubmit,
      schema,
    };
  },
})
export default class CarAddForm extends Vue {}
</script>

<style lang="scss">
.car-add-form {
  max-width: 940px;
  margin: 0 auto;
  .app-image-upload {
    svg {
      color: #6979f8;
    }
  }
}
</style>