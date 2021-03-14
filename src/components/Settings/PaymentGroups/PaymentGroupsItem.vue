<template>
  <div class="payment-groups-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
      contentClass="font-sm color-grey-3"
    >
      <template v-slot:header>
        <app-accardion-col class="col-12">
          <div class="color-purple">Новые водители</div>
        </app-accardion-col>
      </template>
      <template #default>
        <app-accardion-col :class="responsiveContent">
          <div class="row" v-for="(item, idx) in col1" :key="idx">
            <div class="col-lg-8 col-7 color-grey-3">{{ item.name }}</div>
            <div class="col-lg-4 col-5 color-grey-2">{{ item.value }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row" v-for="(item, idx) in col2" :key="idx">
            <div class="col-lg-8 col-7 color-grey-3">{{ item.name }}</div>
            <div class="col-lg-4 col-5 color-grey-2">{{ item.value }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row" v-for="(item, idx) in col3" :key="idx">
            <div class="col-lg-8 col-7 color-grey-3">{{ item.name }}</div>
            <div class="col-lg-4 col-5 color-grey-2">{{ item.value }}</div>
          </div>
        </app-accardion-col>
      </template>
      <template #actions>
        <div class="payment-groups-item__action">
          <svgTrash widht="20" @click="onDelete" />
        </div>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgTrash from "@/assets/icons/trash.svg";
@Component({
  components: { svgTrash },
  setup(props, { emit }) {
    const onDelete = () => {
      emit("delete");
    };

    return {
      onDelete,
    };
  },
})
export default class StaffItem extends Vue {
  @Prop(Object) item: any;

  get responsiveContent() {
    return "col-12 col-xl-4";
  }
  get currency() {
    return this.$store.getters.currency;
  }

  get col1() {
    return [
      {
        name: "Выплаты",
        value: "С одобрением",
      },
      {
        name: "Принимать заявки",
        value: "Ежедневно и круглосуточно",
      },
      {
        name: "Авто. выплаты при достижении",
        value: "5 000 ₽",
      },
      {
        name: "Оплата за приложение",
        value: "5 ₽ / с первым заказом ",
      },
    ];
  }
  get col2() {
    return [
      {
        name: "Минимальная сумма на счету",
        value: "500 ₽",
      },
      {
        name: "Минимальная сумма заявки",
        value: "14 500 ₽",
      },
      {
        name: "Максимальная сумма заявки",
        value: "15 000 ₽",
      },
      {
        name: "Ограничение выплаты в день",
        value: "20 500 ₽",
      },
    ];
  }
  get col3() {
    return [
      {
        name: "Комиссия за вывод суммыс 500 до 1500",
        value: "2%",
      },
      {
        name: "Комиссия за вывод суммы с 1 500 до 3 000",
        value: "1.5%",
      },
      {
        name: "Комиссия за вывод суммы с 3 000 до 10 000",
        value: "1%",
      },
      {
        name: "Комиссия за вывод суммы более 10 000",
        value: "0%",
      },
    ];
  }
}
</script>

<style lang="scss">
.payment-groups-item {
  .app-accardion__actions {
    justify-content: flex-end;
  }
  &__action {
    color: $grey_3;
    width: 20px;
    svg {
    }
  }
}
</style>