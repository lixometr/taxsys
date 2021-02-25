<template>
  <router-link
    :to="{ name: 'DriverCheckInfo', params: { id: item.id } }"
    class="driver-check-history-item"
  >
    <div class="row align-items-center">
      <div class="col-md-3">
        <div class="driver-check-history-item__date color-grey-3">
          {{ item.created_at | dateTime }}
        </div>
      </div>
      <div class="col-md-7">
        <div class="driver-check-history-item__driver-name">
          {{ item.surname }} {{ item.name }} {{ item.lastname }}
        </div>
      </div>
      <div class="col-md-2">
        <div class="driver-check-history-item__status">
          <app-status size="sm" color="green" :stroke="true">{{
            statusName
          }}</app-status>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DriverCheckHistoryItem extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: any;
  get statusName() {
    return "Проверено";
  }
}
</script>

<style lang="scss">
.driver-check-history-item {
  margin-bottom: 2rem;
  display: block;
  @include md {
    margin-bottom: 3rem;
  }
  &:last-child {
    margin-bottom: 0!important;
  }
  &__date {
    @include md {
      margin-bottom: 1rem;
    }
  }
  &__status {
    @include md {
      margin-bottom: 1rem;
    }
  }
  &__driver-name {
    color: #5d55d0;
    @include md {
      margin-bottom: 1rem;
    }
  }
  &__status {
    .btn {
      font-size: $fz_xxs;
      color: $grey_1;
      padding: 0.7rem 1.2rem;
    }
  }
}
</style>