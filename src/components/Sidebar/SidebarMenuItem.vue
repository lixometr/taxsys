<template>
  <router-link
    :to="{ name: routeName }"
    class="sidebar-menu__item menu-item"
    @click.native="onLinkClick"
  >
    <span class="menu-item__self">
      <span class="menu-item__icon">
        <component :is="img"></component>
      </span>
      <span class="menu-item__text">{{ name }}</span>
    </span>
    <span class="menu-item__children menu-item-children" v-if="hasChildren">
      <router-link
        :to="{ name: child.routeName }"
        class="menu-item__child"
        v-for="(child, index) in children"
        :key="index"
      >
        {{ child.name }}
      </router-link>
    </span>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  setup() {
    //   const isHovered
    return {};
  },
})
export default class SidebarMenuItem extends Vue {
  @Prop(String) name: string;
  @Prop(String) routeName: string;
  @Prop({ type: Array, default: () => [] }) children: Array<{
    name: string;
    routeName: string;
  }>;
  @Prop(Object) img: any;

  get hasChildren() {
    return this.children?.length > 0;
  }

  onLinkClick(e: MouseEvent) {
    if (this.hasChildren) {
      console.log(1);
      e.preventDefault();
      return;
    }
  }
}
</script>

<style lang="scss">
.menu-item {
  color: $white;
  fill: $white;
  margin-top: 2rem;
  padding: 1rem;
  padding-left: 2rem;
  width: 100%;
  overflow: hidden;
  font-size: $fz_md;
  font-weight: 300;
  transition: $transition;
  display: inline-block;
  &__self {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &:hover {
    background: rgba($violet, 0.25);
    .menu-item__children {
      display: block;
    }
  }
  &:first-child {
    margin-top: 0;
  }
  &__icon {
    flex-shrink: 0;
    font-size: 0;
  }
  &__text {
    opacity: 0;
    transition: $transition;
    margin-left: 2.2rem;
  }
  &__children {
    padding-left: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    display: none;
    width: 220px;
  }
  &__child {
    color: inherit;
    margin-top: 1.4rem;
    display: inline-block;
    &:first-child {
      margin-top: 2rem;
    }
    &:hover {
      color: $orange;
    }
    &.active {
      color: $orange;
    }
  }
  &.active {
    background: rgba($violet, 0.25);
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      display: block;
      height: 100%;
      width: 4px;
      background: $orange;
    }
  }
}
</style>