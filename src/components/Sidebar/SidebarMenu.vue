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
import partnerMenuItems from "@/components/Sidebar/partner-menu-items";
import driverMenuItems from "@/components/Sidebar/driver-menu-items";

@Component({
  components: { SidebarMenuItem },

  computed: {
    menuItems() {
      const { matched } = this.$route;
      const isDriver =
        matched.findIndex((route) => route.name === "CDriver") > -1;
      if (isDriver) {
        return driverMenuItems;
      } else {
        return partnerMenuItems;
      }
    },
  },
  setup() {
    return {};
  },
  watch: {},
})
export default class SibebarMenu extends Vue {}
</script>

<style lang="scss">
</style>