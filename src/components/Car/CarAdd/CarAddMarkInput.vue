<template>
  <div>
    <app-select
      v-bind="$attrs"
      v-on="$listeners"
      :options="options"
      :selectLabel="'name'"
      :reduce="(item) => item.name"
      @search="onSearch"
    />
  </div>
</template>

<script lang="ts">
import AppSelect from "../../AppSelect.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import { useApiGetSuggestionMark } from "@/api/car";

@Component({
  components: { AppSelect },
  setup() {
    const { exec: searchItems, error, result } = useApiGetSuggestionMark();
    const options = computed(() => result.value || []);
    const onSearch = async (search: string) => {
      if (!search) return;
      await searchItems({ name: search });
      return options.value;
    };
    return { options, onSearch };
  },
})
export default class CarAddMarkInput extends Vue {}
</script>

<style lang="scss">
</style>