<template>
  <div class="search-input" :style="inpStyles">
    <svgSearch
      @click="search"
      width="22"
      class="search-input__icon cursor-pointer"
    />
    <input
      v-on="_listeners"
      v-bind="_attrs"
      type="text"
      @keypress.enter="search"
    />
  </div>
</template>

<script lang="ts">
import { Component, Model, ModelSync, Prop, Vue } from "vue-property-decorator";
import svgSearch from "@/assets/icons/search.svg";
import { string } from "yup";
import { toRefs } from "@vue/composition-api";
interface IProps {
  value: string;
  [key: string]: any;
}
@Component({
  setup(props: IProps, { emit }) {
    const { value } = toRefs<IProps>(props);
    const search = () => {
      emit("search", value.value);
    };
    return {
      search,
    };
  },
  components: {
    svgSearch,
  },
})
export default class SearchInput extends Vue {
  @Prop(String) value: string;
  @Prop(String) width: string;
  @Prop(String) height: string;

  get inpStyles() {
    return {
      width: this.width + "px",
      height: this.height + "px",
    };
  }
  onInput(e) {
    this.$emit("input", e.target.value);
  }
  get _listeners() {
    return Object.assign({}, this.$listeners, { input: this.onInput });
  }
  get _attrs() {
    return Object.assign({}, this.$attrs, { value: this.value });
  }
}
</script>

<style lang="scss">
.search-input {
  position: relative;
  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    color: $purple;
  }
  input {
    padding: 1rem 2rem;
    padding-left: 5rem;
    border-radius: 100px;
    border: 1px solid #8f8aff;
    box-sizing: border-box;
    background: $white;
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
  }
}
</style>