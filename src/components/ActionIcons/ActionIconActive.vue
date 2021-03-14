<template>
  <action-icon class="action-icon-active ">
    <svgActive v-if="isActive" />
    <svgNoActive v-else/>
  </action-icon>
</template>

<script lang="ts">
import ActionIcon from './ActionIcon.vue'
import { Component, Prop, Vue } from "vue-property-decorator";
import svgActive from "@/assets/icons/eye.svg";
import svgNoActive from "@/assets/icons/eye-off.svg";
@Component({
  components: { svgActive, svgNoActive, ActionIcon },
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