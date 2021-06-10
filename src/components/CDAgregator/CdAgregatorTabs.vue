<template>
  <div class="cd-agregator-tabs">
    <a href="#" class="cd-agregator-tabs__item" @click.prevent="addBalance">
      Пополнить счет
    </a>
    <router-link
      class="cd-agregator-tabs__item"
      active-class="active"
      :to="{ name: 'CDAgregatorTravels', params: { name: $route.params.name } }"
      >Поездки</router-link
    >
    <router-link
      class="cd-agregator-tabs__item"
      active-class="active"
      :to="{
        name: 'CDAgregatorCheckingTravels',
        params: { name: $route.params.name },
      }"
      >Поездки на проверке</router-link
    >
    <a href="#" class="cd-agregator-tabs__item" @click.prevent="showPayments">
      Заработок
    </a>
  </div>
</template>

<script lang="ts">
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import { toRefs } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import Modal from "../Modals/Modal.vue";
interface IProps {
  [key: string]: any;
  agregator: string;
}
@Component({
  setup(props: IProps) {
    const { agregator } = toRefs<IProps>(props);
    const { showByName } = useModal();
    const showPayments = () => {
      showByName(ModalName.CDEarnsModal, {
        props: {
          agregator: agregator.value,
        },
      });
    };
    const addBalance = () => {
      return;
    };
    return { showPayments, addBalance };
  },
})
export default class CDAgregatorTabs extends Vue {
  @Prop(String) agregator: string;
}
</script>

<style lang="scss">
.cd-agregator-tabs {
  border-bottom: 1px solid $grey;
  display: flex;
  justify-content: space-around;
  @include md {
    flex-direction: column;
  }
  &__item {
    display: flex;
    padding: 2.8rem 1rem;
    border-bottom: 1px solid transparent;
    margin: 0 2rem;
    color: $grey_1;
    &.active {
      border-bottom: 1px solid $purple;
    }
    @include md {
      padding: 2rem 1rem;
    }
    @include sm {
      padding: 1rem 0;
      margin: 1rem 0;
    }
  }
}
</style>