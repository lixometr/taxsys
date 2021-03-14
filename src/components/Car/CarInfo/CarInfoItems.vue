<template>
  <div class="car-info-items">
    
  </div>
</template>

<script lang="ts">
import CarInfoTracker from './CarInfoTracker.vue'
import CarInfoData from "./CarInfoData.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { CarInfoData, CarInfoTracker },
})
export default class CarInfoItems extends Vue {}
</script>

<style lang="scss">
</style>