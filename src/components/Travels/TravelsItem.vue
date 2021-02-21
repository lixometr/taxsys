<template>
  <div class="travels-item">
    <app-accardion class="color-grey-2 mb-15 font-md">
      <template v-slot:header>
        <div class="col-lg-2 col-sm-4 mb-md-3">
          <div>{{item.short_id}}</div>
        </div>
        <div class="col-lg-2 col-sm-4 mb-md-3">
          <div>12:15 | 22.10.2019</div>
        </div>
        <div class="col-lg-2 col-sm-4 mb-md-3">
          <div class="font-md">Иванов Тимофей Петрович</div>
        </div>
        <div class="col-lg-2 col-sm-4 mb-md-3">
          <div class="font-md vertical-align-middle">1277.50 ₽</div>
        </div>
        <div class="shrink-0 col-md-4 col-xl-2">
          <app-badge class="shrink-0">
            <img :src="AgregatorType[item.Agreg].icon" alt="yandex" class="mr-10" />
            {{ AgregatorType.yandex.name }}
          </app-badge>
        </div>
        <div class="shrink-0 col-md-4 col-xl-2">
          <app-badge class="shrink-0">
            <component
              width="24"
              :is="PaymentType.cashless.icon"
              alt="cash"
              class="mr-10 shrink-0"
            />
            {{ PaymentType.cashless.name }}
          </app-badge>
        </div>
      </template>
      <div class="col">
        <div class="mb-10">Номер заказа:</div>
        <div class="mb-10">Адрес подачи:</div>
        <div class="mb-10">Адрес назначения:</div>
      </div>
      <div class="col">
        <div class="mb-10 color-purple">11382657311</div>
        <div class="mb-10">ул. Ленина, д. 15, корп. 2</div>
        <div class="mb-10">ул. Маркса, д. 24/8</div>
      </div>
      <div class="col"></div>
      <div class="col"></div>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import { AgregatorType } from "@/types/agregator.enum";
import { PaymentType } from "@/types/payment-type.enum";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  setup() {
      
    return { AgregatorType, PaymentType };
  },
})
export default class TravelsItem extends Vue {
  @Prop(Object) item: any;
}
</script>

<style lang="scss">
</style>