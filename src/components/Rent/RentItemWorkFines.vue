<template>
  <div class="rent-item-work__fines" :class="{ open: isOpen }">
    <div
      class="color-grey-3 font-500 mb-15 rent-item-work__fines-title cursor-pointer"
      @click="toggle"
    >
      Списание аренды и штрафов: <svgArrowBottom class="ml-10" />
    </div>
    <div v-if="isOpen">
      <div
        class="row rent-item-work__fines-item"
        v-for="(item, idx) in 5"
        :key="idx"
      >
        <div class="col-xl-3 rent-item-work__fines-col">28.03.2020</div>
        <div class="col-xl-2 rent-item-work__fines-col">Аренда</div>
        <div class="col-xl-2 rent-item-work__fines-col">3000 / 6000 ₽</div>
        <div class="col-xl-5 rent-item-work__fines-col">
          <div class="rent-item-work__fines-actions">
            <app-button color="orange" :stroke="true" size="sm"
              >проставить оплату</app-button
            >
            <app-button color="orange" size="sm">Списать с депозита</app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Car } from "@/models/car.entity";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgArrowBottom from "@/assets/icons/select_arrow.svg";
import { ref } from "@vue/composition-api";
@Component({
  components: { svgArrowBottom },
  setup() {
    const isOpen = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      toggle,
      isOpen,
    };
  },
})
export default class RentItemWorkFines extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: Car;
  get items() {
    return [];
  }
}
</script>

<style lang="scss">
.rent-item-work__fines {
  &.open {
    .rent-item-work__fines-title {
      svg {
        transform: rotate(0);
      }
    }
  }
  &-title {
    display: flex;
    align-items: center;
    svg {
      transform: rotate(-90deg);
    }
  }
  &-item {
    padding: 2rem 0;
    border-bottom: 1px solid #f2f2f2;
  }
  &-actions {
    display: flex;
    @include sm {
      flex-direction: column;
    }
    .btn {
      &:first-child {
        margin-right: 15px;
        @include sm {
          margin-right: 0;
          margin-bottom: 15px;
        }
      }
    }
  }
  &-col {
    @include lg {
      margin-bottom: 15px;
    }
  }
}
</style>
