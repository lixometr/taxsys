<template>
  <button class="modern-btn" v-on="$listeners" v-bind="$attrs"><slot /></button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ModernBtn extends Vue {}
</script>

<style lang="scss">
.modern-btn {
  padding: 1.5rem 8rem;
  text-transform: uppercase;
  color: $white;
  background: $orange;
  box-shadow: 0px 4px 15px rgba(35, 32, 32, 0.25);
  border-radius: 100px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: $transition;
  @include md {
    padding: 1.2rem 5rem;
  }
  
  &:hover {
    box-shadow: none;
  }
}
</style>