<template>
  <div class="car-info-tracker">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Трекер</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col-12">
          <car-info-tracker-form
            :id="item.id"
            :messageBlock="messageBlock"
            :messageUnBlock="messageUnBlock"
            :phone="phone"
            :key="phone"
        /></app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import CarInfoTrackerForm from "./CarInfoTrackerForm.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Car } from "@/models/car.entity";

@Component({
  components: { CarInfoTrackerForm },
})
export default class CarInfoTracker extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: Car;
  get messageBlock() {
    return this.item.tracker?.block_code;
  }
  get messageUnBlock() {
    return this.item.tracker?.unblock_code;
  }
  get phone() {
    return this.item.tracker?.phone;
  }
}
</script>

<style lang="scss">
</style>