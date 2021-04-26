<template>
  <div
    class="cd-rent-filters-select"
    :class="{ open: isOpen }"
    v-click-outside="close"
  >
    <div class="cd-rent-filters-select__header color-graphit" @click="toggle">
      <span> {{ activeName }}</span>
      <svgArrowDown class="" />
    </div>
    <div class="cd-rent-filters-select__body" v-if="isOpen">
      <div
        class="cd-rent-filters-select__option"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option.value)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, toRefs } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgArrowDown from "@/assets/icons/arrow_down.svg";
interface IProps {
  [key: string]: any;
  value: string;
}
@Component({
  components: { svgArrowDown },
  setup(props: IProps, { emit }) {
    const { value } = toRefs(props);

    const isOpen = ref(false);
    const options = computed(() => {
      return [
        {
          name: "По возрастанию цены",
          value: "asc",
        },
        {
          name: "По убыванию цены",
          value: "По возрастанию1 цены",
        },
        {
          name: "По возрастанию цены",
          value: "По возрастанию 2цены",
        },
      ];
    });
    const activeName = computed(() => {
      const activeItem = options.value.find((opt) => opt.value === value.value);
      return activeItem?.name;
    });
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };
    const close = () => {
      isOpen.value = false;
    };
    const selectOption = (newVal: string) => {
      emit("input", newVal);
      close();
    };
    return { options, activeName, selectOption, close, isOpen, toggle };
  },
})
export default class CdRentFiltersSelect extends Vue {
  @Prop(String) value: string;
}
</script>

<style lang="scss">
.cd-rent-filters-select {
  min-width: 200px;
  position: relative;
  &.open {
    .cd-rent-filters-select__header {
      svg {
        transform: rotate(180deg);
      }
    }
  }
  &__header {
    cursor: pointer;
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
    svg {
      transition: $transition;
    }
  }
  &__body {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -15px;
    transform: translateY(100%);
    background: $white;
    padding: 0.3rem 0;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  }
  &__option {
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: $grey_2;
    &:hover {
      background: $purple;
      color: $white;
    }
  }
}
</style>