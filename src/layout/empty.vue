<template>
  <div class="layout-empty">
    <slot />
    <modal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Modal from '@/components/Modals/Modal.vue'
@Component({
  components: {
    Modal
  },

})
export default class LayoutLanding extends Vue {}
</script>

<style lang="scss">
</style>