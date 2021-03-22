<template>
  <page-placeholder class="suspicious-travels-placeholder">
    <template #image>
      <img src="@/assets/img/suspicious_image.png" alt="image" />
    </template>

    <template #text>
      Наша система пока не обнаружила подозрительных поездок ваших водителей
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class SuspiciousItemsPlaceholder extends Vue {}
</script>

<style lang="scss">
.suspicious-travels-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/suspicious_bg.png) right top no-repeat;
    background-size: 340px auto;
  }
}
</style>