<template>
  <div class="phone-input">
    <app-input v-on="$listeners" v-bind="$attrs" ref="inputComp"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Inputmask from "inputmask";
import { onMounted, ref } from "@vue/composition-api";
@Component({
    setup() {
        const inputComp = ref(null)
        onMounted(() => {
            const inputEl = inputComp.value.$refs.el
            Inputmask({mask: '+7 999 999 99 99'}).mask(inputEl)
        })
        return {
            inputComp
        }
    }
})
export default class PhoneInput extends Vue {}
</script>

<style lang="scss">
</style>