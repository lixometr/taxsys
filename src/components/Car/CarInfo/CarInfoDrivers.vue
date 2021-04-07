<template>
  <div class="car-info-drivers">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Список водителей</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col-12 pt-0">
          <div
            class="car-info-drivers__item"
            v-for="(driver, idx) in drivers"
            :key="idx"
          >
            <div class="row" >
              <div class="col-xl-4 car-info-drivers__item-col">
                <div>ФИО:</div>
                <div>{{ driver.fio }}</div>
              </div>
              <div class="col-xl-4 car-info-drivers__item-col">
                <div>Начало аренды:</div>
                <div>
                  <span>{{ driver.startRent | dateTime }}</span>
                </div>
              </div>
              <div
                class="col-xl-4 car-info-drivers__item-col"
                v-if="driver.endRent"
              >
                <div>Завершение аренды:</div>
                <div>{{ driver.endRent | dateTime }}</div>
              </div>
            </div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import CarInfoTrackerForm from "./CarInfoTrackerForm.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ref, toRefs } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import AppStatus from "@/components/AppStatus.vue";
import { Car } from "@/models/car.entity";
interface IProps {
  [key: string]: any;
  item: Car;
}
@Component({
  setup(props: IProps) {
    const { item } = toRefs(props);
    const autoFines = ref(false);
    const addRecord = () => {
      const { showByName } = useModal();
      showByName(ModalName.addCarRecord);
    };
    return {
      addRecord,
      autoFines,
    };
  },
  components: { CarInfoTrackerForm, svgPlus, AppStatus },
})
export default class CarInfoDrivers extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: Car;
  get currency() {
    return this.$store.getters.currency;
  }
  get drivers() {
    return this.item.history?.map((historyItem, idx) => {
      let endRent = null;
      let currentItem = {
        fio: historyItem.details?.fio,
        startRent: historyItem.created_at,
        details: historyItem.details
      };
      if (this.item.history.length - 1 !== idx) {
        endRent = this.item.history[idx + 1].created_at;
      }
      return {
        ...currentItem,
        endRent,
      };
    }).filter(item => !!item.details)
  }
}
</script>

<style lang="scss">
.car-info-drivers {
  &__item {
    padding: 2.5rem 0;
    border-top: 1px solid #f2f2f2;

    &-col {
      display: flex;
      align-items: center;
      > div {
        &:first-child {
          margin-right: 15px;
          color: $grey_3;
        }
        &:last-child {
          color: $grey_2;
        }
      }
      @include lg {
        padding-top: 0.75rem;
        padding-bottom: 0.5rem;
      }
    }
  }
}
</style>