<template>
  <div class="driver-check-info-fcp">
    <div class="app-card">
      <div class="row row-no-gutter">
        <app-accardion-col class="col-12">
          <div class="font-md color-violet">ФССП</div>
        </app-accardion-col>
      </div>
      <driver-check-info-fcp-item class="driver-check-info-fcp__item" />
      <driver-check-info-fcp-item class="driver-check-info-fcp__item" />
    </div>
  </div>
</template>

<script lang="ts">
import DriverCheckInfoFcpItem from "./DriverCheckInfoFcpItem.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { DriverCheckInfoFcpItem },
})
export default class DriverCheckInfoFcp extends Vue {}
</script>

<style lang="scss">
.driver-check-info-fcp {
  &__item {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 3rem;
    &:last-child {
      border: none;
      padding-bottom: 0;
    }
  }
}
</style>