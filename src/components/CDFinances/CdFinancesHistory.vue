<template>
  <div class="app-card cd-finances-history">
    <div class="color-purple font-md mb-30">История операций</div>
    <div class="row cd-finances-history__item" v-for="(item, idx) in 5" :key="idx">
      <div class="col-lg-2 color-grey-3">12:15</div>
      <div class="col-lg-5 color-grey-1">Штраф</div>
      <div class="col-lg-2 color-red font-500">-1200 {{ currency }}</div>
      <div class="col-lg-3">
        <app-status color="green" :stroke="true" size="sm">выполнено</app-status>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppStatus from "../AppStatus.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { AppStatus },
})
export default class CdFinancesHistory extends Vue {
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.cd-finances-history {
    padding-bottom: 0;
    .row {
        align-items: center;
    }
    &__item {
        padding: 3rem 0;
        border-top: 1px solid #F2F2F2;
        font-size: $fz_md;
        @include md {
            > div {
                margin-bottom: 15px;
            }
        }
    }
}
</style>