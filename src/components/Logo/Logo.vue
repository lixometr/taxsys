<template>
  <div class="logo" >
      <svgLogo />
      <transition mode="out-in" name="logo-text"><span v-if="showText">TAXIS</span></transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgLogo from "@/assets/icons/logo.svg";
@Component({ components: { svgLogo } })
export default class Logo extends Vue {
    @Prop({type: Boolean, default: true}) showText: boolean
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
        margin-right: 10px;
    }
    &.show-text {
        span {
            display: none;
        }
    }
}
.logo-text-enter, .logo.text-leave-to {
    opacity: 0;
}
.logo-text-enter-active, .logo-text-leave-active {
    transition: $transition;
}
</style>