<template>
  <header class="header">
    <div class="header__row">
      <header-search />
      <header-balance />
    </div>
  </header>
</template>

<script lang="ts">
import HeaderBalance from '@/components/Header/HeaderBalance.vue'
import { Component, Vue } from "vue-property-decorator";
import HeaderSearch from "@/components/Header/HeaderSearch.vue";

@Component({
  components: { HeaderSearch, HeaderBalance },
})
export default class Header extends Vue {}
</script>

<style lang="scss">
.header {
    padding-top: 3rem;
    &__row {
        display: flex;
        justify-content: space-between;
    }
    &-rounded-label {
        background: $white;
        border-radius: 100px;
        padding: 1rem 1.6rem;
        display: flex;
        align-items: center;
            font-size: $fz_md;

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