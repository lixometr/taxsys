<template>
  <div class="cd-finances-payments-info">
    <div class="cd-finances-payments-info__item row">
      <div class="color-grey-3 col-lg-5">До списания оплаты осталось</div>
      <div class="color-grey-1 col-lg-3">3 часа 59 минут</div>
      <div class="col-lg-4 cd-finances-payments-info__item-btn">
        <app-button color="orange" @click="pay">оплатить</app-button>
      </div>
    </div>
    <div class="cd-finances-payments-info__item row">
      <div class="color-grey-3 col-lg-5">Депозит</div>
      <div class="color-grey-1 col-lg-3">5000 /200 000 {{ currency }}</div>
      <div class="col-lg-4 cd-finances-payments-info__item-btn">
        <app-button color="orange" @click="makeDeposit">внести</app-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  setup() {
    const pay = () => {
      return;
    };
    const makeDeposit = () => {
      return;
    };
    return {
      pay,
      makeDeposit,
    };
  },
})
export default class CdFinancesPaymentsInfo extends Vue {
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.cd-finances-payments-info {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    > div {
      @include md {
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &-btn {
      text-align: right;
      @include md {
        text-align: left;
      }
    }
    .btn {
      width: 140px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>