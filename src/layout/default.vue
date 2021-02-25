<template>
  <div class="layout-default">
    <div class="layout-default__row">
      <div class="layout-default__sidebar">
        <app-sidebar class="md-hidden" />
        <app-sidebar-mob class="md-show" />
      </div>
      <div class="layout-default__content flex-layout">
        <app-header />
        <div class="page-wrapper flex-layout">
          <slot />
        </div>
      </div>
    </div>
    <modal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppSidebar from "@/components/Sidebar/index.vue";
import AppSidebarMob from "@/components/Sidebar/SidebarMob.vue";
import AppHeader from "@/components/Header/index.vue";
import Modal from "@/components/Modals/Modal.vue";
@Component({
  components: {
    AppSidebarMob,
    AppSidebar,
    AppHeader,
    Modal,
  },
})
export default class LayotDefault extends Vue {}
</script>

<style lang="scss" >
.layout-default {
  background: #f7f8fc;
  &__row {
    display: flex;
    align-items: stretch;
    min-height: 100vh;
  }

  &__content {
    flex: 1;
    padding: 0 20px;
    padding-left: 8.4rem;
    max-width: 100%;
    @include md {
      padding-left: 2rem;
    }
  }
  .page-wrapper {
    flex: 1;
  }
}
</style>