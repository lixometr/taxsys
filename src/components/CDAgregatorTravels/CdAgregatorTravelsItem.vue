<template>
  <div class="cd-agregator-travels-item app-card">
    <div class="row mb-20">
      <div class="col-lg-4 cd-agregator-travels-item__col cd-agregator-travels-item__agreg">
        <agregator-badge :type="item.Agreg"  class="mr-15"/>
        <div class="color-grey-3">{{ item.created_at | dateTime }}</div>
      </div>
      <div class="col-lg-4 cd-agregator-travels-item__col">
        <div class="color-grey-3">Номер заказа:</div>
        <div class="color-grey-2 text-truncate">
          <a :href="orderIdLink" target="_blank"> {{ orderId }}</a>
        </div>
      </div>
      <div class="col-lg-4 cd-agregator-travels-item__col">
        <div class="color-grey-3">Адрес:</div>
        <div class="color-grey-2">{{ item.StartAdress }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 cd-agregator-travels-item__col">
        <div class="color-grey-3">Стоимость заказа:</div>
        <div class="color-green font-500">+ {{totalSum}} {{ currency }}</div>
      </div>
      <div class="col-lg-4 cd-agregator-travels-item__col">
        <div class="color-grey-3">Комиссия:</div>
        <div class="color-grey-2">-{{totalCommission}} {{ currency }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AgregatorBadge from "../AgregatorBadge.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import TravelsMixin from "@/components/Travels/TravelsMixin.vue";
@Component({
  mixins: [TravelsMixin],
  components: { AgregatorBadge },
})
export default class CDAgregatorTravelsItem extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: any;
  get currency() {
    return this.$store.getters.currency;
  }

}
</script>

<style lang="scss">
.cd-agregator-travels-item {
  &__col {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @include md {
        margin-bottom: 15px;
    }
    > div {
      &:first-child {
        margin-right: 15px;
      }
    }
  }
  &__agreg {
      @include xs {
          flex-direction: column;
          align-items: flex-start;
          > div {
              &:first-child {
                  margin-bottom: 15px;
              }
          }
      }
  }
}
</style>