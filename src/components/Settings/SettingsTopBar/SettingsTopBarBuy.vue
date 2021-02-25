<template>
  <settings-top-bar-item class="settings-topbar__buy settings-topbar-item--purple">
    <template #title> Брендированное приложение </template>
    <template #name> Покупка </template>
    <template #subname> 200 000 ₽</template>
    <template #icon> <svgCheck /> </template>
    <template #action>
      <app-button
        class="settings-topbar-item__btn"
        size="sm"
        color="orange-grad"
        >Купить</app-button
      >
    </template>
  </settings-top-bar-item>
</template>

<script lang="ts">
import SettingsTopBarItem from "./SettingsTopBarItem.vue";
import { Component, Vue } from "vue-property-decorator";

import svgCheck from "@/assets/icons/check-square.svg";
@Component({
  components: { SettingsTopBarItem, svgCheck },
})
export default class SettingsTopBarBuy extends Vue {}
</script>

<style lang="scss">

</style>