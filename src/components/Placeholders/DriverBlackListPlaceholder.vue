<template>
  <page-placeholder class="driver-black-list-placeholder" :full="true">
    <template #image>
      <img src="@/assets/img/driver_black_list.png" alt="image" />
    </template>
    <template #text> Вы пока не добавляли водителей в черный список </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class DriverBlackListPlaceholder extends Vue {}
</script>

<style lang="scss">
.driver-black-list-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/driver_black_list_bg_1.png) left top
        no-repeat,
      url(~@/assets/img/driver_black_list_bg_2.png) right bottom no-repeat;
    background-size: 380px auto, 380px auto;
  }
  .page-placeholder__image {
    margin-right: 70px;
  }
}
</style>