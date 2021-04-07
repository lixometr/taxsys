<template>
  <div class="page-car-info car-info flex-layout">
    <page-title :between="true">
      <title-back @back="goBack">
        <template>
          <h2>Данные по автомобилю</h2>
        </template>
      </title-back>
      <div class="car-info__actions">
        <app-button
          :stroke="true"
          color="orange"
          :shadow="true"
          @click="endRent"
          size="sm"
          >Завершить аренду</app-button
        >
        <app-button
          color="orange"
          :shadow="true"
          size="sm"
          @click="attachDriver"
          >Прикрепить водителя</app-button
        >
      </div>
    </page-title>
    <div class="car-info__items">
      <car-info-data :item="car" />
      <car-info-tracker :item="car" />
      <car-info-tech :item="car" @refresh="refreshCar" />
      <car-info-drivers :item="car" />
      <car-info-fines :item="car" @refresh="refreshCar"/>
      <car-info-photo :item="car" @refresh="refreshCar" />
      <car-info-lists :item="car" @refresh="refreshCar"/>
      <car-info-payoff :item="car" @refresh="refreshCar"/>
    </div>
  </div>
</template>

<script lang="ts">
import CarInfoDrivers from "../../components/Car/CarInfo/CarInfoDrivers.vue";
import CarInfoPayoff from "../../components/Car/CarInfo/CarInfoPayoff.vue";
import CarInfoLists from "../../components/Car/CarInfo/CarInfoLists.vue";
import CarInfoPhoto from "../../components/Car/CarInfo/CarInfoPhoto.vue";
import CarInfoFines from "../../components/Car/CarInfo/CarInfoFines.vue";
import CarInfoTech from "../../components/Car/CarInfo/CarInfoTech.vue";
import CarInfoTracker from "../../components/Car/CarInfo/CarInfoTracker.vue";
import CarInfoData from "../../components/Car/CarInfo/CarInfoData.vue";
import CarInfoItems from "../../components/Car/CarInfo/CarInfoItems.vue";
import TitleBack from "../../components/Register/TitleBack.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import useRouter from "@/compositions/useRouter";
import { useApiCarEndRent, useApiGetCarInfo } from "@/api/car";
import { errorHandler } from "@/helpers/error-handler";
import { Ref, ref } from "@vue/composition-api";
import { Car } from "@/models/car.entity";

@Component({
  metaInfo() {
    return {
      title: "Данные по автомобилю " + this.$route.params.id,
    };
  },
  setup() {
    const router = useRouter();
    const car: Ref<Car> = ref(undefined);
    const goBack = () => {
      router.back();
    };
    const endRent = async () => {
      const {exec, error} = useApiCarEndRent({toast: {error: errorHandler(), success: () => "Аренда завершена!"}})
      await exec({id: car.value.id})
      if(error.value) return
      return;
    };
    const attachDriver = () => {
      return;
    };
    const fetchCar = async ({ loading = true } = {}) => {
      const { exec, error, result, isLoading} = useApiGetCarInfo({ loading });
      const paramsId = router.currentRoute.params.id;
      const id = parseInt(paramsId);
      await exec({ id });
      if (error.value) {
        router.push({ name: "Rent" });
      }
      car.value = result.value;
    };
    fetchCar();
    const refreshCar = async () => {
      await fetchCar({ loading: false });
    };
    return {
      refreshCar,
      car,
      fetchCar,
      endRent,
      attachDriver,
      goBack,
    };
  },
  components: {
    PageTitle,
    TitleBack,
    CarInfoItems,
    CarInfoData,
    CarInfoTracker,
    CarInfoTech,
    CarInfoFines,
    CarInfoPhoto,
    CarInfoLists,
    CarInfoPayoff,
    CarInfoDrivers,
  },
})
export default class CarInfo extends Vue {}
</script>

<style lang="scss">
.car-info {
  &__actions {
    display: flex;
    @include md {
      flex-direction: column;
    }
    .btn {
      &:first-child {
        margin-right: 20px;
        @include md {
          margin-right: 0;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>