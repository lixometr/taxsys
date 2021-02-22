<template>
  <div class="app-accardion-col">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppAccardionCol extends Vue {}
</script>

<style lang="scss">
.app-accardion-col {
  padding: 3rem 1.5rem 0 1.5rem;
  @include lg {
    // padding: 1.5rem;
  }
}
</style>