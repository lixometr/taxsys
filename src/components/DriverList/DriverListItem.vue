<template>
  <div class="driver-list-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
      contentClass="font-sm color-grey-3"
    >
      <template v-slot:header>
        <app-accardion-col :class="responsiveHeader">123</app-accardion-col>
        <app-accardion-col :class="responsiveHeader" class="color-grey-3"
          >12:15 | 22.10.2019</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader"
          >Иванов Тимофей Петрович</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader"
          ><div class="car-number">
            <div class="car-number-num">A 450 ВП</div>
            <div class="car-number-code">777</div>
          </div></app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader">
          <div class="color-grey-2">Самара</div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <div class="d-flex">
            <div v-for="(agregator, idx) in agregators" :key="idx" class="mr-5">
              <app-icon class="driver-list-item__agregator-icon icon-rounded-shadow" :src="agregator.icon" width="25" />
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
                :active="true"
                :price="100"
              />
            </div>
            <div class="col-xl-4">
              <driver-list-item-agregator
                class="driver-list-item__agregator"
                :agregator="'gett'"
              />
            </div>
            <div class="col-xl-4">
              <driver-list-item-agregator
                class="driver-list-item__agregator"
                :agregator="'citymobil'"
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
            <div class="row">
              <div class="col color-grey-3">Кем выдан:</div>
            </div>
            <div class="row mt-10">
              <div class="col color-grey-2 text-uppercase">
                Отделом уфмс по гор. москве по район увыхино-жулебино
              </div>
            </div>
          </div>
          <div>
            <app-select
              class="mt-30 mb-10 driver-list-item__select"
              :searchable="false"
              variant="border"
              placeholder="Группа выплат"
              :options="paymentGroups"
              v-model="paymentGroup"
            />
            <app-select
              class="driver-list-item__select"
              :searchable="false"
              variant="border"
              placeholder="Антифрод"
              :options="antifrodItems"
              v-model="antifrod"
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
            <driver-list-cards v-model="cards" />
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
import { computed, ref } from "@vue/composition-api";
import svgDriverLicense from "@/assets/icons/driver_license.svg";
@Component({
  components: {
    AppIcon,
    DriverListItemAgregator,
    AppSelect,
    DriverListCards,
    svgDriverLicense,
    PreviewImage,
  },
  setup() {
    const agregators = computed(() => {
      return Object.keys(AgregatorType).map((key) => ({
        ...AgregatorType[key],
        key,
      }));
    });
    const paymentGroup = ref("");

    const antifrod = ref("");
    const cards = ref([
      { number: "5858 8585 8878 9854 " },
      { number: "5858 8585 8878 9854 " },
    ]);
    const checkDriver = () => {
      return;
    };
    return {
      agregators,
      AgregatorType,
      PaymentType,
      PaymentName,
      paymentGroup,
      antifrod,
      cards,
      svgDriverLicense,
      checkDriver,
    };
  },
})
export default class DriverListItem extends Vue {
  @Prop(Object) item: any;
  @Prop(Boolean) showAgregators: boolean;
  get responsiveHeader() {
    return "col-sm-6 col-md-4 col-xl-2";
  }
  get responsiveContent() {
    return "col-12 col-xl-4";
  }
  get paymentGroups() {
    return [
      {
        label: "Автоматическая",
        key: "auto",
      },
      {
        label: "С одобрением",
        key: "manual",
      },
    ];
  }
  get antifrodItems() {
    return [
      {
        label: "1",
        key: "1",
      },
      {
        label: "2",
        key: "2",
      },
    ];
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
  get carData() {
    return [
      {
        name: "Марка/модель:",
        value: "Kia Rio",
      },
      {
        name: "Цвет:",
        value: "Белый",
      },
      {
        name: "Год:",
        value: "2019",
      },
      {
        name: "VIN:",
        value: "WDDGG128271674910",
      },
      {
        name: "СТС серия/номер:",
        value: "99 12 265397",
      },
      {
        name: "Gett ID:",
        value: "151765",
      },
    ];
  }
  get driverData() {
    return [
      {
        name: "Телефон:",
        value: "+7 900 800 90 08",
      },
      {
        name: "Серия/номер В.У.:",
        value: "5513 490490",
      },
      {
        name: "Стаж вождения:",
        value: "10.10.2010",
      },
      {
        name: "Дата выдачи В.У.:",
        value: "10.10.2010",
      },
      {
        name: "Срок действия В.У.:",
        value: "10.10.2010",
      },
      {
        name: "Город:",
        value: "Самара",
      },
      {
        name: "Дата рождения:",
        value: "10.10.2010",
      },
      {
        name: "Страна выдачи:",
        value: "Россия",
      },
    ];
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