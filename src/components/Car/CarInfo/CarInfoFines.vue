<template>
  <div class="car-info-fines">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Штрафы</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col-xl-6">
          <div class="row align-items-center">
            <div class="col">Автоматичесая оплата штрафов</div>
            <div class="col"><app-switcher v-model="autoFines" /></div>
          </div>
        </app-accardion-col>

        <app-accardion-col class="col-12">
          <div class="car-info-fines__item" v-for="(itm, idx) in 3" :key="idx">
            <div class="row">
              <div class="col-xl-4 car-info-fines__item-col">
                Постановление №: 293293293293293
              </div>
              <div class="col-xl-2 car-info-fines__item-col">14.15.2020</div>
              <div class="col-xl-2 car-info-fines__item-col">12,5 часть 1</div>
              <div class="col-xl-2 car-info-fines__item-col">
                1277.50 {{ currency }}
              </div>
              <div class="col-xl-2 car-info-fines__item-col">
                <app-status size="sm" color="green" :stroke="true"
                  >оплачен</app-status
                >
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
import AppStatus from "@/components/AppStatus.vue";
@Component({
  setup() {
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
export default class CarInfoFines extends Vue {
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.car-info-fines {
  &__item {
    padding: 2.5rem 0;
    border-top: 1px solid #f2f2f2;

    &-col {
      display: flex;
      align-items: center;
      @include lg {
        padding-top: 0.75rem;
        padding-bottom: 0.5rem;
      }
    }
  }
}
</style>