<template>
  <div class="cd-finances-payments-percent">
    <div></div>
    <div class="cd-finances-payments-percent__text">
      Работать без <br />
      комиссии парка
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CdFinancesPaymentsPercent extends Vue {}
</script>

<style lang="scss">
.cd-finances-payments-percent {
  display: flex;
  align-items: stretch;
  @include sm {
    // flex-direction: column;
  }
  > div {
    border-radius: 10px;
    &:first-child {
      margin-right: 5px;
      width: 186px;
      background: url(~@/assets/img/cd_finances_payments.jpeg) center 70%
        no-repeat;
      background-size: cover;
      // height: 120px;
      @include sm {
        width: 100px;
      }
    }
  }
  &__text {
    flex: 1;
    padding: 30px 0;
    background: linear-gradient(180deg, #7e76ef 0%, #655ad7 100%);
    border-radius: 10px;
    font-size: 2.4rem;
    color: #ededed;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    @include md {
      padding: 30px 1rem;
      font-size: 1.8rem;
    }
  }
}
</style>