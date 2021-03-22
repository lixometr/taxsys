<template>
  <div class="driver-list-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
      contentClass="font-sm color-grey-3"
    >
      <template v-slot:header>
        <app-accardion-col :class="responsiveHeader">{{
          item.id
        }}</app-accardion-col>
        <app-accardion-col :class="responsiveHeader" class="color-grey-3">{{
          item.created_at | dateTime
        }}</app-accardion-col>
        <app-accardion-col :class="responsiveHeader"
          >{{ item.name }} {{ item.middle_name }}
          {{ item.last_name }}</app-accardion-col
        >
        <app-accardion-col
          :class="responsiveHeader"
          class="d-flex justify-content-start justify-content-xl-end"
          ><div class="car-number">
            <div class="car-number-num">{{ car.GosNomer }}</div>
          </div></app-accardion-col
        >
        <app-accardion-col
          :class="responsiveHeader"
          class="d-flex justify-content-start justify-content-xl-end"
        >
          <div class="color-grey-2">{{ city }}</div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <div
            class="d-flex justify-content-start w-100 justify-content-xl-end"
          >
            <div
              v-for="(agregator, idx) in activeAgregators"
              :key="idx"
              class="mr-5"
            >
              <app-icon
                class="driver-list-item__agregator-icon icon-rounded-shadow"
                :src="agregator.icon"
                width="25"
              />
            </div>
          </div>
        </app-accardion-col>
      </template>
      <template #default>
        <app-accardion-col class="col-12" v-if="showAgregators">
          <div class="row">
            <div class="col-xl-4">
              <driver-list-item-agregator
                class="driver-list-item__agregator"
                :agregator="'yandex'"
                :active="!!item.YandexDriver"
                :price="item.YandexBalans"
                :driverId="item.id"
                @refresh="refresh"
              />
            </div>
            <div class="col-xl-4">
              <driver-list-item-agregator
                class="driver-list-item__agregator"
                :agregator="'gett'"
                :active="!!item.GettDriver"
                :driverId="item.id"
                @refresh="refresh"
              />
            </div>
            <div class="col-xl-4">
              <driver-list-item-agregator
                class="driver-list-item__agregator"
                :agregator="'citymobil'"
                :active="!!item.CityMobilDriver"
                :driverId="item.id"
                @refresh="refresh"
              />
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div>
            <div class="color-grey-3 row mb-15 font-600">
              <div class="col">Данные водителя</div>
            </div>
            <div class="row mb-15" v-for="(item, idx) in driverData" :key="idx">
              <div class="col color-grey-3">{{ item.name }}</div>
              <div class="col color-grey-2">{{ item.value }}</div>
            </div>
            <div class="row" v-if="item.IssuedBy">
              <div class="col color-grey-3">Кем выдан:</div>
            </div>
            <div class="row mt-10">
              <div class="col color-grey-2 text-uppercase">
                {{ item.IssuedBy }}
              </div>
            </div>
          </div>
          <div>
            <app-select
              class="mt-30 mb-10 driver-list-item__select"
              :searchable="false"
              variant="border"
              placeholder="Группа выплат"
              :options="paymentGroups || []"
              v-model="paymentGroup"
            />
            <app-select
              class="driver-list-item__select"
              :searchable="false"
              variant="border"
              placeholder="Антифрод"
              :options="antifrauds || []"
              v-model="antifrod"
              selectLabel="name"
              :reduce="(item) => item.name"
            />
          </div>
        </app-accardion-col>

        <app-accardion-col :class="responsiveContent">
          <div class="mb-20">
            <div class="color-grey-3 row mb-15 font-600">
              <div class="col">Данные авто</div>
            </div>
            <div class="row mb-15" v-for="(item, idx) in carData" :key="idx">
              <div class="col color-grey-3">{{ item.name }}</div>
              <div class="col color-grey-2">{{ item.value }}</div>
            </div>
          </div>
          <div>
            <driver-list-cards
              @removedCard="refresh"
              @addedCard="refresh"
              @setDefault="refresh"
              :driverId="item.id"
              v-model="cards"
            />
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <preview-image
              :src="image.image"
              :icon="image.icon"
              class="driver-list-item__image-preview"
              v-for="(image, idx) in images"
              :key="idx"
            />
          </div>
          <div>
            <div class="color-grey-3 mb-15 font-600">Оферта</div>
            <div class="mb-30">
              <a class="color-violet" href="#">Оферта информационных услуг</a>
            </div>
            <div>
              <app-button
                class="driver-list-item__check-driver"
                color="purple-grad"
                @click="checkDriver"
                >проверить водителя</app-button
              >
            </div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import PreviewImage from "../PreviewImage.vue";
import DriverListCards from "./DriverListCards.vue";
import AppSelect from "../AppSelect.vue";
import DriverListItemAgregator from "../DriverAgregator.vue";
import AppIcon from "../AppIcon.vue";
import { AgregatorType, AgregName } from "@/types/agregator.enum";
import { PaymentType, PaymentName } from "@/types/payment-type.enum";
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed, ref, watch } from "@vue/composition-api";
import svgDriverLicense from "@/assets/icons/driver_license.svg";
import useMoment from "@/compositions/useMoments";
@Component({
  components: {
    AppIcon,
    DriverListItemAgregator,
    AppSelect,
    DriverListCards,
    svgDriverLicense,
    PreviewImage,
  },
  setup(props, { emit }) {
    const paymentGroup = ref("");

    const antifrod = ref("");
    const checkDriver = () => {
      return;
    };

    const refresh = () => {
      emit("refresh");
    };
    return {
      refresh,

      AgregatorType,
      PaymentType,
      PaymentName,
      paymentGroup,
      antifrod,
      svgDriverLicense,
      checkDriver,
    };
  },
})
export default class DriverListItem extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: any;
  @Prop(Boolean) showAgregators: boolean;
  @Prop({ type: Array, default: () => [] }) antifrauds: any;
  @Prop({ type: Array, default: () => [] }) paymentGroups: any;
  get responsiveHeader() {
    return "col-sm-6 col-md-4 col-xl-2";
  }
  get responsiveContent() {
    return "col-12 col-xl-4";
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
  get cards() {
    return this.item.cards || [];
  }
  get images() {
    return [
      {
        image: require("@/assets/img/login_image.jpg"),
        icon: svgDriverLicense,
      },
      {
        image: require("@/assets/img/login_image.jpg"),
        icon: svgDriverLicense,
      },
      {
        image: require("@/assets/img/login_image.jpg"),
        icon: svgDriverLicense,
      },
      {
        image: require("@/assets/img/login_image.jpg"),
        icon: svgDriverLicense,
      },
      {
        image: require("@/assets/img/login_image.jpg"),
        icon: svgDriverLicense,
      },
      {
        image: require("@/assets/img/login_image.jpg"),
        icon: svgDriverLicense,
      },
    ];
  }
  get car() {
    return this.item.car || {};
  }
  get city() {
    return this.item.user?.city;
  }
  get carData() {
    const fields = [
      {
        name: "Марка/модель:",
        value: `${this.car.Brand}  ${this.car.Model}`,
      },
      {
        name: "Цвет:",
        value: this.car.Color,
      },
      {
        name: "Год:",
        value: this.car.Year,
      },
      {
        name: "VIN:",
        value: this.car.Vin,
      },
      {
        name: "СТС серия/номер:",
        value: this.car.STS,
      },
      {
        name: "Gett ID:",
        value: this.item.GettId,
      },
    ];
    return fields.filter(
      (field) => !!field.value && field.value !== "Invalid date"
    );
  }
  get driverData() {
    const fields = [
      {
        name: "Телефон:",
        value: this.item.user?.Phone,
      },
      {
        name: "Страна выдачи:",
        value: this.item.IssuingCountry,
      },
      {
        name: "Серия/номер В.У.:",
        value: this.item.SerialDriverLicense,
      },

      {
        name: "Стаж вождения:",
        value: useMoment(this.item.DrivingExperience).format("DD.MM.YYYY"),
      },
      {
        name: "Дата выдачи В.У.:",
        value: useMoment(this.item.DateDriverLicense).format("DD.MM.YYYY"),
      },
      {
        name: "Срок действия В.У.:",
        value: useMoment(this.item.DateValidityDriverLicense).format(
          "DD.MM.YYYY"
        ),
      },
      {
        name: "Дата прохождения обучения",
        value: useMoment(this.item.DateTraining).format("DD.MM.YYYY"),
      },
      {
        name: "Город:",
        value: this.city,
      },
      {
        name: "Дата рождения:",
        value: useMoment(this.item.DateOfBirth).format("DD.MM.YYYY"),
      },

      {
        name: "Серия/номер паспорта:",
        value: this.item.NumberOfPassport,
      },

      {
        name: "Дата выдачи паспорта",
        value: useMoment(this.item.DateIssuePassport).format("DD.MM.YYYY"),
      },
    ];
    return fields.filter(
      (field) => !!field.value && field.value !== "Invalid date"
    );
  }

  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.driver-list-item {
  &__agregator {
    @include lg {
      margin-bottom: 20px;
    }
  }
  &__image-preview {
    margin: 10px;
  }
  &__check-driver {
    font-weight: 400;
  }
  &__agregator-icon {
    margin-right: 15px;
  }
}
</style>