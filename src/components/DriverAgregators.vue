<template>
  <div class="row driver-agregators">
    <div class="col-xl-4" v-for="(agreg, idx) in agregatorsItems" :key="idx">
      <driver-agregator
        class="driver-agregators__item"
        v-bind="agreg"
        :driverId="item.id"
        @refresh="refresh"
      />
    </div>
  </div>
</template>

<script lang="ts">
import DriverAgregator from "@/components/DriverAgregator.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgregName } from "@/types/agregator.enum";
import { DriverEntity } from "@/models/driver.entity";
import { computed, toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  item: DriverEntity;
}
@Component({
  components: { DriverAgregator },
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const refresh = () => {
      emit("refresh");
    };
    const agregatorBalance = computed(() => {
      return {
        [AgregName.yandex]: item.value.YandexBalans?.toString(),
        [AgregName.citymobil]: item.value.citimobil_balance?.toString(),
        [AgregName.gett]: item.value.gett_balance?.toString(),
      };
    });
    const agregatorsItems = computed(() => {
      const items = [
        {
          agregator: AgregName.yandex,
          active: !!item.value.YandexDriver,
          price: agregatorBalance.value[AgregName.yandex],
        },
        {
          agregator: AgregName.gett,
          active: !!item.value.GettDriver,
          price: agregatorBalance.value[AgregName.gett],
        },
        {
          agregator: AgregName.citymobil,
          active: !!item.value.CityMobilDriver,
          price: agregatorBalance.value[AgregName.citymobil],
        },
      ];
      items.sort((a, b) => {
        if (!a.active) return 1;
        if (!b.active) return -1;
        return 0;
      });
      return items;
    });
    return { refresh, AgregName, agregatorBalance, agregatorsItems };
  },
})
export default class DriverInfoAgregators extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverEntity;
}
</script>

<style lang="scss">
.driver-agregators {
  &__item {
    @include lg {
      margin-bottom: 20px;
    }
  }
}
</style>
