<template>
  <div class="page-title" :class="{'page-title-between': between}">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageTitle extends Vue {
  @Prop({
    type: Boolean,
    default: false
  }) between: boolean
}
</script>

<style lang="scss" >
.page-title-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include sm {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    > div:first-child {
      margin-bottom: 15px;
    }
  }
}
</style>