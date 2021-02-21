<template>
  <div class="sidebar-mob">
    <app-sidebar class="sidebar--mob" :class="{open: isOpen}"/>
    <div class="sidebar-mob__overlay" v-if="isOpen" @click="close"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppSidebar from "@/components/Sidebar/index.vue";
import useSidebar from "./useSidebar";

@Component({
  components: {
    AppSidebar,
  },
  setup() {
    const { isOpen, close, open } = useSidebar();
    return { isOpen, close, open };
  },
})
export default class AppSidebarMob extends Vue {}
</script>

<style lang="scss">
.sidebar-mob {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 499;

    background: #cecbf8;
    opacity: 0.7;
  }
}
</style>