<template>
  <action-icon class="action-icon-edit" v-on="$listeners" v-bind="$attrs">
    <svgEdit />
  </action-icon>
</template>

<script lang="ts">
import ActionIcon from "./ActionIcon.vue";
import { Component, Vue } from "vue-property-decorator";
import svgEdit from "@/assets/icons/edit.svg";
@Component({
  components: { svgEdit, ActionIcon },
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