<template>
  <settings-top-bar-item class="settings-topbar__driver-check settings-topbar-item--pink">
    <template #title> Проверка водителя </template>
    <template #name> 20 ₽ </template>
    <template #subname> отчет </template>
    <template #icon> <svgDriverCheck /> </template>
    <template #action>
      <app-switcher class="settings-topbar-switcher" v-model="checked" />
    </template>
  </settings-top-bar-item>
</template>

<script lang="ts">
import SettingsTopBarItem from "./SettingsTopBarItem.vue";
import { Component, Vue } from "vue-property-decorator";

import svgDriverCheck from "@/assets/icons/driver_check.svg";
@Component({
  components: { SettingsTopBarItem, svgDriverCheck },
})
export default class SettingsTopBarDriverCheck extends Vue {
  checked = false;
}
</script>

<style lang="scss">

</style>