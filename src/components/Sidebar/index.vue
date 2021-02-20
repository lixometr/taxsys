<template>
  <aside class="sidebar" :class="{ open: isHover }" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <router-link :to="{ name: 'Home' }">
      <logo :showText="isHover"/>
    </router-link>
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SidebarItems from "./menu-items";
import Logo from "@/components/Logo/Logo.vue";
import { ref } from "@vue/composition-api";
@Component({
  components: {
    Logo,
  },
  setup() {
    const items = SidebarItems;
    const isHover = ref(false)
    const onMouseEnter = (e: MouseEvent) => {
      isHover.value = true
    }
    const onMouseLeave = (e: MouseEvent) => {
      isHover.value = false
    }
    return {
      items,
      onMouseEnter,
      onMouseLeave,
      isHover
    };
  },
})
export default class AppSidebar extends Vue {
  @Prop({ type: Boolean, default: false }) open: boolean;
}
</script>

<style lang="scss">
.sidebar {
  background: $purple;
  height: 100%;
  padding: 20px;
  transition: $transition;
  width: 64px;
  &.open {
    width: 250px;
  }
}
</style>