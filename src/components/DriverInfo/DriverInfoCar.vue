<template>
  <div class="driver-info-car">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
      :showArrow="false"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Данные авто</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col :class="responsiveContent">
          <div class="row mb-15" v-for="(col, idx) in firstCol" :key="idx">
            <div class="color-grey-3 col">{{ col.name }}:</div>
            <div class="color-grey-2 col">{{ col.value }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row mb-15" v-for="(col, idx) in secondCol" :key="idx">
            <div class="color-grey-3 col">{{ col.name }}:</div>
            <div class="color-grey-2 col">{{ col.value }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="mb-20 d-flex flex-wrap">
            <div class="mr-15" v-for="(image, idx) in images" :key="idx">
              <preview-image :src="image.url" :icon="svgPicture" />
            </div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import PreviewImage from "../PreviewImage.vue";
import AppImage from "../AppImage.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgPicture from "@/assets/icons/driver_license.svg";
import { DriverEntity } from "@/models/driver.entity";
import { Car } from "@/models/car.entity";
@Component({
  components: { AppImage, PreviewImage, svgPicture },
  setup() {
    return { svgPicture };
  },
})
export default class DriverInfoCar extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverEntity;
  get responsiveContent() {
    return "col-xl-4 col-lg-12";
  }
  get images() {
    return this.item.car?.images || [];
  }
  get car() {
    return this.item.car || ({} as Car);
  }
  get firstCol() {
    const items = [
      {
        name: "Марка/модель",
        value: `${this.car.Model} ${this.car.Brand} `,
      },
      {
        name: "Цвет",
        value: this.car.Color,
      },
      {
        name: "Год",
        value: this.car.Year,
      },
    ];
    return items.filter((item) => !!item.value);
  }
  get secondCol() {
    const items = [
      {
        name: "VIN",
        value: this.car.Vin,
      },
      {
        name: "СТС серия/номер",
        value: this.car.STS,
      },
      // {
      //   name: "Gett ID"
      // },
    ];
    return items.filter((item) => !!item.value);
  }
}
</script>

<style lang="scss">
</style>
