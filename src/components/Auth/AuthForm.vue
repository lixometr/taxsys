<template>
  <div class="auth-form">
    <div class="auth-form__image"></div>
    <div class="auth-form__form-wrapper">
      <div class="auth-form__title h2" v-if="title || $slots.title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div class="auth-form__form">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop(String) title: string;
}
</script>

<style lang="scss">
.auth-form {
  display: flex;
  align-items: stretch;
  background: $white;
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  min-height: 600px;
  border-radius: 5px;
  box-shadow: 15px 10px 50px rgba(0, 0, 0, 0.4);

  &__title {
    font-size: 2.8rem;
    color: $purple;
    font-weight: 600;
    @include sm {
      text-align: center;
    }
  }
  &__image {
    background: url(~@/assets/img/login_image.jpg) left center no-repeat;
    background-size: cover;
    width: 380px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    @include lg {
      width: 250px;
    }
    @include md {
      display: none;
    }
  }
  &__form-wrapper {
    padding: 4rem 6rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    @include sm {
      padding: 2.5rem;
    }
  }
  &__form {
    flex: 1;
  }
}
</style>
