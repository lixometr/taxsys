<template>
  <action-icon class="action-icon-delete">
    <svgTrash />
  </action-icon>
</template>

<script lang="ts">
import ActionIcon from './ActionIcon.vue'
import { Component, Vue } from "vue-property-decorator";
import svgTrash from "@/assets/icons/trash.svg";
@Component({
  components: { svgTrash, ActionIcon },
})
export default class ActionIconDelete extends Vue {}
</script>

<style lang="scss">
.action-icon-delete {
  background: $red;
  svg {
    path {
      fill: $white;
    }
  }
}
</style>