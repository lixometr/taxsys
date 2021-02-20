<template>
  <div class="header-actions">
    <div class="header-actions__noty header-actions__item">
      <span class="header-actions__noty-circle" v-if="hasNoty"></span>
      <svgBell />
    </div>
    <span></span>
    <div class="header-actions__chat header-actions__item">
      <svgChat />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgBell from "@/assets/icons/bell.svg";
import svgChat from "@/assets/icons/chat.svg";
@Component({
  components: {
    svgBell,
    svgChat,
  },
})
export default class HeaderActions extends Vue {
  get hasNoty() {
    return true
  }
}
</script>

<style lang="scss">
.header-actions {
  display: flex;
  align-items: center;
  &__item {
    cursor: pointer;
  }
  &__noty {
    position: relative;
  }
  &__noty-circle {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 10px;
    height: 10px;
    display: block;
    border: 2px solid $white;
    background: $red_orange_grad;
    border-radius: 50%;
  }
  > span {
    display: block;
    height: 22px;
    width: 1px;
    background: $purple;
    margin: 0 15px;
  }
}
</style>