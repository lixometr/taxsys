<template>
  <component
    :is="typeof src === 'string' ? 'img' : src"
    :src="typeof src === 'string' ? src : undefined"
    v-on="$listeners"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  inheritAttrs: false,
})
export default class AppIcon extends Vue {
  @Prop({
    type: [Object, String],
  })
  src: object | string;
}
</script>

<style lang="scss">
</style>