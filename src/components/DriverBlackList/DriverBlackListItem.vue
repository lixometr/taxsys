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
              <div
                v-for="(agregator, idx) in agregators"
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
              <driver-list-cards :canEdit="false" v-model="cards" />
            </div>
            <div>
              <div class="row">
                <div class="col color-grey-3">MAC адресс:</div>
                <div class="col color-grey-2">0017 ab be 17 1c</div>
              </div>
            </div>
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
                    <div class="col color-grey-2">Не платит аренду</div>
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
import { AgregatorType } from "@/types/agregator.enum";
import { computed, ref } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { DriverListCards },
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
      paymentGroup,
      antifrod,
      cards,
      checkDriver,
    };
  },
})
export default class DriverBlackListItem extends Vue {
  @Prop(Object) item: any;
  @Prop(Boolean) showAgregators: boolean;
  get responsiveHeader() {
    return "col-sm-6 col-md-4 col-xl-2";
  }
  get responsiveContent() {
    return "col-12 col-xl-4";
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
        name: "Город:",
        value: "Самара",
      },
      {
        name: "Дата рождения:",
        value: "10.10.2010",
      },
      {
        name: "Серия/номер паспорта:",
        value: "45 15 692135",
      },
    ];
  }
  get carData() {
    return [
      {
        name: "VIN:",
        value: "WDDGG128271674910",
      },
      {
        name: "СТС серия/номер:",
        value: "99 12 265397",
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