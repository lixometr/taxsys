<template>
  <div class="agregator-filters">
    <app-button
      class="agregator-filters__btn"
      :active="agregator.key === value"
      :size="'sm'"
      color="purple"
      :stroke="true"
      v-for="(agregator, idx) in agregators"
      :key="idx"
      @click="selectItem(agregator)"
    >
      {{ agregator.name }}
    </app-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgregatorType } from "@/types/agregator.enum";
import { computed } from "@vue/composition-api";
import { useApiGetAgregators } from "@/api/agregators";
@Component({
  setup(props, { emit }) {
    const { exec: fetchItems, result, error } = useApiGetAgregators();
    fetchItems();
    const activeAgregators = computed<any>(() => result.value || []);
    const agregators = computed(() => {
      let items = Object.keys(AgregatorType).map((key) => ({
        key,
        ...AgregatorType[key],
      }));

      items = items.filter((item) => activeAgregators.value.includes(item.key));
      items.push({
        key: "all",
        name: "Все",
      });
      return items;
    });
    const selectItem = (agregator) => {
      emit("input", agregator.key);
    };
    return { AgregatorType, agregators, selectItem };
  },
})
export default class AgregatorFilters extends Vue {
  @Prop(String) value: string;
}
</script>

<style lang="scss">
.agregator-filters {
  &__btn {
    text-transform: none;
    margin-right: 2rem;
    @include sm {
      margin-top: 1rem;
    }
    &:last-child {
      margin-right: 0;

     
    }
  }
}
</style>