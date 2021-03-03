<template>
  <div class="action-icon-active action-icon">
    <svgActive v-if="isActive" />
    <svgNoActive v-else/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgActive from "@/assets/icons/eye.svg";
import svgNoActive from "@/assets/icons/eye-off.svg";
@Component({
  components: { svgActive, svgNoActive },
})
export default class ActionIconActive extends Vue {
  @Prop(Boolean) isActive: boolean;
}
</script>

<style lang="scss">
.action-icon-active {
  background: $orange;
  svg {
    path {
      fill: $white;
    }
  }
}
</style>