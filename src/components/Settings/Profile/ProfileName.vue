<template>
  <div class="profile-name">
    <div class="app-card">
      <div class="profile-name__row">
        <div class="profile-name__item">
          <div class="color-purple">Транзит Момент</div>
        </div>
        <div class="profile-name__item">
          <div class="">Директор: Иванов Петр Петрович</div>
        </div>
        <div class="profile-name__item">
          <div class="">Телефон: +7 900 800 90 90</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProfileName extends Vue {}
</script>

<style lang="scss">
.profile-name {
    &__row {
        display: flex;
        @include md {
            flex-direction: column;
        }
    }
    &__item {
        font-size: $fz_md;
        color: #333;
        margin-right: 100px;
        @include lg {
            margin-right: 50px;
        }
        @include md {
            margin-right: 0;
            margin-bottom: 15px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>