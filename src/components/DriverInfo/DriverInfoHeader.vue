<template>
  <div class="car-info-data">
    <div
      class="app-card color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      headerClass="border"
      :showArrow="false"
      :isOpen="false"
    >
      <div class="row row-no-gutter">
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div>123456789</div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div>{{ item.created_at | dateTime }}</div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div>{{ item.fio }}</div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div class="car-number">
            <div class="car-number-num">{{ carNumber }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div>{{ city }}</div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div
            class="d-flex justify-content-start w-100 justify-content-xl-end"
          >
            <div
              v-for="(agregator, idx) in activeAgregators"
              :key="idx"
              class="mr-10"
            >
              <app-icon
                class="driver-list-item__agregator-icon icon-rounded-shadow"
                :src="agregator.icon"
                width="25"
              />
            </div>
          </div>
        </app-accardion-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DriverEntity } from "@/models/driver.entity";
import { AgregatorType, AgregName } from "@/types/agregator.enum";
import { Component, Prop, Vue } from "vue-property-decorator";
interface IProps {
  [key: string]: any;
}
@Component({
  components: {},
  setup(props: IProps, { emit }) {
    return {};
  },
})
export default class DriverInfoHeader extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverEntity;
  get responsiveHeader() {
    return "col-xl-2 col-lg-4 col-12";
  }
  get agregators() {
    return Object.keys(AgregatorType).map((key) => ({
      ...AgregatorType[key],
      key,
    }));
  }
  get city() {
    return this.item.user?.city;
  }
  get carNumber() {
    return this.item.car?.GosNomer;
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
}
</script>

<style lang="scss">
</style>