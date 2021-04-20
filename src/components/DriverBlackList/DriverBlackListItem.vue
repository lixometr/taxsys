<template>
  <div class="driver-blacklist-item">
    <div class="driver-blacklist-item page-items__item">
      <app-accardion
        class="color-grey-2 mb-15 font-md"
        contentClass="font-sm color-grey-3"
        headerClass="border"
      >
        <template v-slot:header>
          <app-accardion-col :class="responsiveHeader">123</app-accardion-col>
          <app-accardion-col :class="responsiveHeader" class="color-grey-3">{{
            item.created_at | dateTime
          }}</app-accardion-col>
          <app-accardion-col :class="responsiveHeader">{{
            item.fio
          }}</app-accardion-col>
          <app-accardion-col :class="responsiveHeader"
            ><div class="car-number">
              <div class="car-number-num">{{ car.GosNumber }}</div>
            </div></app-accardion-col
          >
          <app-accardion-col :class="responsiveHeader">
            <div class="color-grey-2">{{city}}</div>
          </app-accardion-col>
          <app-accardion-col :class="responsiveHeader">
            <div class="d-flex">
              <div
                v-for="(agregator, idx) in activeAgregators"
                :key="idx"
                class="mr-5"
              >
                <app-icon
                  class="driver-blacklist-item__agregator-icon icon-rounded-shadow"
                  :src="agregator.icon"
                  width="25"
                />
              </div>
            </div>
          </app-accardion-col>
        </template>
        <template #default>
          <app-accardion-col :class="responsiveContent">
            <div class="font-600 color-grey-3 mb-15 row">
              <div class="col">Данные водителя</div>
            </div>
            <div>
              <div
                class="row mb-15"
                v-for="(item, idx) in driverData"
                :key="idx"
              >
                <div class="col color-grey-3">{{ item.name }}</div>
                <div class="col color-grey-2">{{ item.value }}</div>
              </div>
            </div>
          </app-accardion-col>
          <app-accardion-col :class="responsiveContent">
            <div>
              <driver-list-cards :canEdit="false" :value="cards" />
            </div>
            <!-- <div>
              <div class="row">
                <div class="col color-grey-3">MAC адресс:</div>
                <div class="col color-grey-2">0017 ab be 17 1c</div>
              </div>
            </div> -->
          </app-accardion-col>
          <app-accardion-col :class="responsiveContent">
            <div class="font-600 color-grey-3 mb-15 row">
              <div class="col">Данные авто</div>
            </div>
            <div>
              <div class="row mb-15" v-for="(item, idx) in carData" :key="idx">
                <div class="col color-grey-3">{{ item.name }}</div>
                <div class="col color-grey-2">{{ item.value }}</div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col color-grey-3">Причина блокировки:</div>
                <div class="col color-grey-2">{{ cause }}</div>
              </div>
            </div>
          </app-accardion-col>
        </template>
      </app-accardion>
    </div>
  </div>
</template>

<script lang="ts">
import DriverListCards from "../DriverList/DriverListCards.vue";
import { AgregatorType, AgregName } from "@/types/agregator.enum";
import { computed, ref } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DriverEntity } from "@/models/driver.entity";
import { UserModule } from "@/store/modules/user";
import useMoment from "@/compositions/useMoments";

@Component({
  components: { DriverListCards },
  setup() {
  
    const paymentGroup = ref("");

    const antifrod = ref("");

    const checkDriver = () => {
      return;
    };
    return {
      AgregatorType,
      paymentGroup,
      antifrod,
      checkDriver,
    };
  },
})
export default class DriverBlackListItem extends Vue {
  @Prop(Object) item: DriverEntity;
  @Prop(Boolean) showAgregators: boolean;
  get responsiveHeader() {
    return "col-sm-6 col-md-4 col-xl-2";
  }
  get responsiveContent() {
    return "col-12 col-xl-4";
  }
  get cards() {
    return this.item?.cards;
  }
  get car() {
    return this.item?.car;
  }
  get cause() {
    return UserModule.user.blacklist_reasons[this.item.is_blacklisted - 1];
  }
  get city() {
    return this.item.user?.city;
  }
    get agregators() {
    return Object.keys(AgregatorType).map((key) => ({
      ...AgregatorType[key],
      key,
    }));
  }
   get activeAgregators() {
    return this.agregators.filter((agreg) => {
      if (agreg.key === AgregName.yandex) {
        return !!this.item.YandexDriver;
      }
      if (agreg.key === AgregName.gett) {
        return !!this.item.GettDriver;
      }
      if (agreg.key === AgregName.citymobil) {
        return !!this.item.CityMobilDriver;
      }
    });
  }
  get driverData() {
    return [
      {
        name: "Телефон:",
        value: this.item.user?.Phone,
      },
      {
        name: "Серия/номер В.У.:",
        value: this.item.SerialDriverLicense,
      },
      {
        name: "Город:",
        value: this.city
      },
      {
        name: "Дата рождения:",
        value: useMoment(this.item.DateOfBirth).format("DD.MM.YYYY"),
      },
      {
        name: "Серия/номер паспорта:",
        value: this.item.NumberOfPassport,
      },
    ];
  }
  get carData() {
    return [
      {
        name: "VIN:",
        value: this.car.Vin,
      },
      {
        name: "СТС серия/номер:",
        value: this.car.STS,
      },
    ];
  }
}
</script>

<style lang="scss">
.driver-blacklist-item {
  &__agregator-icon {
    margin-right: 15px;
  }
}
</style>