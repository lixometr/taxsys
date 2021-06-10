<template>
  <div class="app-card cd-agregator-header">
    <div class="cd-agregator-header__row">
      <div class="cd-agregator-header__icon">
        <img :src="agregatorIcon" alt="agregator-icon" />
      </div>
      <div class="cd-agregator-header__balance">
        <div class="color-graphit">Доступно</div>
        <div class="color-green">{{ balance }} {{ currency }}</div>
      </div>
      <div>
        <app-button color="orange" @click="payOut">вывести</app-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useModal from "@/compositions/useModal";
import { UserModule } from "@/store/modules/user";
import { AgregatorType, AgregName } from "@/types/agregator.enum";
import { ModalName } from "@/types/modal.enum";
import { computed, toRefs } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
interface IProps {
  [key: string]: any;
  agregator: string;
}
@Component({
  setup(props: IProps) {
    const { agregator } = toRefs<IProps>(props);
    const payOut = () => {
      // const { showByName } = useModal();
      return;
    };
    const agregatorIcon = computed(() => {
      return AgregatorType[agregator.value]?.icon;
    });
    return {
      agregatorIcon,
      payOut,
    };
  },
})
export default class CDAgregatorHeader extends Vue {
  @Prop(Number) balance: number;
  @Prop(String) agregator: AgregName;

  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.cd-agregator-header {
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__icon {
    width: 140px;
  }
  &__balance {
    display: flex;
    align-items: center;
    > div {
      &:first-child {
        margin-right: 30px;
      }
      &:last-child {
        font-size: 2rem;
      }
    }
  }
}
</style>