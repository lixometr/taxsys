<template>
  <div class="driver-check-info-data page-items__item">
    <div class="app-card">
      <div class="row row-no-gutter">
        <app-accardion-col class="col-12">
          <div class="font-md color-violet">База водителей</div>
        </app-accardion-col>
      </div>
      <div v-if="showDrivers">
        <driver-check-info-data-item
          class="driver-check-info-data__item"
          v-for="(item, idx) in items"
          :key="idx"
          :item="item"
        />
      </div>
      <div v-if="isLoadingDriver" class="driver-check-info-data-loading" ref="loadingContainer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import DriverCheckInfoDataItem from "./DriverCheckInfoDataItem.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DriverCheckEntity } from "@/models/driver-check.entity";
import { computed, onMounted, ref, toRefs } from "@vue/composition-api";
import useLoading from "@/compositions/useLoading";
interface IProps {
  [key: string]: any;
  item: DriverCheckEntity;
}
@Component({
  components: { DriverCheckInfoDataItem },
  setup(props: IProps) {
    const { item } = toRefs(props);
    const isLoadingDriver = computed(() => {
      return (
        item.value.statuses.yandex !== "done" &&
        item.value.statuses.yandex !== "error"
      );
    });
    const loadingContainer = ref<HTMLElement>(null);
    onMounted(() => {
      if (!isLoadingDriver.value) return;
      const { show } = useLoading({
        container: loadingContainer.value,
        isFullPage: false,
        width: 40,
        height: 40,
      });
      show();
    });
    return {
      loadingContainer,
      isLoadingDriver,
    };
  },
})
export default class DriverCheckInfoData extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverCheckEntity;
  get result() {
    try {
      if (this.item.yandex_check?.status !== "done") return null;
      const result = JSON.parse(this.item.yandex_check.result);
      return result;
    } catch (err) {
      return null;
    }
  }
  get items() {
    if (!this.result) return [];
    console.log(this.result);
    return this.result?.free_scoring?.report;
  }
  get showDrivers() {
    return this.item.statuses.yandex === "done";
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
  &-loading {
    height: 60px;
    margin-top: 20px;
    position: relative;
  }
}
</style>