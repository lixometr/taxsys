<template>
  <settings-top-bar-item
    class="settings-topbar__application settings-topbar-item--pink"
  >
    <template #title>
      <div>Плата за приложение</div>
      <div class="font-xs font-weight-normal">Списание с водителя</div>
    </template>
    <template #name> 5 ₽ <span class="font-sm font-weight-normal">/ в сутки</span> </template>
    <template #subname> с первого заказ </template>
    <template #icon> <svgCoin /> </template>
    <template #action>
      <app-switcher class="settings-topbar-switcher" v-model="checked" />
    </template>
  </settings-top-bar-item>
</template>

<script lang="ts">
import SettingsTopBarItem from "./SettingsTopBarItem.vue";
import { Component, Vue } from "vue-property-decorator";

import svgCoin from "@/assets/icons/money_coin.svg";
@Component({
  components: { SettingsTopBarItem, svgCoin },
})
export default class SettingsTopBarApplication extends Vue {
  checked = false;
}
</script>

<style lang="scss">

</style>