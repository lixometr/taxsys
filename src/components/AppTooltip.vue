<template>
  <div class="app-tooltip" :class="position">
    <div class="app-tooltip__inner">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
enum Position {
  left,
  top,
  right,
  bottom,
}
@Component
export default class AppTooltip extends Vue {
  @Prop(String) position: Position;
}
</script>

<style lang="scss">
.app-tooltip {
  background: #ffffff;
  box-shadow: 0px 5px 30px rgba(90, 19, 167, 0.15);
  border-radius: 5px;
  position: relative;
  &__inner {
    padding: 2.5rem;
    z-index: 3;
    position: relative;
  }
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 2;
    background: #ffffff;
    border-radius: 5px 0px;
    transform: rotate(45deg);
  }
  &.left {
    &::before {
      left: -7px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  }
  &.right {
    &::before {
      left: auto;
      right: -7px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  }
  &.bottom {
    &::before {
      left: 50%;
      top: auto;
      bottom: -7px;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  &.top {
    &::before {
      left: 50%;
      top: -7px;
      transform: translateX(-50%) rotate(45deg);
    }
  }
}
</style>