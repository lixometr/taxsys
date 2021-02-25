<template>
  <div class="app-select" :class="{ error: hasErrors }">
    <v-select class="custom-select" v-on="$listeners" v-bind="_attrs">
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes"><svgArrow /></span>
      </template>
      <template #no-options="{}"> Ничего не найдено </template>
    </v-select>
    <div class="app-select__errors">
      <div class="app-select__error" v-for="(error, idx) in errors" :key="idx">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgArrow from "@/assets/icons/select_arrow.svg";
@Component({
  inheritAttrs: false,

  components: {
    svgArrow,
  },
})
export default class AppSelect extends Vue {
  @Prop(String) label: string;
  @Prop({ type: Array, default: () => [] }) errors: string[];
  get hasErrors() {
    return this.errors.length > 0;
  }
  get _attrs() {
    const defaultOptions = {
      clearable: false,
      placeholder: this.label,
    };
    return Object.assign({}, this.$attrs, defaultOptions);
  }
}
</script>

<style lang="scss">
.app-select {
  &__errors {
    color: $red;
    min-height: 30px;
  }
  &__error {
    padding-top: 6px;
  }
}
</style>