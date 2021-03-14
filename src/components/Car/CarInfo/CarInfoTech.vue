<template>
  <div class="car-info-tech">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Тех. обслуживение</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col-lg-4">
          <div class="row align-items-center">
            <div class="col-6">Напоминать о ТО</div>
            <div class="col-6"><app-switcher v-model="remind" /></div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-8">
          <app-button color="bold-purple" :stroke="true" size="sm"
          @click="addRecord"
            >Добавить запись о ТО <svgPlus class="ml-10"
          /></app-button>
        </app-accardion-col>
        <app-accardion-col class="col-12">
          <div class="car-info-tech__item"  v-for="(itm, idx) in 3" :key="idx">
            <div class="row">
              <div class="col-xl-2 car-info-tech__item-col">
                <span class="color-grey-3">Дата</span>
                <span class=" color-grey-2">10.12.2029</span>
              </div>
              <div class="col-xl-2 car-info-tech__item-col">
                <span class="color-grey-3">Пробег:</span>
                <span class=" color-grey-2">250 000 км</span>
              </div>
              <div class="col-xl-8 car-info-tech__item-col">
                <span class="color-grey-3">Список проведенных работ:</span>
                <span class="color-grey-2"
                  >Замена масла; Замена воздушного фильтра; Замена маслянного
                  фильтра;
                </span>
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
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
@Component({
  setup() {
    const remind = ref(false);
    const addRecord = () => {
      const {showByName} = useModal()
      showByName(ModalName.addCarRecord)
    }
    return {
      addRecord,
      remind,
    };
  },
  components: { CarInfoTrackerForm, svgPlus },
})
export default class CarInfoTech extends Vue {}
</script>

<style lang="scss">
.car-info-tech {
  &__item {
    padding: 2.5rem 0;
    border-bottom: 1px solid #f2f2f2;
    &:last-child {
      border-bottom: none;
    }
    &-col {
      display: flex;
      > span {
        &:last-child {
          margin-left: 10px;
          @include xs {
            margin-left: 0;
          }
        }
      }
      @include lg {
        margin-bottom: 10px;
      }
      @include xs {
        flex-direction: column;
      }
    }
  }
}
</style>