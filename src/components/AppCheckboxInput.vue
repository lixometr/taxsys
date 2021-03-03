<template>
  <div class="app-checkbox-input">
    <div class="app-checkbox-input__inner">
      <div class="app-checkbox-input__title" @click="toggle">{{ label }}</div>
      <app-checkbox
        ref="appCheckbox"
        v-on="$listeners"
        v-model="inputModel"
        v-bind="$attrs"
      />
    </div>
    <div class="app-checkbox-input__errors">
      <div
        class="app-checkbox-input__error"
        v-for="(error, idx) in errors"
        :key="idx"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppCheckbox from "./AppCheckbox.vue";
import { Component, ModelSync, Prop, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";

@Component({
  setup() {
    const appCheckbox = ref(null);
    const toggle = () => {
      if (appCheckbox.value) {
        appCheckbox.value.toggle();
      }
    };
    return {
      toggle,
      appCheckbox,
    };
  },
  components: { AppCheckbox },
  inheritAttrs: false,
})
export default class AppCheckboxInput extends Vue {
  @Prop(String) label: string;

  @Prop({
    type: Array,
    default: () => [],
  })
  errors: Array<string>;

  @ModelSync("value", "input", { type: Boolean })
  readonly inputModel!: boolean;
}
</script>

<style lang="scss">
.app-checkbox-input {
  &__inner {
    display: flex;
    align-items: center;
  }
  &__title {
    margin-right: 10px;
    user-select: none;
  }
  &__errors {
    color: $red;
    min-height: 30px;
  }
  &__error {
    padding-top: 6px;
  }
}
</style>