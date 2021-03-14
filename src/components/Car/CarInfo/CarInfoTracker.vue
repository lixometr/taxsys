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
        /></app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import CarInfoTrackerForm from "./CarInfoTrackerForm.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { CarInfoTrackerForm },
})
export default class CarInfoTracker extends Vue {}
</script>

<style lang="scss">
</style>