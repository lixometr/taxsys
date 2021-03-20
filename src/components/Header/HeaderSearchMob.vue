<template>
  <div class="header-search--mob cursor-pointer">
    <svgSearch @click="onSearch" width="20"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgSearch from "@/assets/icons/search.svg";
@Component({
  components: {
    svgSearch,
  },
  setup() {
    const onSearch = () => {
      return;
    };
    return {
      onSearch,
    };
  },
})
export default class HeaderSearch extends Vue {}
</script>

<style lang="scss">
.header-search--mob {
  display: flex;
  flex: 1;
  &__btn {
    color: $white;
    cursor: pointer;
  }
  svg {
    path {
      fill: $white;
    }
  }
}
</style>