<template>
  <div class="page-filters-calendar filters-calendar">
    <div class="filters-calendar__icon">
      <svgCalendar />
    </div>
    <div class="filters-calendar__text color-grey-3 font-sm">Период:</div>
    <div
      class="filters-calendar__date cursor-pointer color-purple"
      @click="toggleCalendar"
    >
      {{ date.start | moment("DD.MM.YYYY") }} -
      {{ date.end | moment("DD.MM.YYYY") }}
    </div>
    <div
      class="filters-calendar__calendar"
      v-if="isCalendarOpen"
      v-click-outside="closeCalendar"
    >
      <v-date-picker mode="date" v-model="date" is-range> </v-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgCalendar from "@/assets/icons/calendar.svg";
import { ref, toRefs, watch } from "@vue/composition-api";
@Component({
  components: {
    svgCalendar,
  },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const date = ref(value.value || {});
    watch(date, () => {
      emit("input", date.value);
    });
    const isCalendarOpen = ref(false);
    const closeCalendar = () => {
      isCalendarOpen.value = false;
    };
    const toggleCalendar = () => {
      isCalendarOpen.value = !isCalendarOpen.value;
    };
    return {
      date,
      isCalendarOpen,
      toggleCalendar,
      closeCalendar,
    };
  },
})
export default class PageFiltersCalendar extends Vue {
  @Prop(Object) value: any
}
</script>

<style lang="scss">
.filters-calendar {
  display: flex;
  align-items: center;
  position: relative;
  &__icon {
    margin-right: 10px;
  }
  &__text {
    margin-right: 15px;
  }
  &__calendar {
    position: absolute;
    left: 100px;
    bottom: 0;
    transform: translateY(100%);
    z-index: 20;
  }
}
</style>