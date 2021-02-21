<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ConfigModule } from "./store/modules/config";
import { LayoutType } from "./types/types";
@Component({
  metaInfo: {
    title: "Панель",
    titleTemplate: ConfigModule.titleTemplate,
  },
})
export default class extends Vue {
  get layout() {
    return (this.$route.meta.layout || LayoutType.default) + "-layout";
  }
}
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap");

@import "@/assets/scss/main.scss";
#app {
  font-size: $fz_sm;
}
</style>
