<template>
  <div class="app-pagination full">
    <app-button
      class="app-pagination__button"
      :stroke="true"
      color="purple"
      @click.prevent="showMore"
    >
      Показать еще
    </app-button>
    <div class="app-pagination-pages">
      <div
        class="app-pagination__left app-pagination__arrow font-0"
        @click="prev"
      >
        <svgArrowRight  class="color-violet"/>
      </div>
      <div class="app-pagination__info">
        <span>{{ page }}</span>
        <span class="app-pagination__info-delimeter">/</span>
        <span>{{ totalPages }}</span>
      </div>
      <div
        class="app-pagination__right app-pagination__arrow font-0"
        @click="next"
      >
        <svgArrowRight class="color-violet"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgArrowRight from "@/assets/icons/arrow-right.svg";
import { Data, ref, toRefs } from "@vue/composition-api";
import useRouter from "@/compositions/useRouter";
interface PaginationProps {
  nowPage: number;
  totalPages: number;
  independent: boolean;
}
@Component({
  components: {
    svgArrowRight,
  },
  setup(props: any, { emit }) {
    const router = useRouter();
    const { nowPage: page, totalPages } = toRefs(props);
    const showMore = () => {
      emit("showMore");
    };
    const getPage = () => {
      return router.currentRoute.query.page;
    };
    const emitPage = (value) => {
      emit("input", value);
    };
    const next = () => {
      emit("next");
      if (page.value >= totalPages) return;
      emitPage(page.value + 1);
    };
    const prev = () => {
      emit("prev");
      if (page.value < 2) return;
      emitPage(page.value - 1);
    };
    return { showMore, next, prev, page };
  },
})
export default class AppPagination extends Vue {
  @Prop(Number) nowPage: number;
  @Prop(Number) totalPages: number;
}
</script>

<style lang="scss">
.app-pagination {
  padding: 4rem 5rem;
  display: flex;
  align-items: center;
  background: $white;
  box-shadow: 15px 10px 50px rgba(0, 0, 0, 0.4);
  user-select: none;
  @include sm {
    flex-direction: column;
    align-items: center;
  }
  &.full {
    margin-left: -20px;
    margin-right: -20px;
  }
  position: relative;
  &__button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    user-select: none;
    @include sm {
      order: 1;
      position: relative;
      left: 0;
      transform: none;
      margin-bottom: 1.5rem;
      display: none;

    }
  }
  &-pages {
    margin-left: auto;
    display: flex;
    align-items: center;
    @include sm {
      order: 2;
      margin-left: 0;
    }
  }
  &__arrow {
    cursor: pointer;
  }
  &__left {
    svg {
      transform: rotate(180deg);
    }
  }
  &__info {
    color: $violet;
    margin: 0 3rem;
    &-delimeter {
      margin: 0 1rem;
    }
  }
}
</style>