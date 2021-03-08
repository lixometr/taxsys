<template>
  <div class="app-select" :class="{ error: hasErrors }">
    <v-select
      class="custom-select"
      :class="{ [`select-${variant}`]: true }"
      v-on="$listeners"
      v-bind="_attrs"
    >
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes">
          <svgArrowFilled v-if="variant === SelectVariant.default" />
          <svgArrowStroke width="15" v-if="variant === SelectVariant.border" />
        </span>
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
import svgArrowFilled from "@/assets/icons/select_arrow.svg";
import svgArrowStroke from "@/assets/icons/arrow-bottom.svg";
enum SelectVariant {
  border = "border",
  default = "default",
}
@Component({
  inheritAttrs: false,

  components: {
    svgArrowFilled,
    svgArrowStroke
  },
  setup() {
    return {
      SelectVariant,
    };
  },
})
export default class AppSelect extends Vue {
  @Prop(String) label: string;
  @Prop(String) selectLabel: string;
  @Prop({ type: Array, default: () => [] }) errors: string[];
  @Prop({
    type: String,
    default: SelectVariant.default,
  })
  variant: SelectVariant;
  get hasErrors() {
    return this.errors.length > 0;
  }
  get _attrs() {
    const defaultOptions = {
      clearable: false,
      placeholder: this.label,
      label: this.selectLabel,
    };
    return Object.assign({}, defaultOptions, this.$attrs);
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