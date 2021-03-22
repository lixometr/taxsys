<template>
  <page-placeholder class="driver-applys-connect-placeholder" :full="true">
    <template #image>
      <img src="@/assets/img/driver_applys_connect.png" alt="image" />
    </template>
    <template #text>
      В заявках водителей отображаются новые водители, которые были добавлены
      парком, зарегистрировались на вашем сайте с помощью бесплатного виджета
      или через брендированное приложение.
      <div class="mt-10 font-500">
        После выполнения первого заказа водитель перемещается в список водителей
      </div>
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PagePlaceholder },
})
export default class DriverApplysConnectPlaceholder extends Vue {}
</script>

<style lang="scss">
.driver-applys-connect-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/driver_applys_connect_bg.png) right bottom
      no-repeat;
    background-size: 440px auto;
  }
  .page-placeholder__image {
    margin-right: 70px;
  }
}
</style>