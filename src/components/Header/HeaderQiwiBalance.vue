<template>
  <div class="header-qiwi-balance header-rounded-label" v-if="showQiwi">
    <span class="header-rounded-label__title">QIWI: </span>
    <span class="header-rounded-label__value"
      >{{ balance }} {{ currency }}</span
    >
  </div>
</template>

<script lang="ts">
import { UserModule } from "@/store/modules/user";
import { computed } from "@vue/composition-api";
import { Component, Vue } from "vue-property-decorator";

@Component({
  setup() {
    const balance = computed(() => UserModule.qiwiBalance);
    const showQiwi = computed(() => typeof balance.value === 'number')
    return { balance, showQiwi};
  },
})
export default class HeaderQiwiBalance extends Vue {
  get currency() {
    return this.$store.getters.currency;
  }
 
}
</script>

<style >
</style>