<template>
  <div class="header-burger" :class="{ open: isOpen }" @click="toggle">
    <div class="header-burger__wrapper">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import useSidebar from "@/components/Sidebar/useSidebar";
@Component({
  setup() {
    const { isOpen, open, close } = useSidebar();
    const toggle = () => {
      if (isOpen.value) {
        close();
      } else {
        open();
      }
    };
    return {
      isOpen,
      toggle,
    };
  },
})
export default class HeaderBurger extends Vue {}
</script>

<style lang="scss">
.header-burger {
  &__wrapper {
    position: relative;
    width: 30px;
    height: 22px;
    cursor: pointer;
    span {
      display: block;
      width: 30px;
      height: 3px;
      background: $white;
      border-radius: 10px;
      margin-bottom: 6px;
      transition: $transition;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &.open {
  
    span {
      position: absolute;
      &:first-child {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }
      &:nth-child(2) {
        top: 50%;
        transform: translate(-10px, -50%);
        opacity: 0;
      }
      &:last-child {
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
}
</style>