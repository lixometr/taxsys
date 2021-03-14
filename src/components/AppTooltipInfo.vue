<template>
  <div class="app-tooltip-info">
    <svgInfo
      class="cursor-pointer"
      @mouseenter="showInfo = true"
      @mouseleave="showInfo = false"
    />
    <transition name="fade">
      <app-tooltip
        class="app-tooltip-info__tooltip"
        v-if="showInfo"
        :position="'left'"
      >
        <slot />
      </app-tooltip>
    </transition>
  </div>
</template>

<script lang="ts">
import AppTooltip from "./AppTooltip.vue";
import { Component, Vue } from "vue-property-decorator";
import svgInfo from "@/assets/icons/info.svg";
import { ref } from "@vue/composition-api";

@Component({
  setup() {
    const showInfo = ref(false);
    return {
      showInfo,
    };
  },
  components: { AppTooltip, svgInfo },
})
export default class AppTooltipInfo extends Vue {}
</script>

<style lang="scss">
.app-tooltip-info {
  position: relative;
  &__tooltip {
    position: absolute;
    font-size: $fz_xs;
    color: $grey_2;
    min-width: 300px;
    top: -10px;
    left: 50px;
    z-index: 10;
    
    @include md {
      top: 40px;
      right: 0;
      left: auto;
      &::before {
        display: none;
      }
    }
    @include xs {
      right: -50px;
      width: 90%;
    }
  }
}
</style>