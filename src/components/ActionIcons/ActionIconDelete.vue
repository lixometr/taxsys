<template>
  <div class="action-icon-delete action-icon">
    <svgTrash />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgTrash from "@/assets/icons/trash.svg";
@Component({
  components: { svgTrash },
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