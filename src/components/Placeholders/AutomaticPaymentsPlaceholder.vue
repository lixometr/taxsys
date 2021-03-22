<template>
  <page-placeholder class="automatic-payments-placeholder">
    <template #image>
      <img src="@/assets/img/automatic_payments.png" alt="image" />
    </template>
    <template #text>
      <div class="mb-10 font-500">
        Автоматические выплаты проводятся без вашего участия.
      </div>

      Для настройки выплат данного типа необходимо в настройках создать группу
      выплат с автоматическим одобрением и установить ее в профиле водителя
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class AutomaticPaymentsPlaceholder extends Vue {}
</script>

<style lang="scss">
.automatic-payments-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/suspicious_bg.png) right top no-repeat;
    background-size: 340px auto;
  }
}
</style>