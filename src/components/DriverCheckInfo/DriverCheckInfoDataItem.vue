<template>
  <div>
    <div class="row row-no-gutter">
      <app-accardion-col class="col-lg-4">
        <div class="row mb-15">
          <div class="col-lg-3  col color-grey-3">ФИО:</div>
          <div class="col-lg-9 col color-grey-2">Долгополов Иван Дмитриевич</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Телефон:</div>
          <div class="col color-grey-2">+7 ******** 90</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Фотоконтроль:</div>
          <div class="col color-grey-2"><svgCheckmark class="checkmark" /></div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-lg-4">
        <div class="row mb-15">
          <div class="col color-grey-3">Транспортное средство:</div>
          <div class="col color-grey-2">Pegout 407</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Гос. номер:</div>
          <div class="col color-grey-2">Г*****85</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Парк:</div>
          <div class="col color-grey-2">KaPark. Москва</div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-lg-4">
        <div class="row mb-15">
          <div class="col color-grey-3">Дата приёма: </div>
          <div class="col color-grey-2">11.12.1980</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Дата увольнения: </div>
          <div class="col color-grey-2">11.12.1980</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Долг пред парком: </div>
          <div class="col color-green">Отсутствует</div>
        </div>
      </app-accardion-col>
    </div>
    <div class="row row-no-gutter">
      <app-accardion-col class="col-12">
        <div class="row">
          <div class="col-lg-4 col color-grey-3">Примечание:</div>
          <div class="col-lg-8 col color-grey-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            ultrices interdum et bibendum tellus <a href="#">Подробнее</a>
          </div>
        </div>
      </app-accardion-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgCheckmark from "@/assets/icons/checkmark_circle.svg";
@Component({
  components: {
    svgCheckmark,
  },
})
export default class DriverCheckInfoDataItem extends Vue {}
</script>

<style lang="scss">
</style>