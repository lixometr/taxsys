<template>
  <page-placeholder class="payment-group-placeholder" :full="true">
    <template #image>
      <img src="@/assets/img/payment_group_placeholder.png" alt="image" />
    </template>
    <template #text>
      Перед добавлением группы выплат вам необходимо добавить свою диспетчерскую
      и платежную систему. 
      <div class="mt-10 font-500">А пока действуют централизованные настройки выплат</div>
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class PaymentGroupPlaceholder extends Vue {}
</script>

<style lang="scss">
.payment-group-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/payment_group_bg_1.png) right top no-repeat,
      url(~@/assets/img/payment_group_bg_2.png) left bottom no-repeat;
    background-size: 300px auto;
  }
}
</style>