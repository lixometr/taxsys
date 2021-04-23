<template>
  <div class="driver-check-info-fcp">
    <div class="app-card">
      <div class="row row-no-gutter">
        <app-accardion-col class="col-12">
          <div class="font-md color-violet">ФССП</div>
        </app-accardion-col>
      </div>
      <div v-if="showFcp">
        <driver-check-info-fcp-item
          class="driver-check-info-fcp__item"
          v-for="(item, idx) in items"
          :key="idx"
          :item="item"
        />
      </div>
      <div
        v-if="isLoadingFcp"
        class="driver-check-info-fcp-loading"
        ref="loadingContainer"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import DriverCheckInfoFcpItem from "./DriverCheckInfoFcpItem.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DriverCheckEntity } from "@/models/driver-check.entity";
import { computed, onMounted, ref, toRefs } from "@vue/composition-api";
import useLoading from "@/compositions/useLoading";
interface IProps {
  [key: string]: any;
  item: DriverCheckEntity;
}
@Component({
  components: { DriverCheckInfoFcpItem },
  setup(props: IProps) {
    const { item } = toRefs(props);
    const isLoadingFcp = computed(() => {
      return (
        item.value.statuses.fssp !== "done" &&
        item.value.statuses.fssp !== "error"
      );
    });
    const loadingContainer = ref<HTMLElement>(null);
    onMounted(() => {
      if (!isLoadingFcp.value) return;
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
      isLoadingFcp,
    };
  },
})
export default class DriverCheckInfoFcp extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverCheckEntity;
  get items() {
    if (this.item.statuses.fssp !== "done") return [];
    if (Array.isArray(this.item.fssp_check?.result)) {
      return this.item.fssp_check.result.reduce((arr, item) => {
        if (Array.isArray(item.result)) {
          return arr.concat(item.result);
        }
        return arr;
      }, []);
    }
    return [];
  }
  get showFcp() {
    return this.item.statuses.fssp === "done";
  }
}
</script>

<style lang="scss">
.driver-check-info-fcp {
  &__item {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 3rem;
    &:last-child {
      border: none;
      padding-bottom: 0;
    }
  }
  &-loading {
    margin-top: 20px;
    height: 60px;
    position: relative;
  }
}
</style>