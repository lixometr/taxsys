<template>
  <div class="app-accardion" :class="{ open: opened }">
    <div class="app-accardion__header accardion-header" @click.prevent="toggle">
      <div class="app-accardion__header-row app-accardion__row">
        <div
          class="app-accardion__col app-accardion__header-col"
          v-for="num in headerColsCnt"
          :key="num"
        >
          <slot :name="'h-col-' + num"></slot>
        </div>
      </div>
      <div class="app-accardion__arrow" v-if="showArrow">
        <svgArrowRight />
      </div>
    </div>
    <div class="app-accardion__content accardion-content" v-if="opened">
      <div class="app-accardion__content-row app-accardion__row">
        <div
          class="app-accardion__col app-accardion__content-col"
          v-for="num in contentColsCnt"
          :key="num"
        >
          <slot :name="'col-' + num"></slot>
        </div>
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
  setup(props) {
    const opened = ref(!!props.opened);
    const open = () => {
      opened.value = true;
    };
    const close = () => {
      opened.value = false;
    };
    const toggle = () => {
      console.log(opened.value);
      opened.value = !opened.value;
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

  get headerColsCnt() {
    const items = [];
    let idx = 1;
    let item = this.$slots[`h-col-${idx}`];
    while (item) {
      items.push(item);
      item = this.$slots[`h-col-${++idx}`];
    }
    return items.length;
  }
  get contentColsCnt() {
    const items = [];
    let idx = 1;
    let item = this.$slots[`col-${idx}`];
    while (item) {
      items.push(item);
      item = this.$slots[`col-${++idx}`];
    }
    return items.length;
  }
}
</script>

<style lang="scss">
.app-accardion {
  background: $white;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  padding: 2.5rem 0;
  &__header {
    padding-right: 2rem;
    position: relative;
    cursor: pointer;
  
  }
  &__arrow {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: center center;
    font-size: 0;
    svg {
        transition: $transition;
    }
  }
  &__content {
      padding-top: 2rem;
       padding-right: 2rem;
  }
  &__row {
    display: flex;
  }
  &__col {
    flex: 1;
    padding: 0 1.8rem;
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