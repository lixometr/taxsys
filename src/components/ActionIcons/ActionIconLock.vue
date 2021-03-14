<template>
  <div class="action-icon-lock action-icon">
    <svgLock />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgLock from "@/assets/icons/lock.svg";
@Component({
  components: { svgLock },
})
export default class ActionIconLock extends Vue {}
</script>

<style lang="scss">
.action-icon-lock {
  background: $white;
  border: 1px solid $red;
  svg {
    path {
      fill: $red;
    }
  }
}
</style>