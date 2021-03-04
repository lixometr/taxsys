<template>
  <div
    class="app-checkbox"
    :class="{ active: value }"
    :style="{ width: size + 'px', height: size + 'px' }"
    @click="toggle"
  >
    <div class="app-checkbox__mark" v-if="value">
      <svgCheckMark />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgCheckMark from "@/assets/icons/check_mark.svg";
import { toRefs } from "@vue/composition-api";
@Component({
  setup(props: any, { emit }) {
    const { value } = toRefs(props);
    const toggle = () => {
      emit("input", !value.value);
    };
    return {
      toggle,
    };
  },
  components: {
    svgCheckMark,
  },
})
export default class AppCheckbox extends Vue {
  @Prop(Boolean) value: boolean;
  @Prop({
    type: Number,
    default: 20,
  })
  size: number;
}
</script>

<style lang="scss">
.app-checkbox {
  border: 2px solid #8F8AFF;
  border-radius: 50%;
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
    .app-checkbox__mark {
      background: $purple;
    }
  }
}
</style>