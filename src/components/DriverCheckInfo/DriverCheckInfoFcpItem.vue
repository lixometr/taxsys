<template>
  <div>
    <div class="row row-no-gutter">
      
      <app-accardion-col class="col-lg-4">
        <div class="row">
          <div class="col color-grey-3">ФИО:</div>
          <div class="col color-grey-2">Долгополов Иван Дмитриевич</div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-lg-4">
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
      </app-accardion-col>
    </div>
    <div class="row row-no-gutter">
      <app-accardion-col class="col-12">
        <div class="row">
          <div class="col-lg-4 col color-grey-3">
            Исполнительное производство:
          </div>
          <div class="col-lg-8 col color-grey-2">
            174462/18/55004-ИП от 03.10.2018
          </div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-12">
        <div class="row">
          <div class="col-lg-4 col color-grey-3">
            Исполнительная документация:
          </div>
          <div class="col-lg-8 col color-grey-2">
            Акт органа, осуществляющего контрольные функции от 21.06.2019 № 4505
            <a href="#">Подробнее</a>
          </div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-12">
        <div class="row">
          <div class="col-lg-4 col color-grey-3">
            Исполнительная документация:
          </div>
          <div class="col-lg-8 col color-grey-2">
            Взыскание налогов и сборов, включая пени: 1000.00 руб.
            Исполнительский сбор: 1000.00 руб.
          </div>
        </div>
      </app-accardion-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DriverCheckInfoFcpItem extends Vue {}
</script>

<style lang="scss">
</style>