<template>
  <div class="layout-default">
    <div class="layout-default__row">
      <div class="layout-default__sidebar">
        <app-sidebar />
      </div>
      <div class="layout-default__content">
        <app-header />
        <div class="page-wrapper">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppSidebar from "@/components/Sidebar/index.vue";
import AppHeader from "@/components/Header/index.vue";
@Component({
  components: {
    AppSidebar,
    AppHeader,
  },
})
export default class LayoutDefault extends Vue {}
</script>

<style lang="scss" >
.layout-default {
  background: #F7F8FC;
  &__row {
    display: flex;
    align-items: stretch;
    min-height: 100vh;
  }
  &__sidebar {
    margin-right: 20px;
    
  }
  &__content {
    flex: 1;
  }
}
</style>