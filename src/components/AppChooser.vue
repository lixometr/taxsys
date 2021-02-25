<template>
  <div class="app-chooser">
    <div
      class="app-chooser__item"
      :class="{ active: value === item.value }"
      v-for="item in items"
      :key="item.value"
      tabindex="0"
      @click="selectItem(item)"
    >
      <slot name="item" :item="item">
        {{ item.name }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
interface AppChooserItem {
  name: string;
  value: string;
}
@Component({
  setup(props, { emit }) {
    const selectItem = (item: AppChooserItem) => {
      emit("input", item.value);
    };
    return {
      selectItem,
    };
  },
})
export default class AppChooser extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  items: AppChooserItem[];
  @Prop(String) value: string;
}
</script>

<style lang="scss">
.app-chooser {
  display: flex;
  align-items: stretch;
  &__item {
    padding: 0.3rem 4rem;
    outline: none;
    border: 1px solid $grey;
    color: $grey;
    user-select: none;
    cursor: pointer;
    margin-left: -1px;
    text-align: center;
    flex: 1;
    &:first-child {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      margin-left: 0;
    }
    &:last-child {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;

    }
    &.active {
      background: $grey;
      color: $white;
    }

  }
}
</style>