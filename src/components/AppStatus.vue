<template>
  <div class="app-status">
    <app-button v-bind="$attrs" v-on="$listeners" :noHover="true"><slot /></app-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    inheritAttrs: false
})
export default class extends Vue {}
</script>

<style lang="scss">
</style>