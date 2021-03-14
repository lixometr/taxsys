<template>
  <div class="dispetchers-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
      contentClass="font-sm color-grey-3"
    >
      <template v-slot:header>
        <app-accardion-col :class="responsiveHeader">
          <agregator-badge type="yandex" />
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <div>KaPark</div>
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
            <div class="col-6">26 560</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">Количество заказов</div>
            <div class="col-6">6 805 560</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">Оборот по закаазам</div>
            <div class="col-6">366 805 560 ₽</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">Комиссия парка</div>
            <div class="col-6">366 805 560 ₽</div>
          </div>
        </app-accardion-col>
      </template>
      <template #actions>
        <div class="dispetchers-item__remove">
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
@Component({
  components: { AgregatorBadge, AppStatus, svgTrash },
  setup(props, { emit }) {
    const onDelete = () => {
      emit("delete");
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
  &__remove{
    color: $grey_3;
    width: 20px;
    svg {
    }
  }
}
</style>