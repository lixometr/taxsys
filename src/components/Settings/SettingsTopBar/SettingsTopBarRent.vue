<template>
  <settings-top-bar-item class="settings-topbar__rent settings-topbar-item--purple">
    <template #title> Брендированное приложение </template>
    <template #name> Аренда </template>
    <template #subname> 7 000 ₽ </template>
    <template #icon> <svgCheck /> </template>
    <template #action>
      <app-button
        class="settings-topbar-item__btn"
        size="sm"
        color="orange-grad"
        >ОПЛАТИТЬ</app-button
      >
    </template>
  </settings-top-bar-item>
</template>

<script lang="ts">
import SettingsTopBarItem from "./SettingsTopBarItem.vue";
import { Component, Vue } from "vue-property-decorator";
import svgCheck from "@/assets/icons/check-square.svg";

@Component({
  components: {
    svgCheck,
    SettingsTopBarItem,
  },
})
export default class SettingsTopBarRent extends Vue {}
</script>

<style lang="scss">

</style>