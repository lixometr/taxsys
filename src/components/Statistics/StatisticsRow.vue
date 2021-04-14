<template>
  <div class="statistics-row app-card">
    <div class="row">
      <div class="col-lg-3 col-md-6 statistics-row__title">
        Количество водителей
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="statistics-row__item">
          <div class="statistics-row__label">Всего</div>
          <div class="statistics-row__value">{{ totalDrivers }}</div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="statistics-row__item">
          <div class="statistics-row__label">Активные</div>
          <div class="statistics-row__value">{{ totalActiveDrivers }}</div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="statistics-row__item">
          <div class="statistics-row__label">Новые</div>
          <div class="statistics-row__value">{{ totalNewDrivers }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { StatisticsEntity } from "@/models/statistics.entity";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class StatisticsRow extends Vue {
  @Prop({ type: Object, default: () => ({}) }) value: StatisticsEntity;
  get totalDrivers() {
    return this.value.drivers?.total_drivers;
  }
  get totalActiveDrivers() {
    return this.value.drivers?.total_active_drivers;
  }
  get totalNewDrivers() {
    return this.value.drivers?.total_new_drivers;
  }
}
</script>

<style lang="scss">
.statistics-row {
  padding-top: 0;
  &__title {
    font-size: $fz_ml;
    margin-top: 3rem;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 3rem;
  }
  &__label {
    font-size: $fz_md;
    color: $grey_3;
    margin-right: 30px;
  }
  &__value {
    font-size: $fz_ml;
    color: #4f4f4f;
    font-weight: 600;
  }
}
</style>