<template>
  <div class="cd-profile-car">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3 position-relative"
      :isOpen="true"
      :showArrow="false"
    >
      <template #header>
        <app-accardion-col class="col-12">
          <div class="color-purple font-md">Автомобиль</div></app-accardion-col
        >
      </template>
      <template>
        <app-accardion-col class="col-12 pt-0">
          <div class="row cd-profile-car__row">
            <div class="col-lg-4">{{ car.Brand }} {{ car.Model }}</div>
            <div class="col-lg-4 row">
              <div class="col color-grey-3">Год выпуска:</div>
              <div class="col color-grey-2">{{ car.Year }} г.</div>
            </div>
            <div class="col-lg-4 row">
              <div class="col color-grey-3">VIN</div>
              <div class="col color-grey-2">{{ car.Vin }}</div>
            </div>
            <div class="col-lg-4">
              <div class="car-number">
                <div class="car-number-num">{{ car.GosNumber }}</div>
              </div>
            </div>
            <div class="col-lg-4 row">
              <div class="col color-grey-3">Цвет</div>
              <div class="col color-grey-2">{{ car.Color }}</div>
            </div>
            <div class="col-lg-4 row">
              <div class="col color-grey-3">СТС (серия и номер)</div>
              <div class="col color-grey-2">{{ car.STS }}</div>
            </div>
          </div>
        </app-accardion-col>
        <div class="cd-profile-car__edit" @click="editCar">
          <svgEdit width="16" />
        </div>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import CdProfileCards from "./CdProfileCards.vue";
import { Component, Vue } from "vue-property-decorator";
import svgEdit from "@/assets/icons/edit.svg";
import { computed } from "@vue/composition-api";
import { UserModule } from "@/store/modules/user";
import { Car } from "@/models/car.entity";
@Component({
  components: { CdProfileCards, svgEdit },
  setup() {
    const editPhone = () => {
      return;
    };
    const driverLicense = computed(() => {
      // UserModule.user?.city
      return "123";
    });
    const car = computed(() => {
      return UserModule.user?.driver?.car || ({} as Car);
    });
    const editCar = () => {
      return
    }
    return {
      editCar,
      car,
      editPhone,
      driverLicense,
    };
  },
})
export default class CDProfileCommon extends Vue {}
</script>

<style lang="scss">
.cd-profile-car {
  &__row {
    > div {
      margin-bottom: 15px;
    }
  }
  &__edit {
    width: 35px;
    height: 35px;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    right: 0px;
    background: $purple;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>