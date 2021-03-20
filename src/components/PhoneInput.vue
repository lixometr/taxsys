<template>
  <div class="phone-input">
    <app-input v-on="$listeners" v-bind="$attrs" mask="+7 999 999 99 99"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
   
})
export default class PhoneInput extends Vue {}
</script>

<style lang="scss">
</style>