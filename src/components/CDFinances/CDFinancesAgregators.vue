<template>
  <div v-if="!isLoading">
    <Carousel3d
      class="cd-finances-agregators__slider"
      :perspective="0"
      :border="0"
      :width="259"
      :height="144"
      ref="carousel"
      v-if="showCarousel"
    >
      <Slide
        v-for="(item, idx) in items"
        :key="idx"
        :index="idx"
        class="cd-finances-agregators__slide"
      >
        <cd-finances-agregator
          class="cd-finances-agregators__item"
          :agregator="item.name"
          :balance="item.balance"
          :total="totalBalance"
          @click.native="goToAgregator(item.name)"
        />
      </Slide>
    </Carousel3d>
    <div class="cd-finances-agregators" v-else>
      <cd-finances-agregator
        class="cd-finances-agregators__item"
        v-for="(item, idx) in items"
        :key="idx"
        :agregator="item.name"
        :balance="item.balance"
        :total="totalBalance"
        @click.native="goToAgregator(item.name)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CdFinancesAgregator from "./CdFinancesAgregator.vue";
import { Component, Vue } from "vue-property-decorator";
import { Carousel3d, Slide } from "vue-carousel-3d";
import { computed, ref } from "@vue/composition-api";
import useRouter from "@/compositions/useRouter";
import { AgregatorType } from "@/types/agregator.enum";
import {
  useApiGetAgregatorBalance,
  useApiGetAgregators,
} from "@/api/agregators";
import { errorHandler } from "@/helpers/error-handler";
import useCdAgregators from "./use-cd-agregators";
@Component({
  components: {
    CdFinancesAgregator,
    Carousel3d,
    Slide,
  },
  setup() {
    const carousel = ref(null);
    const showCarousel = ref(false);
    const goToSlide = (idx: number) => {
      if (!carousel.value) return;
      carousel.value.goSlide(idx);
    };
    const checkWindowSize = () => {
      if (window.innerWidth < 968) {
        showCarousel.value = true;
      } else {
        showCarousel.value = false;
      }
    };
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    const goToAgregator = (name: string) => {
      useRouter().push({ name: "CDAgregatorTravels", params: { name } });
    };
    const { items, totalBalance, availableAgregators, isLoading} = useCdAgregators();
    return {
      isLoading,
      totalBalance,
      items,
      goToAgregator,
      showCarousel,
      carousel,
      goToSlide,
    };
  },
})
export default class CDFnancesAgreagators extends Vue {}
</script>

<style lang="scss">
.cd-finances-agregators {
  display: flex;
  justify-content: center;

  &__item {
    margin-right: 25px;
  }
  &__slide {
    background: transparent !important;
    overflow: visible !important;
  }
  &__slider {
    overflow: visible !important;
  }
}
</style>