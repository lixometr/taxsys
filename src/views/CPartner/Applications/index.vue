<template>
  <div class="applications-page flex-layout flex-1">
    <settings-top-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import SettingsTopBar from "@/components/Settings/SettingsTopBar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { SettingsTopBar },
})
export default class Applications extends Vue {}
</script>

<style lang="scss">
.applications-page {
  padding-top: 3rem;
}
</style>