<template>
  <div class="app-text-area" :class="{ error: hasErrors }">
    <div class="app-text-area__inner">
      <div class="app-text-area__prefix" v-if="prefix">
        <slot name="prefix">{{ prefix }}</slot>
      </div>
      <textarea
        class="app-text-area__el"
        ref="el"
        :type="type"
        v-bind="_inputAttrs"
        v-on="_inputListeners"
      />
      <div class="app-text-area__sufix" v-if="sufix">
        <slot name="sufix">{{ sufix }}</slot>
      </div>
    </div>
    <div class="app-text-area__errors">
      <div class="app-text-area__error" v-for="(error, idx) in errors" :key="idx">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppTextArea extends Vue {
  @Prop(Object) inputAttrs: any;
  @Prop(String) label: string;
  @Prop({ type: Array, default: () => [] }) errors: string[];
  @Prop(String) value: string;
  @Prop(String) type: string;
  @Prop(String) sufix: string;
  @Prop(String) prefix: string;

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
    this.$emit("text-area", data);
  }
}
</script>

<style lang="scss">
.app-text-area {
  position: relative;
  &__el {
    border: none;
    padding: 1.2rem 0;
    font-size: $fz_md;
    background: transparent;
    outline: none;
    display: block;
    width: 100%;
    &::placeholder {
      color: $grey_3;
    }
    &:focus {
      // border-bottom: 1px solid darken($purple, 10%);
    }
  }
  &__errors {
    color: $red;
    min-height: 30px;
  }
  &__error {
    padding-top: 6px;
  }
  &__inner {
    display: flex;
    border-bottom: 1px solid rgba($purple, 0.35);
    align-items: center;
  }
  &__sufix {
    padding-left: 5px;
  }
  &__prefix {
    padding-right: 5px;
  }
  &.error {
    .app-text-area__inner {
      border-color: $red;
    }
  }
}
</style>