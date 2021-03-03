<template>
  <div class="rent-item-deposit">
    <div class="rent-item-deposit__header">Депозит 5000 {{ currency }}</div>
    <div class="rent-item-deposit__items">
      <div
        class="rent-item-deposit__item"
        :class="{ active: value === item.value }"
        v-for="(item, idx) in items"
        :key="idx"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  setup(props, { emit }) {
    const items = [
      {
        name: "6 / 1",
        value: "6/1",
      },
      {
        name: "7 / 0",
        value: "7/0",
      },
      {
        name: "Выкуп",
        value: "Выкуп",
      },
    ];
    const selectItem = (item) => {
      emit("input", item.value);
    };
    return {
      items,
      selectItem,
    };
  },
})
export default class RentItemDeposit extends Vue {
  @Prop(String) value: string;
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.rent-item-deposit {
  background: #f2f2f2;
  border-radius: 20px;
  &__header {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    color: $grey_1;
    font-size: $fz_md;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-weight: 600;
  }
  &__items {
    display: flex;
    box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    width: 100%;
  }
  &__item {
    background: #edecff;
    padding: 8px 10px;
    flex: 1;
    text-align: center;
    cursor: pointer;
    &:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    &:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
    &.active {
      background: #8f8aff;
      color: $white;
    }
  }
}
</style>