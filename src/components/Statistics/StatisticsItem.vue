<template>
  <div class="statistics-item app-card">
    <div class="statistics-item__header">
      <slot name="header" />
    </div>
    <div class="statistics-item__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StatisticsItem extends Vue {}
</script>

<style lang="scss">
.statistics-item {
  &__title {
    font-size: $fz_ml;
    color: $grey_1;
  }
  &__header {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 3rem;
  }
  &__content {
    padding-top: 2rem;
  }
   &__tooltip {
    color: #f2f2f2;
    font-size: $fz_xs;
    background: $blue_grad;
    border-radius: 3px;
    padding: 0.3rem 0.8rem;
  }
  &__legend {
    span {
      color: $grey_2;
    }
  }
}
</style>