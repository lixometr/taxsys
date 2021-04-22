<template>
  <div class="cd-finances-payments row">
    <div class="col-xl-6">
      <div class="app-card">
        <cd-finances-payments-info />
      </div>
    </div>
    <div class="col-xl-6">
      <div class="app-card">
        <cd-finances-payments-percent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CdFinancesPaymentsInfo from './CdFinancesPaymentsInfo.vue'
import CdFinancesPaymentsPercent from "./CdFinancesPaymentsPercent.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { CdFinancesPaymentsPercent, CdFinancesPaymentsInfo },
})
export default class CDFinancesPayments extends Vue {}
</script>

<style lang="scss">
.cd-finances-payments {
  > div {
    .app-card {
      height: 100%;
      display: flex;
      align-items: center;
      > div {
        width: 100%;
      }
    }
    &:first-child {
      @include lg {
        margin-bottom: 30px;
      }
    }
    &:last-child {
      > div {
        padding: 3rem 5rem;
        @include md {
          padding: 1.5rem 2rem;
        }
        @include sm {
          padding: 0;
          background: transparent;
        }
      }
    }
  }
}
</style>