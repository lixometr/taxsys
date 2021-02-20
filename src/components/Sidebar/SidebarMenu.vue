<template>
  <div class="sidebar__menu sidebar-menu">
    <sidebar-menu-item
      v-for="(item, idx) in menuItems"
      :key="idx"
      :name="item.name"
      :routeName="item.routeName"
      :children="item.children"
      :img="item.img"
    />
  </div>
</template>

<script lang="ts">
import SidebarMenuItem from "./SidebarMenuItem.vue";
import { Component, Vue } from "vue-property-decorator";
import menuItems from "@/components/Sidebar/menu-items";

@Component({
  components: { SidebarMenuItem },
  setup() {
    return {
      menuItems,
    };
  },
})
export default class SibebarMenu extends Vue {}
</script>

<style lang="scss">
</style>