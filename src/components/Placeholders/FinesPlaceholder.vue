<template>
  <page-placeholder class="fines-placeholder">
    <template #image>
      <img src="@/assets/img/fines_placeholder.png" alt="image" />
    </template>
    <template #text>
      Система не обнаружила штрафов ГИБДД полученных вашими водителями или
      транспортные средства еще не добавлены
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class FinesPlaceholder extends Vue {}
</script>

<style lang="scss">
.fines-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/driver_applys_connect_bg.png) right bottom no-repeat;
    background-size: 340px auto;
  }
}
</style>