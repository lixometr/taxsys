<template>
  <div class="driver-applys-filters">
    <app-button
      class="driver-applys-filters__btn"
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
        key: "connect",
        name: "Подключение",
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
export default class DriverApplysFilters extends Vue {
  @Prop(String) value: string;
}
</script>

<style lang="scss">
.driver-applys-filters {
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