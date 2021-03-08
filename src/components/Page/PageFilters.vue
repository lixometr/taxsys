<template>
  <div class="page-filters">
    <div class="page-filters__row">
      <page-filters-calendar
        class="page-filters__calendar"
        v-model="date"
        v-if="showCalendar"
      />
      <div class="page-filters__items" v-if="$slots.filters">
        <slot name="filters" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PageFiltersCalendar from "./PageFilters/PageFiltersCalendar.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ref, toRefs, watch } from "@vue/composition-api";

@Component({
  components: { PageFiltersCalendar },
  setup(props, { emit }) {
    const { calendar } = toRefs(props);
    const date = ref(calendar.value);
    watch(date, () => {
      emit("update:calendar", date.value);
    });
    return { date };
  },
})
export default class PageFilters extends Vue {
  @Prop({ type: Boolean, default: true }) showCalendar: boolean;
  @Prop(Object) calendar: any;
}
</script>

<style lang="scss">
.page-filters {
  background: $white;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1.6rem 2rem;
  margin-top: 3rem;
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include md {
      flex-direction: column;
      align-items: stretch;
    }
  }
  &__calendar {
  }
  &__items {
    @include md {
      margin-top: 2rem;
    }
  }
}
</style>