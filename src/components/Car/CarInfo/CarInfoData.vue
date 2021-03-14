<template>
  <div class="car-info-data">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      headerClass="border"
      :showArrow="false"
      :isOpen="true"
    >
      <template #header>
        <app-accardion-col class="col-xl-2 col-lg-6 col-12">
          <div>Volkswagen</div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-4 col-lg-6 col-12">
          <div class="row w-100">
            <div class="col-lg-4">
              <div>Jetta</div>
            </div>
            <div class="col-lg-4">
              <div>Красный</div>
            </div>
            <div class="col-lg-4">
              <div>2018 г. в.</div>
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div class="car-number">
            <div class="car-number-num">A 850 ВП</div>
            <div class="car-number-code">777</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div>250 000 км</div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div class="row">
            <div class="col-4"><action-icon-delete @click="onDelete" /></div>
            <div class="col-4"><action-icon-lock @click="onLock" /></div>
            <div class="col-4"><action-icon-unlock @click="onUnLock" /></div>
          </div>
        </app-accardion-col>
      </template>
      <template>
        <app-accardion-col class="col-12">
          <div class="font-md color-purple">Данные автомобиля</div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-4">
          <div class="row">
            <div class="col color-grey-3">СТС серия/номер:</div>
            <div class="col color-grey-2">1234567890</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-4">
          <div class="row">
            <div class="col color-grey-3">VIN код:</div>
            <div class="col color-grey-2 ">12345678912345678</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-4">
          <div class="row">
            <div class="col color-grey-3">Комплектация:</div>
            <div class="col color-grey-2">Люкс</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-6">
          <div class="color-grey-3 mb-5">Требование к водителю:</div>
          <div class="color-grey-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            in pellentesque <a href="#">подробнее</a>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-6">
          <div class="color-grey-3 mb-5">Требование к водителю:</div>
          <div class="color-grey-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            in pellentesque <a href="#">подробнее</a>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import ActionIconUnlock from "../../ActionIcons/ActionIconUnlock.vue";
import ActionIconLock from "../../ActionIcons/ActionIconLock.vue";
import ActionIconDelete from "../../ActionIcons/ActionIconDelete.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { ActionIconDelete, ActionIconLock, ActionIconUnlock },
  setup(props, { emit }) {
    const onDelete = () => {
      emit("delete");
    };
    const onLock = () => {
      emit("lock");
    };
    const onUnLock = () => {
      emit("unlock");
    };
    return {
      onDelete,
      onLock,
      onUnLock,
    };
  },
})
export default class CarInfoData extends Vue {
  get responsiveHeader() {
    return "col-xl-2 col-lg-4 col-12";
  }
}
</script>

<style lang="scss">
</style>