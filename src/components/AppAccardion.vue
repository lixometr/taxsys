<template>
  <div class="app-accardion" :class="{ open: opened }">
    <div class="app-accardion__header accardion-header" @click.prevent="toggle">
      <div class="app-accardion__header-row app-accardion__row row row-no-gutter">
        <slot name="header" />
      </div>
      <div class="app-accardion__arrow" v-if="showArrow">
        <svgArrowRight />
      </div>
    </div>
    <div class="app-accardion__content accardion-content" v-if="opened">
      <div class="app-accardion__content-row app-accardion__row row row-no-gutter">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgArrowRight from "@/assets/icons/arrow-right.svg";
interface ILabel {
  name: string;
  key: string;
}
@Component({
  components: {
    svgArrowRight,
  },
  setup(props, { emit }) {
    const opened = ref(!!props.opened);
    const open = () => {
      opened.value = true;
      emit("update:isOpen", opened.value);
    };
    const close = () => {
      opened.value = false;
      emit("update:isOpen", opened.value);
    };
    const toggle = () => {
      if (opened.value) {
        close();
      } else {
        open();
      }
    };
    return {
      open,
      close,
      toggle,
      opened,
    };
  },
})
export default class AppAccardion extends Vue {
  @Prop(Boolean) isOpen: boolean;
  @Prop({ type: Boolean, default: true }) showArrow: boolean;
}
</script>

<style lang="scss">
.app-accardion {
  background: $white;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  overflow: auto;
  max-width: 100%;
  .col {
    padding: 0 1.8rem;
  }
  &__header {
    padding: 2.5rem 4rem 2.5rem 2.5rem;
    position: relative;
    cursor: pointer;
  }
  &__arrow {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: center center;
    font-size: 0;
    svg {
      transition: $transition;
    }
  }
  &__content {
    padding: 1rem 4rem 2.5rem 2.5rem;
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
  }

  &.open {
    .app-accardion__arrow {
      svg {
        transform: rotate(90deg);
      }
    }
  }
}
</style>