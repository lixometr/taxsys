<template>
  <page-placeholder class="antifraud-placeholder" :full="true">
    <template #image>
      <img src="@/assets/img/antifraud_placeholder.png" alt="image" />
    </template>
    <template #text>
      Пока не добавлена интеграция с диспетчерской агрегатора такси — действуют
      централизованные настройки антифрода
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class AntifraudPlaceholder extends Vue {}
</script>

<style lang="scss">
.antifraud-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/driver_applys_connect_bg.png) right bottom
      no-repeat, url(~@/assets/img/antifraud_bg_1.png) left top no-repeat;
    background-size: 300px auto;
  }
  .page-placeholder__image {
  }
}
</style>