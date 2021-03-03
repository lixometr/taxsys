<template>
  <div class="register-title-back">
    <svgArrowLeft class="cursor-pointer" width="18" @click="goBack" />
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgArrowLeft from "@/assets/icons/stroke-arrow-left.svg";
@Component({
  setup(props, { emit }) {
    const goBack = () => {
      emit("back");
    };
    return {
      goBack,
    };
  },
  components: {
    svgArrowLeft,
  },
})
export default class ReigsterTitleBack extends Vue {
  @Prop(String) title: string;
}
</script>

<style lang="scss">
.register-title-back {
  display: flex;
  align-items: center;
  svg {
    margin-right: 25px;
    flex-shrink: 0;
  }
}
</style>