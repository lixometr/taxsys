<template>
  <app-select
    class="autocomplete-select"
    :class="{ 'not-searched': !isSearched }"
    v-bind="$attrs"
    v-on="$listeners"
    :options="options"
    @search="onSearch"
  >
  </app-select>
</template>

<script lang="ts">
import AppSelect from "./AppSelect.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed, ref, toRefs } from "@vue/composition-api";
import { useApiGetSuggestionMark } from "@/api/car";
interface IProps {
  [key: string]: any;
  searchFunc: Function;
  makeOptions: Function;
  makeRequest: Function;
}
@Component({
  components: { AppSelect },
  setup(props: IProps) {
    const { searchFunc, makeOptions, makeRequest } = toRefs<IProps>(props);
    const isSearched = ref(false);
    const { exec: searchItems, result } = searchFunc.value();

    const options = computed(() => makeOptions.value(result.value) || []);
    const onSearch = async (search: string) => {
      if (!search) return;
      await searchItems(makeRequest.value({ search }));
      isSearched.value = true;
      return options.value;
    };
    return { options, onSearch, isSearched };
  },
})
export default class AutoCompleteSelect extends Vue {
  @Prop(Function) searchFunc: Function;
  @Prop({
    type: Function,
    default: (result) => result,
  })
  makeOptions: Function;
  @Prop({
    type: Function,
    default: ({ search }) => ({ name: search }),
  })
  makeRequest: Function;
}
</script>

<style lang="scss">
.autocomplete-select {
  &.not-searched {
    .vs__dropdown-menu {
      display: none;
    }
  }
}
</style>