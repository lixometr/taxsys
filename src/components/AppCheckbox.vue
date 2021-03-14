<template>
  <div
    class="app-checkbox"
    :class="{
      active: value,
      [`checkbox-${variant}`]: true,
      [`checkbox-${shape}`]: true,
    }"
    :style="{ width: size + 'px', height: size + 'px' }"
    @click="toggle"
  >
    <div class="app-checkbox__mark" v-if="value">
      <svgCheckMark v-if="variant === Variants.default" />
      <svgStar
        :style="{ transform: 'translateY(-1px)' }"
        v-if="variant === Variants.star"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgCheckMark from "@/assets/icons/check_mark.svg";
import svgStar from "@/assets/icons/star.svg";
import { toRefs } from "@vue/composition-api";
enum Variants {
  default = "default",
  star = "star",
}
enum Shape {
  circle = "circle",
  rect = "rect",
}
@Component({
  setup(props: any, { emit }) {
    const { value } = toRefs(props);
    const toggle = () => {
      emit("input", !value.value);
    };
    return {
      toggle,
      Variants,
    };
  },
  components: {
    svgCheckMark,
    svgStar,
  },
})
export default class AppCheckbox extends Vue {
  @Prop(Boolean) value: boolean;
  @Prop({
    type: Number,
    default: 20,
  })
  size: number;
  @Prop({
    type: String,
    default: Variants.default,
  })
  variant: Variants;
  @Prop({
    type: String,
    default: Shape.circle,
  })
  shape: Shape;
}
</script>

<style lang="scss">
.app-checkbox {
  border: 2px solid #8f8aff;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
  cursor: pointer;
  &__mark {
    transition: $transition;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: $white;
    }
  }
  &.active {
    border: 2px solid $purple;
    background: $purple;

    .app-checkbox__mark {
      background: $purple;
    }
  }
  &.checkbox-rect {
    border-radius: 0;

    .app-checkbox__mark {
      border-radius: 0;
    }
  }
}
</style>