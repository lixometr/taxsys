<template>
  <div class="fines-filters filter-btns">
    <app-button
      class="filter-btns__btn"
      :active="item.key === value"
      :size="'sm'"
      color="purple"
      :stroke="true"
      v-for="(item, idx) in items"
      :key="idx"
      @click="selectItem(item)"
    >
      {{ item.name }}
    </app-button>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  setup(props, { emit }) {
    const items = computed(() => {
      return [
        {
          name: "Парковые",
          key: "park",
        },
        {
            name: 'Привлеченные',
            key: 'not_park'
        },
        
      ];
    });
    const selectItem = (item: any) => {
      emit("input", item.key);
    };
    return { items, selectItem };
  },
})
export default class FinesFilters extends Vue {
  @Prop(String) value: string;
}
</script>

<style >
</style>