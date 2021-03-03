<template>
  <div class="register-strategy">
    <register-strategy-choose v-model="strategy" v-if="!strategy" />
    <register-driver v-if="strategy === 'driver'" @back="resetStrategy"/>
    <register-park v-else-if="strategy === 'park'" @back="resetStrategy"/>
  </div>
</template>

<script lang="ts">
import RegisterPark from './RegisterPark/RegisterPark.vue'
import RegisterDriver from "./RegisterDriver/RegisterDriver.vue";
import RegisterStrategyChoose from "./RegisterStrategyChoose.vue";
import { ref } from "@vue/composition-api";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { RegisterStrategyChoose, RegisterDriver, RegisterPark },
  setup() {
    const strategy = ref("driver");
    const resetStrategy = () => {
      strategy.value = ''
    }
    return {
      resetStrategy,
      strategy,
    };
  },
})
export default class RegisterStrategy extends Vue {}
</script>

<style lang="scss">
</style>