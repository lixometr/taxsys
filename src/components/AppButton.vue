<template>
  <button :type="type" class="btn" :style="btnStyles" :class="btnClass">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
enum BtnColor {
  red = "red",
  green = "green",
  purpleGrad = "purple-grad",
}
enum BtnSize {
  sm = "sm",
  xs = "xs",
}
@Component
export default class AppButton extends Vue {
  @Prop(Boolean) stroke: boolean;
  @Prop(String) color: BtnColor;
  @Prop(String) size: BtnSize;
  @Prop(String) width: string;
  @Prop(String) type: string
  get btnClass() {
    let type = "btn";
    if (this.stroke) {
      type += `-stroke`;
    }
    type += `-${this.color}`;
    if(this.size) {
        type += ` btn-${this.size}`
    }
    return type;
  }
  get btnStyles() {
    return {
      width: this.width
    }
  }
}
</script>

<style >
</style>