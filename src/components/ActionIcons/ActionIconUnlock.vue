<template>
  <div class="action-icon-unlock action-icon">
    <svgUnLock />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgUnLock from "@/assets/icons/unlock.svg";
@Component({
  components: { svgUnLock },
})
export default class ActionIconUnlock extends Vue {}
</script>

<style lang="scss">
.action-icon-unlock {
  background: $white;
  border: 1px solid $green;
  svg {
    path {
      fill: $green;
    }
  }
}
</style>