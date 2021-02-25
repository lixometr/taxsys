<template>
  <div class="app-switcher" :class="{ active: active }" @click="toggle">
    <div class="app-switcher__handler"></div>
  </div>
</template>

<script lang="ts">
import { toRefs } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  setup(props, { emit }) {
    const { value: active } = toRefs(props);
    const activate = () => {
      emit("input", true);
    };
    const disable = () => {
      emit("input", false);
    };
    const toggle = () => {
      if (!active.value) {
        activate();
      } else {
        disable();
      }
    };
    return { toggle, active };
  },
})
export default class AppSwitcher extends Vue {
  @Prop(Boolean) value: boolean;
}
</script>

<style lang="scss">
.app-switcher {
  width: 50px;
  height: 27px;
  display: flex;
  align-items: center;
  background: #e0e0e0;
  border-radius: 25px;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  user-select: none;
  transition: $transition;
  position: relative;
  &__handler {
    width: 22px;
    height: 22px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    background: $grey_2;
    transition: $transition;
    left: 0;
    margin-left: 3px;
    position: absolute;
  }
  &.active {
    .app-switcher__handler {
      left: 100%;
      transform: translateX(-100%);
      margin-left: -3px;
      background: $purple;
    }
  }
}
</style>