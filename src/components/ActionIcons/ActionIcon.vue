<template>
  <div class="action-icon">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgLock from "@/assets/icons/lock.svg";
@Component({
  components: { svgLock },
})
export default class ActionIcon extends Vue {}
</script>

<style lang="scss">

</style>