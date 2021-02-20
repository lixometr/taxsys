<template>
  <div class="layout-empty">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },

})
export default class LayoutLanding extends Vue {}
</script>

<style lang="scss">
</style>