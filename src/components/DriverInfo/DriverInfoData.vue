<template>
  <div class="driver-info-data">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
      :showArrow="false"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Данные водителя</div></app-accardion-col
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
          <div>
            <div class="color-grey-3 mb-10">Кем выдан:</div>
            <div class="color-grey-2 text-uppercase">
              {{ issuedBy }}
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="mb-20 d-flex flex-wrap">
            <div class="mr-15" v-for="(image, idx) in images" :key="idx">
              <preview-image :src="image.url" :icon="svgPicture" />
            </div>
          </div>
          <div class="mb-15">
            <a href="#">Оферта</a>
          </div>
          <div><a href="#">Оферта информационных услуг</a></div>
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
import useMoment from "@/compositions/useMoments";
@Component({
  components: { AppImage, PreviewImage, svgPicture },
  setup() {
    return { svgPicture };
  },
})
export default class DriverInfoData extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverEntity;
  get responsiveContent() {
    return "col-xl-4 col-lg-12";
  }
  get images() {
    return this.item.images || []
  }
  get issuedBy() {
    return this.item.IssuedBy;
  }
  get firstCol() {
    return [
      {
        name: "Телефон",
        value: this.item.user?.Phone,
      },
      {
        name: "Дата выдачи В.У.",
        value: this.item.DateDriverLicense,
      },
      {
        name: "Серия/номер В.У.",
        value: this.item.SerialDriverLicense,
      },
      {
        name: "Срок действия В.У.",
        value: useMoment(this.item.DateDriverLicense).format("DD.MM.YYYY"),
      },
      {
        name: "Серия/номер паспорта",
        value: this.item.NumberOfPassport,
      },
      {
        name: "Дата выдачи паспорта",
        value: useMoment(this.item.DateIssuePasport).format("DD.MM.YYYY"),
      },
    ];
  }
  get city() {
return this.item.user?.city
  }
  get secondCol() {
    return [
      {
        name: "Стаж вождения",
        value: useMoment(this.item.DrivingExperience).format("DD.MM.YYYY"),
      },
      {
        name: "Дата рождения",
        value: useMoment(this.item.DateOfBirth).format("DD.MM.YYYY"),
      },
      {
        name: "Город",
        value: this.city,
      },
      {
        name: "Страна выдачи",
        value: this.item.IssuingCountry,
      },
    ];
  }
}
</script>

<style lang="scss">
</style>
