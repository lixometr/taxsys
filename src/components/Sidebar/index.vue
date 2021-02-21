<template>
  <aside
    class="sidebar"
    :class="{ open: isHover }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <router-link class="sidebar__logo" :to="{ name: 'Home' }">
      <logo :showText="isHover" />
    </router-link>
    <sidebar-menu />
    <div class="sidebar__settings">
      <sidebar-menu-item
        :routeName="'Settings'"
        :img="require('@/assets/icons/settings.svg')"
        :name="'Настройки'"
      />
    </div>
  </aside>
</template>

<script lang="ts">
import SidebarMenuItem from "./SidebarMenuItem.vue";
import SidebarMenu from "./SidebarMenu.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import SidebarItems from "./menu-items";
import Logo from "@/components/Logo/Logo.vue";
import { ref } from "@vue/composition-api";
@Component({
  components: {
    Logo,
    SidebarMenu,
    SidebarMenuItem,
  },
  setup() {
    const items = SidebarItems;
    const isHover = ref(false);
    const onMouseEnter = (e: MouseEvent) => {
      isHover.value = true;
    };
    const onMouseLeave = (e: MouseEvent) => {
      isHover.value = false;
    };
    return {
      items,
      onMouseEnter,
      onMouseLeave,
      isHover,
    };
  },
})
export default class AppSidebar extends Vue {
  @Prop({ type: Boolean, default: false }) open: boolean;
}
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  left: 0;
  background: $purple;
  height: 100%;
  transition: $transition;
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  overflow: auto;
  max-height: 100vh;
  z-index: 500;
  @include md {
    display: none;
  }
  &.sidebar--mob {
    display: flex;
    transform: translateX(-100%);
    &.open {
      transform: translateX(0);
    }
  }
  &__logo {
    padding-left: 2rem;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    svg {
      width: 23px;
      transition: $transition;
    }
  }
  &__menu {
    margin-top: 10rem;
    width: 100%;
  }
  &__settings {
    margin-top: auto;
    width: 100%;
    padding-bottom: 1.5rem;
    padding-top: 3rem;
  }

  &.open {
    width: 250px;
    .sidebar__logo {
      svg {
        width: 50px;
      }
    }
    .menu-item__text {
      opacity: 1;
    }
  }
}
</style>