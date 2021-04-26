<template>
  <div class="cd-profile-tarifs">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
      :showArrow="false"
    >
      <template #header>
        <app-accardion-col class="col-12">
          <div class="color-purple font-md">Тарифы</div></app-accardion-col
        >
      </template>
      <template>
        <app-accardion-col class="col-lg-4 pt-0">
          <app-checkbox-input
            :label="item.name"
            :reverse="true"
            v-for="(item, idx) in col1"
            :key="idx"
          />
        </app-accardion-col>

        <app-accardion-col class="col-lg-4 pt-0">
          <app-checkbox-input
            :label="item.name"
            :reverse="true"
            v-for="(item, idx) in col2"
            :key="idx"
          />
        </app-accardion-col>
        <app-accardion-col class="col-lg-4 pt-0">
          <app-checkbox-input
            :label="item.name"
            :reverse="true"
            v-for="(item, idx) in col3"
            :key="idx"
          />
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import AppCheckboxInput from "../AppCheckboxInput.vue";
import CdProfileCards from "./CdProfileCards.vue";
import { Component, Vue } from "vue-property-decorator";
import svgEdit from "@/assets/icons/edit.svg";
import { computed } from "@vue/composition-api";
import { UserModule } from "@/store/modules/user";
@Component({
  components: { CdProfileCards, svgEdit, AppCheckboxInput },
  setup() {
    const col1 = computed(() => {
      return [
        {
          name: "Эконом",
          value: "",
        },
        {
          name: "Комфорт",
          value: "",
        },
        {
          name: "Комфорт +",
          value: "",
        },
        {
          name: "Грузовой",
          value: "",
        },
      ];
    });
    const col2 = computed(() => {
      return [
        {
          name: "Минивен",
          value: "",
        },
        {
          name: "Универсал",
          value: "",
        },
        {
          name: "Курьер",
          value: "",
        },
        {
          name: "Старт Uber",
          value: "",
        },
      ];
    });
    const col3 = computed(() => {
      return [
        {
          name: "Доставка",
          value: "",
        },
        {
          name: "Бизнес",
          value: "",
        },
        {
          name: "Премьер",
          value: "",
        },
        {
          name: "Стандарт Uber",
          value: "",
        },
      ];
    });
    return { col1, col2, col3 };
  },
})
export default class CDProfileTarifs extends Vue {}
</script>

<style lang="scss">
.cd-profile-tarifs {
  .app-checkbox-input {
    &__title {
      width: 170px !important;
      @include md {
        width: 140px !important;
      }
    }
  }
}
</style>