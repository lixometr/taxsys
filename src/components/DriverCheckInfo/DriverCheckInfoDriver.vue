<template>
  <div class="driver-check-info-driver page-items__item">
    <app-accardion :showArrow="false" :isOpen="true" headerClass="border"> 
      <template #header>
        <app-accardion-col :class="headerCol">
          <div>Иванов Тимофей Петрович</div>
        </app-accardion-col>
        <app-accardion-col :class="headerCol">
          <div class="driver-check-info-driver__header-item">
            <span> Паспорт</span>
            <span class="driver-check-info-driver__header-info">
              46 05 549656
            </span>
            <svgCheckmarkCircle />
          </div>
        </app-accardion-col>
        <app-accardion-col :class="headerCol">
          <div class="driver-check-info-driver__header-item">
            <span> В.У.</span>
            <span class="driver-check-info-driver__header-info">
              46 05 549656
            </span>
            <svgCheckmarkCircle />
          </div>
        </app-accardion-col>
      </template>
      <template>
        <app-accardion-col class="col-12 ">
          <div class="color-violet font-md mb-0">Проверка В.У.</div>
        </app-accardion-col>
        <app-accardion-col :class="contentCol">
          <div class="row">
            <div class="col color-grey-3">Дата рождения:</div>
            <div class="col color-grey-2">15.06.1991</div>
          </div>
          <div class="row">
            <div class="col color-grey-3">Дата выдачи:</div>
            <div class="col color-grey-2">15.06.1991</div>
          </div>
          <div class="row">
            <div class="col color-grey-3">Срок действия:</div>
            <div class="col color-grey-2">20.01.2016</div>
          </div>
          <div class="row">
            <div class="col color-grey-3">Категории ТС:</div>
            <div class="col color-grey-2">B, B1, C, C1, D, D1, M</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="contentCol">
            <div class="color-grey-3 font-500"><span>Лишение права управления #1</span></div>
            <div class="row">
                <div class="col color-grey-3">Дата постановления:</div>
                <div class="col color-grey-2">20.01.2013</div>
            </div>
            <div class="row">
                <div class="col color-grey-3">Срок лишения:</div>
                <div class="col color-grey-2">24 мес</div>
            </div>
            <div class="row">
                <div class="col color-grey-3">Состояние:</div>
                <div class="col color-grey-2">Начато начисление срока </div>
            </div>
        </app-accardion-col>
        <app-accardion-col :class="contentCol">
            <div class="color-grey-3 font-500"><span>Лишение права управления #2</span></div>
            <div class="row">
                <div class="col color-grey-3">Дата постановления:</div>
                <div class="col color-grey-2">20.01.2013</div>
            </div>
            <div class="row">
                <div class="col color-grey-3">Срок лишения:</div>
                <div class="col color-grey-2">24 мес</div>
            </div>
            <div class="row">
                <div class="col color-grey-3">Состояние:</div>
                <div class="col color-grey-2">Начато начисление срока </div>
            </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgCheckmarkCircle from "@/assets/icons/checkmark_circle.svg";
@Component({
  components: {
    svgCheckmarkCircle
  },
})
export default class DriverCheckInfoDriver extends Vue {
  get headerCol() {
    return "col-lg-4 font-md grey-1";
  }
  get contentCol() {
    return "col-lg-4";
  }
}
</script>

<style lang="scss">
.driver-check-info-driver {
  &__header-info {
    font-weight: 500;
    margin: 0 1rem;
  }
  &__header-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
 
  svg {
    fill: none;
  }
}
</style>