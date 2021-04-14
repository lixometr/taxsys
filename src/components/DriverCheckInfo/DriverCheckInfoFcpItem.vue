<template>
  <div>
    <div class="row row-no-gutter">
      <app-accardion-col class="col-lg-12">
        <div class="row">
          <div class="col-lg-4 col color-grey-3">ФИО:</div>
          <div class="col-lg-8 col color-grey-2">{{ item.name }}</div>
        </div>
      </app-accardion-col>
      <!-- <app-accardion-col class="col-lg-4">
        <div class="row">
          <div class="col color-grey-3">Дата рождения:</div>
          <div class="col color-grey-2">07.08.1980</div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-lg-4">
        <div class="row">
          <div class="col color-grey-3">Регион:</div>
          <div class="col color-grey-2">Самара</div>
        </div>
      </app-accardion-col> -->
    </div>
    <div class="row row-no-gutter">
      <app-accardion-col class="col-12">
        <div class="row">
          <div class="col-lg-4 col color-grey-3">
            Исполнительное производство:
          </div>
          <div class="col-lg-8 col color-grey-2">
            {{ item.exe_production }}
          </div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-12">
        <div class="row">
          <div class="col-lg-4 col color-grey-3">
            Исполнительная документация:
          </div>
          <div class="col-lg-8 col color-grey-2">
          {{item.details}}
          </div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-12">
        <div class="row">
          <div class="col-lg-4 col color-grey-3">
            Сумма к исполнению:
          </div>
          <div class="col-lg-8 col color-grey-2">
           {{item.subject}}
          </div>
        </div>
      </app-accardion-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DriverCheckInfoFcpItem extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: any;
}
</script>

<style lang="scss">
</style>