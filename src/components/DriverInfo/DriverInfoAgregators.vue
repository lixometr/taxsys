<template>
  <div class="app-card driver-info">
    <driver-agregators :item="item" @refresh="refresh" />
  </div>
</template>

<script lang="ts">
import DriverAgregators from "../DriverAgregators.vue";
import DriverAgregator from "../DriverAgregator.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DriverEntity } from "@/models/driver.entity";

@Component({
  components: { DriverAgregator, DriverAgregators },
  setup(props, { emit }) {
    const refresh = () => {
      emit("refresh");
    };

    return { refresh };
  },
})
export default class DriverInfoAgregators extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverEntity;
}
</script>

<style lang="scss">
// .driver-info {
//   &__agregator {
//     @include lg {
//       margin-bottom: 20px;
//     }
//   }
// }
</style>
