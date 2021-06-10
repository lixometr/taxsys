<template>
  <div class="page-cd-finances">
    <cd-finances-agregators class="mb-30"/>
    <cd-finances-payments class="mb-30" />
    <cd-finances-history />
  </div>
</template>

<script lang="ts">
import CdFinancesHistory from '../../../components/CDFinances/CdFinancesHistory.vue'
import CdFinancesPayments from '@/components/CDFinances/CdFinancesPayments.vue'
import CdFinancesAgregators from "@/components/CDFinances/CdFinancesAgregators.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { CdFinancesAgregators, CdFinancesPayments, CdFinancesHistory },
})
export default class CDFinances extends Vue {}
</script>

<style lang="scss">
.page-cd-finances {
    padding-top: 5rem;
    padding-bottom: 3rem;
    &__agregators {
      margin-bottom: 40px;
    }
}
</style>