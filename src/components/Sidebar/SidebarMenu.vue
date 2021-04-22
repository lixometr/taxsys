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
import { computed } from "@vue/composition-api";
import { UserModule } from "@/store/modules/user";
import { UserType } from "@/types/types";

@Component({
  components: { SidebarMenuItem },
  setup() {
    const menuItems = computed(() => {
      if(UserModule.type === UserType.driver) return driverMenuItems
      return partnerMenuItems
    })
    return {
      menuItems,
    };
  },
})
export default class SibebarMenu extends Vue {}
</script>

<style lang="scss">
</style>