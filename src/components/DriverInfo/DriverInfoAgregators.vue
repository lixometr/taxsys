<template>
  <div class="app-card driver-info">
    <div class="row">
      <div class="col-xl-4 ">
        <driver-agregator
          class="driver-info__agregator"
          :agregator="'yandex'"
          :active="!!item.YandexDriver"
          :price="agregatorBalance[AgregName.yandex]"
          :driverId="item.id"
          @refresh="refresh"
        />
      </div>
      <div class="col-xl-4 ">
        <driver-agregator
          class="driver-info__agregator"
          :agregator="'gett'"
          :active="!!item.GettDriver"
          :driverId="item.id"
          @refresh="refresh"
        />
      </div>
      <div class="col-xl-4">
        <driver-agregator
          class="driver-info__agregator"
          :agregator="'citymobil'"
          :active="!!item.CityMobilDriver"
          :driverId="item.id"
          :price="agregatorBalance[AgregName.citymobil]"
          @refresh="refresh"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DriverAgregator from "../DriverAgregator.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgregName } from "@/types/agregator.enum";

@Component({
  components: { DriverAgregator },
  setup(props, { emit }) {
    const refresh = () => {
      emit("refresh");
    };
    return { refresh, AgregName };
  },
})
export default class DriverInfoAgregators extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: any;
  get agregatorBalance() {
    return {
      [AgregName.yandex]: this.item.YandexBalans?.toString(),
      [AgregName.citymobil]: this.item.citimobil_balance?.toString(),
    };
  }
}
</script>

<style lang="scss">
.driver-info {
  &__agregator {
    @include lg {
      margin-bottom: 20px;
    }
  }
}
</style>
