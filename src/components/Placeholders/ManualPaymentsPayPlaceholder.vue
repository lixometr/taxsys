<template>
  <page-placeholder class="manual-payments-pay-placeholder">
    <template #image>
      <img src="@/assets/img/manual_payments_pay.png" alt="image" />
    </template>
    <template #text>
      <div class="mb-10 font-500">Пока выплат не проводилось.</div>

      В разделе оплат отображаются транзакции, которые вы одобрили после
      проверки.
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class ManualPaymentsPayPlaceholder extends Vue {}
</script>

<style lang="scss">
.manual-payments-pay-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/suspicious_bg.png) right top no-repeat;
    background-size: 340px auto;
  }
}
</style>