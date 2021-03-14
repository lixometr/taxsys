<template>
  <div class="app-image-wrapper" :style="imageStyles">
    <div
      class="app-image"
      :style="{ paddingTop }"
      :class="imageClass"
      v-viewer
    >
      <img :src="src" v-bind="$attrs" v-on="$listeners" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  setup() {
    return {};
  },
})
export default class AppImage extends Vue {
  @Prop(String) src: string;
  @Prop(Boolean) border: boolean;
  @Prop(Boolean) shadow: boolean;
  @Prop(Number) width: number;
  @Prop(Number) height: number;
  @Prop({
    type: Boolean,
    default: true,
  })
  useModal: boolean;

  get imageClass() {
    return { "image-border": this.border, "image-shadow": this.shadow };
  }
  get imageStyles() {
    return {
      width: this.width + "px",
      maxHeight: this.height + "px",
    };
  }
  get paddingTop() {
    let calculated = 100 / (this.width / this.height);
    const paddingTop = calculated.toFixed(2) + "%";
    return paddingTop;
  }
}
</script>

<style lang="scss">
.app-image {
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  //   padding: 34.37% 0 0 0;
  img {
    object-fit: cover;
    display: block;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &.image-shadow {
    box-shadow: 0px 4px 15px rgba(35, 32, 32, 0.25);
  }
  &.image-border {
    border: 1px solid #b8b5ff;
  }
}
</style>