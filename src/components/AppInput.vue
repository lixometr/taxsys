<template>
  <div class="app-input" :class="{ error: hasErrors }">
    <input
      class="app-input__el"
      ref="el"
      :type="type"
      v-bind="_inputAttrs"
      v-on="_inputListeners"
    />
    <div class="app-input__errors" v-if="hasErrors">
      <div class="app-input__error" v-for="(error, idx) in errors" :key="idx">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppInput extends Vue {
  @Prop(Object) inputAttrs: any;
  @Prop(String) label: string;
  @Prop({ type: Array, default: () => [] }) errors: string[];
  @Prop(String) value: string;
  @Prop(String) type: string;

  get _inputAttrs() {
    const attrs = Object.assign(
      {},
      { placeholder: this.label, value: this.value },
      this.inputAttrs
    );
    return attrs;
  }
  get _inputListeners() {
    const listeners = Object.assign({}, this.$listeners, {
      input: this.onInput,
    });
    return listeners;
  }
  get hasErrors() {
    return this.errors.length > 0;
  }
  onInput(e: any) {
    const value = e.target.value;
    this.emitData(value);
  }
  emitData(data: any) {
    this.$emit("input", data);
  }
}
</script>

<style lang="scss">
.app-input {
  padding-bottom: 30px;
  &__el {
    border: none;
    border-bottom: 1px solid $purple;
    padding: 1.2rem 0;
    font-size: $fz_md;
    color: $grey_3;
    background: transparent;
    outline: none;
    display: block;
    width: 100%;
    &:focus {
      border-bottom: 1px solid darken($purple, 10%);
    }
  }
  &__errors {
    color: $red;
    position: absolute;
  }
  &__error {
    margin-top: 6px;
  }
  &.error {
    .app-input__el {
        border-color: $red;
    }
  }
}
</style>