<template>
  <page-placeholder class="driver-list-connect-placeholder" :full="true">
    <template #image>
      <img src="@/assets/img/driver_list_connect.png" alt="image" />
    </template>
    <template #text>
      После выполнения первой поездки водители будет перемещен со страницы
      заявки водителей на данную страницу.
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class DriverListConnectPlaceholder extends Vue {}
</script>

<style lang="scss">
.driver-list-connect-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/driver_list_connect_bg.png) left bottom
      no-repeat;
    background-size: 530px auto;
  }
  .page-placeholder__image {
    margin-right: 70px;
  }
}
</style>