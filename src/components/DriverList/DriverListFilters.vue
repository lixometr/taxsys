<template>
  <div class="driver-list-filters filter-btns">
    <app-button
      class="filter-btns__btn"
      :active="item.key === value"
      :size="'sm'"
      color="purple"
      :stroke="true"
      v-for="(item, idx) in filters"
      :key="idx"
      @click="selectItem(item)"
    >
      {{ item.name }}
    </app-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed } from "@vue/composition-api";
@Component({
  setup(props, { emit }) {
    const filters = [
      {
        key: "park",
        name: "Парк",
      },
      {
        key: "rent",
        name: "Аренда",
      },
    ];

    const selectItem = (item) => {
      emit("input", item.key);
    };
    return { filters, selectItem };
  },
})
export default class DriverListFilters extends Vue {
  @Prop(String) value: string;
}
</script>

<style lang="scss">

</style>