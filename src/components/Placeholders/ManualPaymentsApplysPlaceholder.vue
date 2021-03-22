<template>
  <page-placeholder class="manual-payments-applys-placeholder">
    <template #image>
      <img src="@/assets/img/manual_payments_applys.png" alt="image" />
    </template>
    <template #text>
      <div class="mb-10 font-500">
        В данном разделе будут отображаться заявки на выплаты от водителей.
      </div>
      Выплаты будут проведены после проверки и одобрения транзакции
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class ManualPaymentsApplyslaceholder extends Vue {}
</script>

<style lang="scss">
.manual-payments-applys-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/manual_payments_applys_bg.png) right bottom no-repeat;
    background-size: 340px auto;
  }
}
</style>