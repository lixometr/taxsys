<template>
  <div class="dispetchers-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
      contentClass="font-sm color-grey-3"
    >
      <template v-slot:header>
        <app-accardion-col :class="responsiveHeader">
          <agregator-badge :type="item.agreg" />
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <div>{{ item.name }}</div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <div>(Москва и МО)</div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <div class="dispetchers-item__status-wrapper">
            <div class="dispetchers-item__status">Бизнес класс</div>
          </div>
        </app-accardion-col>
      </template>
      <template #default>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">Количество водителей:</div>
            <div class="col-6">{{ item.count_drivers }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">Количество заказов</div>
            <div class="col-6">{{ item.count_orders }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">Оборот по закаазам</div>
            <div class="col-6">{{ item.TurnoverOnOrders }} {{ currency }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">Комиссия парка</div>
            <div class="col-6">{{ item.ParkCommission }} {{ currency }}</div>
          </div>
        </app-accardion-col>
      </template>
      <template #actions>
        <div class="dispetchers-item__remove cursor-pointer">
          <svgTrash widht="20" @click="onDelete" />
        </div>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import AgregatorBadge from "../../AgregatorBadge.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import AppStatus from "@/components/AppStatus.vue";
import svgTrash from "@/assets/icons/trash.svg";
import { useApiDeleteDispetcher } from "@/api/dispetchers";
import { errorHandler } from "@/helpers/error-handler";
import { toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  item: any;
}
@Component({
  components: { AgregatorBadge, AppStatus, svgTrash },
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const onDelete = async () => {
      const { exec, error } = useApiDeleteDispetcher({
        toast: {
          error: errorHandler(),
          success: () => "Диспетчерская успешно удалена!",
        },
      });
      await exec({ id: item.value.id });
      if (error.value) return;
      emit("refresh");
    };
    return {
      onDelete,
    };
  },
})
export default class DispetchersItem extends Vue {
  @Prop(Object) item: any;
  get responsiveHeader() {
    return "col-md-6  col-xl-3";
  }
  get currency() {
    return this.$store.getters.currency;
  }
  get responsiveContent() {
    return "col-12 col-md-6 col-xl-3";
  }
}
</script>

<style lang="scss">
.dispetchers-item {
  &__status-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding-right: 3rem;
    @include lg {
      justify-content: flex-start;
      padding-right: 0;
    }
  }
  &__status {
    background: #8f8aff;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 1.8rem;
    border-radius: 20px;
    font-size: $fz_sm;
  }
  &__remove {
    color: $grey_3;
    width: 20px;
    svg {
    }
  }
}
</style>