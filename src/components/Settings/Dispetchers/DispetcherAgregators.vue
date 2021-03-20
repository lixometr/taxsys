<template>
  <div class="dispetcher-agregators">
    <agregator-badge
      class="dispetcher-agregators__item"
      v-for="(agregator, idx) in agregators"
      :key="idx"
      :type="agregator.key"
      :class="{ active: agregator.key === value }"
      @click.native="selectItem(agregator.key)"
    >
    </agregator-badge>
  </div>
</template>

<script lang="ts">
import AgregatorBadge from "../../AgregatorBadge.vue";
import AppIcon from "../../AppIcon.vue";
import { AgregatorType } from "@/types/agregator.enum";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { AppIcon, AgregatorBadge },
  setup(props, { emit }) {
    const agregators = Object.keys(AgregatorType).map((key) => ({
      key,
      ...AgregatorType[key],
    }));
    const selectItem = (name: string) => {
      emit("input", name);
    };
    return {
      agregators,
      selectItem,
    };
  },
})
export default class AddDispetcherAgregators extends Vue {
  @Prop(String) value: string;
}
</script>

<style lang="scss">
.dispetcher-agregators {
  display: flex;
  justify-content: center;
  @include sm {
    flex-direction: column;
    align-items: flex-start;
  }
  &__item {
    margin: 0 20px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid transparent;
    @include sm {
      margin: 10px 0;
    }
    &.active {
      border: 1px solid #b8b5ff;
    }
  }
}
</style>