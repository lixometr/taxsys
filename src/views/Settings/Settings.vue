<template>
  <div class="page-settings flex-layout flex-1">
    <settings-top-bar />
    <settings-links />
    <router-view />
  </div>
</template>

<script lang="ts">
import SettingsTopBar from "../../components/Settings/SettingsTopBar.vue";
import SettingsLinks from "../../components/Settings/SettingsLinks.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { SettingsLinks, SettingsTopBar },
})
export default class Settings extends Vue {}
</script>

<style lang="scss">
.page-settings {
  padding-top: 3rem;
}
</style>