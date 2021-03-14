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
          <car-info-payoff-form />
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
                    v-model="payHours"
                    :showErrors="false"
                  />
                  <span>{{ hourPaySclon }}</span></span
                >
                <app-switcher
                  class="car-info-payoff__turn-switcher"
                  v-model="activePayHours"
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
                    v-model="blockHours"
                    :showErrors="false"
                  />
                  <span>{{ hourBlockSclon }}</span></span
                >
                <app-switcher
                  class="car-info-payoff__turn-switcher"
                  v-model="activeBlockHours"
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
import CarInfoPayoffForm from './CarInfoPayoffForm.vue'
import AppImage from "../../AppImage.vue";
import CarInfoTrackerForm from "./CarInfoTrackerForm.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import AppStatus from "@/components/AppStatus.vue";
import useWordSclon from "@/compositions/useWordSclon";
@Component({
  setup() {
    const activeBlockHours = ref(false);
    const activePayHours = ref(false);
    const payHours = ref("3");
    const blockHours = ref("3");
    const addRecord = () => {
      const { showByName } = useModal();
      showByName(ModalName.addCarRecord);
    };
    const { exec } = useWordSclon(["час", "часа", "часов"]);
    const hourPaySclon = computed(() => exec(+payHours.value));
    const hourBlockSclon = computed(() => exec(+blockHours.value));
    return {
      hourPaySclon,
      hourBlockSclon,
      addRecord,
      activePayHours,
      activeBlockHours,
      payHours,
      blockHours,
    };
  },
  components: { CarInfoTrackerForm, svgPlus, AppStatus, AppImage, CarInfoPayoffForm },
})
export default class CarInfoPayoff extends Vue {
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