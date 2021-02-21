<template>
  <header class="header">
    <div class="header__row">
      <header-burger class="md-show" />
      <header-search-mob class="header__search-mob md-show ml-30" />
      <header-search class="mr-15 md-hidden header__search" />
      <header-balance class="mr-15 header__balance md-hidden" />
      <header-actions class="mr-20 header__actions md-hidden" />
      <header-accout />
    </div>
  </header>
</template>

<script lang="ts">
import HeaderBurger from './HeaderBurger.vue'
import HeaderSearchMob from "./HeaderSearchMob.vue";
import HeaderAccout from "./HeaderAccout.vue";
import HeaderActions from "./HeaderActions.vue";
import HeaderBalance from "@/components/Header/HeaderBalance.vue";
import { Component, Vue } from "vue-property-decorator";
import HeaderSearch from "@/components/Header/HeaderSearch.vue";

@Component({
  components: {
    HeaderSearch,
    HeaderBalance,
    HeaderActions,
    HeaderAccout,
    HeaderSearchMob, HeaderBurger
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss">
.header {
  padding-top: 3rem;

  @include md {
    background: $purple;
    padding: 1.5rem 2rem;
    margin-left: -20px;
    margin-right: -20px;
    color: $white;
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @include md {
      justify-content: flex-start;
    }
  }
  &-rounded-label {
    background: $white;
    border-radius: 100px;
    padding: 1rem 1.6rem;
    display: flex;
    align-items: center;
    font-size: $fz_sm;

    &__title {
      font-weight: 600;
      margin-right: 1.5rem;
      color: $grey_1;
    }
    &__value {
      color: $purple;
      display: flex;
      align-items: center;
      svg {
        margin-left: 1.5rem;
      }
    }
  }
}
</style>