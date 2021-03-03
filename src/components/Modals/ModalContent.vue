<template>
  <div class="modal-content" :class="{scrollable, scrollbar: scrollable}">
    <div class="modal-header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <slot />
    <div class="modal-close" @click="$emit('close')"><svgClose /></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgClose from "@/assets/icons/close.svg";

@Component({
    components: {
        svgClose
    }
})
export default class ModalContent extends Vue {
    @Prop({
        type: Boolean, 
        default: true
    }) scrollable: boolean
}
</script>

<style lang="scss">
</style>