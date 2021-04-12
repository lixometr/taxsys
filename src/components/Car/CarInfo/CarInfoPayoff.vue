<template>
  <div class="car-info-payoff">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Условия и списания</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col-12">
          <car-info-payoff-form :item="item"/>
        </app-accardion-col>
        <app-accardion-col class="col-12">
          <div class="row">
            <div class="col-xl-6">
              <div class="car-info-payoff__turn">
                <span> Списывать оплату за автомобиль в </span>
                <span>
                  <app-input
                    class="car-info-payoff__turn-input text-center"
                    width="50px"
                    :inline="true"
                    :value="payHours"
                    @input="payHoursChange"
                    :showErrors="false"
                  />
                  <span>{{ hourPaySclon }}</span></span
                >
                <app-switcher
                  class="car-info-payoff__turn-switcher"
                  :value="payHoursActive"
                  @input="payHoursChange"
                />
              </div>
            </div>
            <div class="col-xl-6">
              <div class="car-info-payoff__turn">
                <span>
                  Блокировать автомобиль при неудачном списании через
                </span>
                <span>
                  <app-input
                    class="car-info-payoff__turn-input text-center"
                    width="30px"
                    :inline="true"
                    :value="blockHours"
                    @input="blockHoursChange"
                    :showErrors="false"
                  />
                  <span>{{ hourBlockSclon }}</span></span
                >
                <app-switcher
                  class="car-info-payoff__turn-switcher"
                  :value="blockHoursActive"
                  @input="blockHoursChange"
                />
              </div>
            </div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import CarInfoPayoffForm from "./CarInfoPayoffForm.vue";
import AppImage from "../../AppImage.vue";
import CarInfoTrackerForm from "./CarInfoTrackerForm.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed, ref, toRefs } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import AppStatus from "@/components/AppStatus.vue";
import useWordSclon from "@/compositions/useWordSclon";
import { useCarInfoInteger } from "./car-info-toggler-model";
import { Car } from "@/models/car.entity";
interface IProps {
  [key: string]: any;
  item: Car;
}
@Component({
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const activeBlockHours = ref(false);
    const activePayHours = ref(false);
    const {
      booleanItem: payHoursActive,
      intItem: payHours,
      onChange: payHoursChange,
    } = useCarInfoInteger({
      field: "auto_charge",
      item,
      onUpdate: () => emit("refresh"),
    });
    const {
      booleanItem: blockHoursActive,
      intItem: blockHours,
      onChange: blockHoursChange,
    } = useCarInfoInteger({
      field: "auto_block",
      item,
      onUpdate: () => emit("refresh"),
    });
    const addRecord = () => {
      const { showByName } = useModal();
      showByName(ModalName.addCarRecord);
    };
    const { exec } = useWordSclon(["час", "часа", "часов"]);
    const hourPaySclon = computed(() => exec(+payHours.value));
    const hourBlockSclon = computed(() => exec(+blockHours.value));

    return {
      blockHoursActive,
      blockHoursChange,
      payHoursActive,
      payHoursChange,
      hourPaySclon,
      hourBlockSclon,
      addRecord,
      activePayHours,
      activeBlockHours,
      payHours,
      blockHours,
    };
  },
  components: {
    CarInfoTrackerForm,
    svgPlus,
    AppStatus,
    AppImage,
    CarInfoPayoffForm,
  },
})
export default class CarInfoPayoff extends Vue {
  @Prop({type: Object, default: () => ({})}) item: Car;
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.car-info-payoff {
  &__turn {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @include sm {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    &-input {
      margin-left: 15px;
      margin-right: 5px;
      @include sm {
        margin-left: 0;
      }
    }
    &-switcher {
      margin-left: 15px;
      @include sm {
        margin-left: 0;
        margin-top: 15px;
      }
    }
  }
}
</style>