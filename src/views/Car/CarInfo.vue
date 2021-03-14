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
      <car-info-data />
      <car-info-tracker />
      <car-info-tech />
      <car-info-fines />
      <car-info-photo />
      <car-info-lists />
      <car-info-payoff />
    </div>
  </div>
</template>

<script lang="ts">
import CarInfoPayoff from '../../components/Car/CarInfo/CarInfoPayoff.vue'
import CarInfoLists from '../../components/Car/CarInfo/CarInfoLists.vue'
import CarInfoPhoto from '../../components/Car/CarInfo/CarInfoPhoto.vue'
import CarInfoFines from '../../components/Car/CarInfo/CarInfoFines.vue'
import CarInfoTech from '../../components/Car/CarInfo/CarInfoTech.vue'
import CarInfoTracker from "../../components/Car/CarInfo/CarInfoTracker.vue";
import CarInfoData from "../../components/Car/CarInfo/CarInfoData.vue";
import CarInfoItems from "../../components/Car/CarInfo/CarInfoItems.vue";
import TitleBack from "../../components/Register/TitleBack.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import useRouter from "@/compositions/useRouter";

@Component({
  metaInfo() {
    return {
      title: "Данные по автомобилю " +  this.$route.params.id
    }
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    const endRent = () => {
      return;
    };
    const attachDriver = () => {
      return;
    };
    return {
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
    CarInfoTracker, CarInfoTech, CarInfoFines, CarInfoPhoto, CarInfoLists, CarInfoPayoff
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