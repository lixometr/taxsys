<template>
  <div class="driver-agregator">
    <div class="driver-agregator__name-wrapper">
      <div class="driver-agregator__icon">
        <app-icon :src="icon" width="24" />
      </div>
      <div class="driver-agregator__name">
        {{ name }}
      </div>
    </div>
    <div class="driver-agregator__price" v-if="active">
      {{ price }} {{ currency }}
    </div>
    <div class="driver-agregator__action">
      <div class="driver-agregator__edit" v-if="active">
        <svgEdit class="cursor-pointer color-violet" width="20" @click="edit" />
      </div>
      <div class="driver-agregator__add" v-else>
        <app-button color="orange" size="sm" @click="add"
          >подключить</app-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AgregatorType, AgregName } from "@/types/agregator.enum";
import { computed, toRefs } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgEdit from "@/assets/icons/edit.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
interface IProps {
  agregator: AgregName;
  driverId: number;
  [key: string]: any;
}
@Component({
  components: { svgEdit },
  setup(props: IProps, { emit }) {
    const { agregator, driverId } = toRefs<IProps>(props);
    const agregatorItem = computed(() => {
      return AgregatorType[agregator.value];
    });
    const icon = computed(() => agregatorItem.value.icon);
    const name = computed(() => agregatorItem.value.name);
    const edit = () => {
      const { showByName } = useModal();
      showByName(ModalName.changeDriverBalance, {
        props: {
          driverId: driverId.value,
          agregator: agregator.value
        },
        on: {
          send: () => {
            emit('refresh')
          }
        }
      });
      return;
    };
    const add = () => {
      emit("add");
      return;
    };
    return {
      icon,
      name,
      edit,
      add,
    };
  },
})
export default class DriverListItemAgregator extends Vue {
  @Prop(Boolean) active: boolean;
  @Prop(String) agregator: AgregName;
  @Prop([Number, String]) price: string;
  @Prop(Number) driverId: number;

  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.driver-agregator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 1rem;
  border: 1px solid rgba(184, 181, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  @include xs {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    > div {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__icon {
    margin-right: 10px;
  }
  &__name-wrapper {
    display: flex;
    align-items: center;
  }
  &__name {
    color: #3a3535;
    font-size: $fz_xs;
  }
  &__price {
    color: $grey_1;
    font-size: $fz_md;
    font-weight: 500;
  }
  &__edit {
    color: $violet;
  }
}
</style>