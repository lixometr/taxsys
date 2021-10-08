<template>
  <div class="payment-systems-item">
    <div class="app-card">
      <div class="row align-items-center">
        <div class="col-lg-3">
          <div class="payment-systems-item__logo payment-badge">
            <img :src="paymentSystemLogo" alt="" />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="font-ml payment-systems-item__balance">
            <div class="color-grey-2">Баланс:</div>
            <div class="color-grey-1">{{ item.balance }} {{ currency }}</div>
          </div>
        </div>
        <div class="col-lg-2 payment-systems-item__remove">
          <svgTrash @click="remove" class="cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgTrash from "@/assets/icons/trash.svg";
import { PaymentSystemEntity } from "@/models/payment-system.entity";
import { PaymentSystemInfo } from "@/types/payment-system.enum";
@Component({
  setup(props, { emit }) {
    const remove = () => {
      emit("remove");
    };
    return {
      remove,
    };
  },
  components: {
    svgTrash,
  },
})
export default class PaymentSystemsItem extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: PaymentSystemEntity;
  get currency() {
    return this.$store.getters.currency;
  }
  get paymentSystemLogo() {
    const agregatorInfo = PaymentSystemInfo[this.item.name];
    if (agregatorInfo) {
      return agregatorInfo.icon;
    }
    return require("@/assets/img/qiwi_logo.png");
  }
}
</script>

<style lang="scss">
.payment-systems-item {
  &__remove {
    margin-left: auto;
    padding-right: 4rem;
    display: flex;
    justify-content: flex-end;
    @include md {
      margin-left: 0;
      margin-top: 1rem;
      padding-right: 0;
      justify-content: flex-start;
    }
    color: $grey_3;
    svg {
      width: 20px;
    }
  }
  &__balance {
    display: flex;
    align-items: center;
    > div:first-child {
      margin-right: 2rem;
    }
  }
  &__logo {
    @include md {
      margin-bottom: 1rem;
    }
  }
}
</style>