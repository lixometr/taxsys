<template>
  <div>
    <div class="row row-no-gutter">
      <app-accardion-col class="col-lg-4">
        <div class="row mb-15">
          <div class="col-lg-3 col color-grey-3">ФИО:</div>
          <div class="col-lg-9 col color-grey-2">{{ name }}</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Телефон:</div>
          <div class="col color-grey-2">{{ phone }}</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Фотоконтроль:</div>
          <div class="col color-grey-2"><svgCheckmark class="checkmark" v-if="hasPhotoControl"/></div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-lg-4">
        <div class="row mb-15">
          <div class="col color-grey-3">Парк:</div>
          <div class="col color-grey-2">{{ park }}</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Гос. номер:</div>
          <div class="col color-grey-2">{{ carNumber }}</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Транспортное средство:</div>
          <div class="col color-grey-2">{{ car }}</div>
        </div>
      </app-accardion-col>
      <app-accardion-col class="col-lg-4">
        <div class="row mb-15">
          <div class="col color-grey-3">Дата приёма:</div>
          <div class="col color-grey-2">{{ hireDate }}</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Дата увольнения:</div>
          <div class="col color-grey-2">11.12.1980</div>
        </div>
        <div class="row mb-15">
          <div class="col color-grey-3">Долг пред парком:</div>
          <div
            class="col"
            :class="{ 'color-green': !debt, 'color-red': !!debt }"
          >
            {{ debt ? debt : "Отсутствует" }}
          </div>
        </div>
      </app-accardion-col>
    </div>
    <div class="row row-no-gutter" v-if="comment">
      <app-accardion-col class="col-12">
        <div class="row">
          <div class="col-lg-4 col color-grey-3 text-right">Примечание:</div>
          <div class="col-lg-8 col color-grey-2" v-html="comment"></div>
        </div>
      </app-accardion-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgCheckmark from "@/assets/icons/checkmark_circle.svg";
import useMoment from "@/compositions/useMoments";
@Component({
  components: {
    svgCheckmark,
  },
})
export default class DriverCheckInfoDataItem extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: any;

  get name() {
    return `${this.item?.driver?.first_name} ${this.item?.driver?.last_name}`;
  }
  get comment() {
    return this.item?.driver?.check_message;
  }
  get phone() {
    return this.item?.driver?.phones && this.item?.driver?.phones[0];
  }
  get carNumber() {
    return this.item?.vehicle?.number;
  }
  get car() {
    return `${this.item?.vehicle?.brand} ${this.item?.vehicle?.model}`;
  }
  get park() {
    return this.item?.park_name;
  }
  get hireDate() {
    return useMoment(this.item?.driver?.hire_date).format("DD.MM.YYYY");
  }
  get hasPhotoControl() {
    return this.item?.driver?.dkk_is_blocked
  }
  get debt() {
    return this.item?.debt?.bounds_to;
  }
}
</script>

<style lang="scss">
</style>