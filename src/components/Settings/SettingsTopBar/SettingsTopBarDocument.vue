<template>
  <settings-top-bar-item
    class="settings-topbar__document settings-topbar-item--pink"
  >
    <template #title> Автораспознование документов </template>
    <template #name> 10 ₽ </template>
    <template #subname> документ </template>
    <template #icon> <svgDocumentPlus /> </template>
    <template #action>
      <app-switcher class="settings-topbar-switcher" v-model="checked" />
    </template>
  </settings-top-bar-item>
</template>

<script lang="ts">
import SettingsTopBarItem from "./SettingsTopBarItem.vue";
import { Component, Vue } from "vue-property-decorator";

import svgDocumentPlus from "@/assets/icons/document_plus.svg";
@Component({
  components: { SettingsTopBarItem, svgDocumentPlus },
})
export default class SettingsTopBarDocument extends Vue {
  checked = false;
}
</script>

<style lang="scss">
</style>