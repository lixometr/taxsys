<template>
  <div class="settings-antifraud-item page-items__item">
    <app-accardion contentClass="color-grey-3" headerClass="font-md">
      <template #header>
        <app-accardion-col>
          <div class="color-purple">{{ item.name }}</div>
        </app-accardion-col>
      </template>
      <template>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div :class="contentColTitleClass">Стоимость поездки более</div>
            <div :class="contentColValueClass">
              {{ item.cost_trip_more }} {{ currency }}
            </div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Стоимость мин. более</div>
            <div :class="contentColValueClass">
              {{ item.cost_min_more }} {{ currency }}
            </div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Стоимось минуты менее</div>
            <div :class="contentColValueClass">
              {{ item.cost_min_less }} {{ currency }}
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div :class="contentColTitleClass">Сумма бонусов более</div>
            <div :class="contentColValueClass">
              {{ item.sum_bonus_more }} {{ currency }}
            </div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Время поездки более</div>
            <div :class="contentColValueClass">
              {{ item.time_trip_more }} мин
            </div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Время поездки менее</div>
            <div :class="contentColValueClass">
              {{ item.time_trip_less }} мин
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div :class="contentColTitleClass">Сумма чаевых более</div>
            <div :class="contentColValueClass">
              {{ item.sum_tip_more_rub }} {{ currency }}
            </div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Сумма чаевых более</div>
            <div :class="contentColValueClass">
              {{ item.sum_tip_more_perc }} %
            </div>
          </div>
          <div class="row">
            <div :class="contentColTitleClass">Стоимость км. более</div>
            <div :class="contentColValueClass">
              {{ item.cost_km_more }} {{ currency }}
            </div>
          </div>
        </app-accardion-col>
      </template>
      <template #actions>
        <div class="app-accardion__action" @click="edit">
          <svgEdit />
        </div>
        <div class="app-accardion__action">
          <app-checkbox :value="!!item.active" @input="toggleActive" />
        </div>
        <div class="app-accardion__action" @click="remove">
          <svgTrash />
        </div>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import AppCheckbox from "../../AppCheckbox.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgEdit from "@/assets/icons/edit.svg";
import svgTrash from "@/assets/icons/trash.svg";
import { AntifraudEntity } from "@/models/antifraud.entity";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import { useApiDeleteAntifraud, useApiUpdateAntifraud } from "@/api/antifraud";
@Component({
  setup(props: any, { emit }) {
    const remove = async () => {
      emit("remove");
    };
    const edit = () => {
      emit("edit");
    };
    const toggleActive = async (active: boolean) => {
      emit("active", active);
    };
    return {
      remove,
      edit,
      toggleActive,
    };
  },
  components: {
    svgEdit,
    svgTrash,
    AppCheckbox,
  },
})
export default class SettingsAntifraudItem extends Vue {
  @Prop(Object) item: AntifraudEntity;
  get responsiveContent() {
    return "col-md-4";
  }
  get contentColTitleClass() {
    return "col-8 col-md-7";
  }
  get contentColValueClass() {
    return "col-4 col-md-5 color-grey-2";
  }
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.settings-antifraud-item {
  position: relative;
  .app-accardion__actions {
    justify-content: center;
  }
  .app-accardion__action {
    margin-bottom: 3rem;
    width: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>