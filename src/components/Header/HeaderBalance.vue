<template>
  <div class="header-balance">
    <header-taxy-balance class="header-balance__taxy"/>
    <header-qiwi-balance />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderTaxyBalance from "@/components/Header/HeaderTaxyBalance.vue";
import HeaderQiwiBalance from "@/components/Header/HeaderQiwiBalance.vue";

@Component({
  components: {
    HeaderTaxyBalance,
    HeaderQiwiBalance,
  },
})
export default class HeaderBalance extends Vue {}
</script>

<style lang="scss">
.header-balance {
    display: flex;
    align-items: center;
    &__taxy {
      margin-right: 2rem;
    }
}
</style>