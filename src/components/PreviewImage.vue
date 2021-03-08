<template>
  <div class="preview-image" @click="openModal">
    <div class="preview-image__icon">
      <slot name="icon" />
      <component :is="icon" />
    </div>
    <img class="preview-image__img" :src="src" alt="image" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  setup() {
    const openModal = () => {
      return;
    };
    return {
      openModal,
    };
  },
})
export default class PreviewImage extends Vue {
  @Prop(String) src: string;
  @Prop(Object) icon: any;
}
</script>

<style lang="scss">
.preview-image {
  width: 105px;
  height: 90px;
  border: 1 solid rgba(184, 181, 255, 0.15);
  box-sizing: border-box;
  box-shadow: 0px 5px 16px rgba(93, 85, 208, 0.15);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 3;
    background: linear-gradient(
      180deg,
      #5d55d0 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &__icon {
    position: absolute;
    z-index: 5;
    top: 15px;
    left: 10px;
    color: $white;
  }
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    object-fit: cover;
  }
}
</style>