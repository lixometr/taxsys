<template>
  <div class="header-taxy-balance header-rounded-label">
    <span class="header-rounded-label__title">TAXSYS: </span>
    <span class="header-rounded-label__value">
      1 000 859 ₽ <svgPlus class="cursor-pointer" @click="changeBalance"
    /></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/plus-circle.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
@Component({
  components: {
    svgPlus,
  },
  setup() {
    const changeBalance = () => {
      const { showByName } = useModal();
      showByName(ModalName.changeBalance, {props: {action: 'put'}});
    };
    return { changeBalance };
  },
})
export default class HeaderTaxyBalance extends Vue {}
</script>

<style lang="scss">
</style>