<template>
  <div class="header-search">
    <input
      class="header-search__input"
      type="text"
      v-model="search.value.value"
      @keypress.enter="onSubmit"
    />
    <div class="header-search__btn" @click.prevent="onSubmit">
      <svgSearch />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgSearch from "@/assets/icons/search.svg";
import useField from "@/compositions/validators/useField";
@Component({
  components: {
    svgSearch,
  },
  setup() {
    const search = useField("", [], {});
    const onSubmit = async () => {
      return;
    };
    return {
      search,
    };
  },
})
export default class HeaderSearch extends Vue {}
</script>

<style lang="scss">
.header-search {
  display: flex;
  position: relative;
  &__btn {
    color: $purple;
    position: absolute;
    left: 20px;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
  }
  &__input {
    background: $white;
    border-radius: 20px;
    padding-left: 5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    outline: none;
    border: none;
    font-size: $fz_sm;
  }
}
</style>