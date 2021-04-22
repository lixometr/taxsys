<template>
  <div>
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
        v-for="(item, idx) in 3"
        :key="idx"
        :index="idx"
        class="cd-finances-agregators__slide"
      >
        <cd-finances-agregator class="cd-finances-agregators__item" />
      </Slide>
    </Carousel3d>
    <div class="cd-finances-agregators" v-else>
      <cd-finances-agregator
        class="cd-finances-agregators__item"
        v-for="(item, idx) in 3"
        :key="idx"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CdFinancesAgregator from "./CdFinancesAgregator.vue";
import { Component, Vue } from "vue-property-decorator";
import { Carousel3d, Slide } from "vue-carousel-3d";
import { ref } from "@vue/composition-api";

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
    return {
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