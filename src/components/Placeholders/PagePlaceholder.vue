<template>
  <div class="flex-1 flex-layout page-placeholder" :class="{full}">
    <div class="app-card page-placeholder__card flex-1">
      <div class="page-placeholder__image">
        <slot name="image" />
      </div>

      <div class="page-placeholder__text">
        <slot name="text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PagePlaceholder extends Vue {
    @Prop(Boolean) full: boolean
}
</script>

<style lang="scss">
.page-placeholder {
  padding-top: 3rem;
  padding-bottom: 3rem;
  &__card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    max-height: 500px;
    margin: auto;
    padding-bottom: 2rem;
    padding-top: 2rem;
    @include md {
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-height: none;
    }
  }

  &__text {
    font-size: 2.2rem;
    color: $grey_2;
    max-width: 360px;
    line-height: 1.4;
    @include lg {
      font-size: 2rem;
    }
    @include md {
      font-size: 1.8rem;
    }
    @include xs {
      font-size: 1.6rem;
    }
  }

  &__image {
    margin-right: 5rem;
    img {
      max-width: 100%;
    }
    @include md {
      margin-right: 0;
      margin-bottom: 20px;
      max-width: 100%;
    }
  }
  &.full {
      .page-placeholder__card {
          width: 100%;
          max-width: none;
          max-height: none;
          margin: 0;
      }
      .page-placeholder__text {
        max-width: 550px;
      }
  }
}
</style>