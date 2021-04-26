<template>
  <div class="app-accardion" :class="{ open: opened }">
    <div
      class="app-accardion__header accardion-header"
      :class="headerClass"
      @click.prevent="toggle"
    >
      <div
        class="app-accardion__header-row app-accardion__row row row-no-gutter"
      >
        <slot name="header" />
      </div>
      <div class="app-accardion__arrow" v-if="showArrow">
        <svgArrowRight class="color-violet"/>
      </div>
    </div>
    <div
      class="app-accardion__content accardion-content"
      :class="contentClass"
      v-if="opened"
    >
      <div
        class="app-accardion__content-row app-accardion__row row row-no-gutter"
      >
        <slot />
      </div>
      <div class="app-accardion__actions" v-if="$slots.actions">
        <slot name="actions" />
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
    const opened = ref(!!props.isOpen);
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
  @Prop() headerClass: any;
  @Prop() contentClass: any;
}
</script>

<style lang="scss">
.app-accardion {
  background: $white;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  // overflow: auto;
  max-width: 100%;
  .col {
    padding: 0 1.5rem;
  }
  &__header {
    padding: 0 4rem 3rem 1rem;

    position: relative;
    cursor: pointer;
    .app-accardion-col {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    &.border {
      &::after {
        content: "";
        height: 1px;
        background: #f2f2f2;
        position: absolute;
        bottom: 0;
        left: 25px;
        right: 25px;
      }
    }
  }
  &__actions {
    position: absolute;
    right: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    bottom: 3rem;
    padding-top: 3rem;
  }
  &__action {
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
    padding: 0 4rem 2rem 1rem;
    position: relative;
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
    position: relative;
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