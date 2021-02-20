<template>
  <div class="page-title">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageTitle extends Vue {}
</script>

<style >
</style>