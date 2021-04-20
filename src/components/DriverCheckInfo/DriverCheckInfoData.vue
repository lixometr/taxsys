<template>
  <div class="driver-check-info-data page-items__item">
    <div class="app-card">
      <div class="row row-no-gutter">
        <app-accardion-col class="col-12">
          <div class="font-md color-violet">База водителей</div>
        </app-accardion-col>
      </div>
      <driver-check-info-data-item class="driver-check-info-data__item" v-for="(item, idx) in items" :key="idx" :item="item"/>
      <!-- <driver-check-info-data-item class="driver-check-info-data__item" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import DriverCheckInfoDataItem from "./DriverCheckInfoDataItem.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DriverCheckEntity } from "@/models/driver-check.entity";

@Component({
  components: { DriverCheckInfoDataItem },
})
export default class DriverCheckInfoData extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverCheckEntity;
  get result() {
    try {
      if (this.item.yandex_check?.status !== "done") return null;
      const result = JSON.parse(this.item.yandex_check.result);
      return result
    } catch (err) {
      return null;
    }
  }
  get items() {
    if(!this.result) return []
    console.log(this.result)
    return this.result?.free_scoring?.report
  }
}
</script>

<style lang="scss">
.driver-check-info-data {
  svg {
    fill: none;
  }
  &__item {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 3rem;
    &:last-child {
      border: none;
      padding-bottom: 0;
    }
  }
}
</style>