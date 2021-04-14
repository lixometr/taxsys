<template>
  <div class="driver-info-transactions">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
      :showArrow="false"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Транзакции</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col-12">
          <div
            class="row align-items-center driver-info-transactions__row"
            v-for="(item, idx) in items"
            :key="idx"
          >
            <div class="col-xl-2 col-lg-4 driver-info-transactions__row-item">
              {{ item.created_at | dateTime }}
            </div>
            <div class="col-xl-2 col-lg-4 driver-info-transactions__row-item">
              {{ item.meta && item.meta.comment }}
            </div>
            <div class="col-xl-2 col-lg-4 driver-info-transactions__row-item">
              {{ itemType(item.type) }}
            </div>
            <div
              class="col-xl-2 col-lg-4 driver-info-transactions__row-item d-flex align-items-center"
            >
              <span class="mr-10">Transit</span>
              <app-icon width="20" :src="agregatorIcon('yandex')" />
            </div>
            <div class="col-xl-1 col-lg-4 driver-info-transactions__row-item">
              {{ item.amount }}
            </div>
            <div class="col-xl-1 col-lg-4 driver-info-transactions__row-item">
              №{{item.id}}
            </div>
            <div class="col-xl-2 col-lg-4 driver-info-transactions__row-item">
              <app-status
                :color="itemStatus(item).color"
                size="sm"
                :stroke="true"
                >{{ itemStatus(item).text }}</app-status
              >
            </div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import AppIcon from "../AppIcon.vue";
import AppImage from "../AppImage.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DriverEntity } from "@/models/driver.entity";
import AppStatus from "../AppStatus.vue";
import { AgregatorType } from "@/types/agregator.enum";
import { computed, toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  item: DriverEntity;
}
@Component({
  components: { AppStatus, AppImage, AppIcon },
  setup(props: IProps) {
    const { item } = toRefs(props);
    const items = computed(() => item.value.transactions);
    return { items };
  },
})
export default class DriverInfoTransactions extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverEntity;

  get agregatorIcon() {
    return (type: string) => AgregatorType[type].icon;
  }
  get itemType() {
    return (type: string) => {
      return "Ручная заявка парка";
    };
  }
  get itemStatus() {
    return (item) => {
      if (item.confirmed) {
        return {
          text: "Оплачен",
          color: "green",
        };
      } else {
        return {
          text: "Не оплачен",
          color: "red",
        };
      }
    };
  }
}
</script>

<style lang="scss">
.driver-info-transactions {
  &__row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    &-item {
      @include lg {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
