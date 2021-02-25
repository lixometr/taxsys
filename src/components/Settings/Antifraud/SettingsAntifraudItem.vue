<template>
  <div class="settings-antiform-item page-items__item">
    <app-accardion contentClass="color-grey-3" headerClass="font-md">
      <template #header>
        <app-accardion-col>
          <div class="color-purple">Бизнес</div>
        </app-accardion-col>
      </template>
      <template>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div :class="contentColTitleClass">Стоимость поездки более</div>
            <div :class="contentColValueClass">1500 ₽</div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Стоимость мин. более</div>
            <div :class="contentColValueClass">1000 ₽</div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Стоимость км. более</div>
            <div :class="contentColValueClass">35 ₽</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div :class="contentColTitleClass">Сумма бонусов более</div>
            <div :class="contentColValueClass">35 ₽</div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Время поездки более</div>
            <div :class="contentColValueClass">90 мин</div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Время поездки менее</div>
            <div :class="contentColValueClass">3 мин</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div :class="contentColTitleClass">Сумма чаевых более</div>
            <div :class="contentColValueClass">200 ₽</div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Сумма чаевых более</div>
            <div :class="contentColValueClass">200 ₽</div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Сумма чаевых более</div>
            <div :class="contentColValueClass">200 ₽</div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SettingsAntifraudItem extends Vue {
  get responsiveContent() {
    return "col-md-4";
  }
  get contentColTitleClass() {
    return "col-8 col-md-7";
  }
  get contentColValueClass() {
    return "col-4 col-md-5 color-grey-2";

  }
}
</script>

<style lang="scss">
</style>