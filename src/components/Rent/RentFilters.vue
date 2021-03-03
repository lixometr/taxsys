<template>
  <div class="rent-filters">
    <app-chooser :value="value" :items="items" @input="selectItem" />
  </div>
</template>

<script lang="ts">
import PageFilters from "../Page/PageFilters.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed } from "@vue/composition-api";

@Component({
  setup(props, { emit }) {
    const items = [
      {
        value: "free",
        name: "Свободные",
      },
      {
        value: "work",
        name: "В работе",
      },
    ];
    const selectItem = (value: string) => {
      emit("input", value);
    };
    return { items, selectItem };
  },
  components: { PageFilters },
})
export default class RentFilters extends Vue {
  @Prop(String) value: string;
}
</script>

<style lang="scss">
</style>