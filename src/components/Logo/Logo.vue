<template>
  <div class="logo" :class="{'show-text': showText}">
    <svgLogo />
    <transition mode="out-in" name="logo-text">
      <span class="logo-text" >TAXIS</span>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgLogo from "@/assets/icons/logo.svg";
@Component({ components: { svgLogo } })
export default class Logo extends Vue {
  @Prop({ type: Boolean, default: true }) showText: boolean;
}
</script>

<style lang="scss">
.logo {
  font-size: 2rem;
  font-weight: $extra;
  color: $white;
  display: flex;
  align-items: center;
  letter-spacing: 0.2em;
  svg {
    max-width: 100%;
    height: auto;
    flex-shrink: 0;
    display: block;
  }
  > span {
    margin-left: 10px;
    display: none;
    @include md {
      display: block!important;
    }
  }
  &.show-text {
    span {
      display: inline-block;
    }
  }
}
.logo-text-enter,
.logo-text-leave-to {
  opacity: 0!important;
}
.logo-text-enter-to, .logo-text-leave {
    opacity: 1;
}
.logo-text-enter-active,
.logo-text-leave-active {
  transition: $transition;
}
</style>