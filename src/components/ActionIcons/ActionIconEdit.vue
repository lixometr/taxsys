<template>
  <div class="action-icon-edit action-icon">
    <svgEdit />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgEdit from "@/assets/icons/edit.svg";
@Component({
  components: { svgEdit },
})
export default class ActionIconEdit extends Vue {}
</script>

<style lang="scss">
.action-icon-edit {
  background: $violet;
  svg {
    path {
      fill: $white;
    }
  }
}
</style>