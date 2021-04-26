<template>
  <div class="app-card cd-rent-filters">
    <div class="color-purple cd-rent-filters__title">Фильтры</div>
    <cd-rent-filters-select v-model="filtersModel" />
  </div>
</template>

<script lang="ts">
import CdRentFiltersSelect from "./CdRentFiltersSelect.vue";
import AppSelect from "../AppSelect.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed } from "@vue/composition-api";

@Component({
  components: { AppSelect, CdRentFiltersSelect },
  computed: {
    filtersModel: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
})
export default class CDRentFilters extends Vue {
  @Prop(String) value: string;
}
</script>

<style lang="scss">
.cd-rent-filters {
  padding: 1.8rem 2rem;
  display: flex;
  align-items: center;
  @include sm {
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    margin-right: 20px;
    @include sm {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
}
</style>