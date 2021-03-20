<template>
  <div class="header-taxy-balance" @click="changeBalance">
    <span class="header-taxy-balance__title">Баланс: </span>
    <span class="header-taxy-balance__value">
      {{ balance }} {{ currency }} <svgPlus width="15" class="cursor-pointer"
    /></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/plus-circle.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import { UserModule } from "@/store/modules/user";
@Component({
  components: {
    svgPlus,
  },
  setup() {
    const changeBalance = () => {
      const { showByName } = useModal();
      showByName(ModalName.changeBalance, { props: { action: "put" } });
    };
    return { changeBalance };
  },
})
export default class HeaderTaxyBalance extends Vue {
  get currency() {
    return this.$store.getters.currency;
  }
  get balance() {
    return UserModule.balance;
  }
}
</script>

<style lang="scss">
.header-taxy-balance {
  display: flex;
  align-items: center;
  &__title {
    font-weight: 600;
    color: #333333;
    margin-right: 8px;
    @include md {
      color: $white;
    }
    @include xs {
      display: none;
    }
  }
  &__value {
    display: flex;
    align-items: center;
    svg {
      margin-left: 5px;
      @include md {
        path {
          fill: $white;
        }
      }
      @include xs {
        display: none;
      }
    }
  }
}
</style>