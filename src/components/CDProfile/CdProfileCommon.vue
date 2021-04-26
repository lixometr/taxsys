<template>
  <div>
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
      :showArrow="false"
    >
      <template #header>
        <app-accardion-col class="col-12">
          <div class="color-purple font-md">Общее</div></app-accardion-col
        >
      </template>
      <template>
        <app-accardion-col class="col-12 pt-0">
          <cd-profile-cards
        /></app-accardion-col>
        <app-accardion-col class="col-12">
          <div class="row font-md">
            <div class="col-lg-4 row row-no-gutter">
              <div class="color-grey-3 mr-15">Номер телефона</div>
              <div class="color-grey-2">+7 (900) 900 90 90</div>
              <svgEdit
                class="ml-10 color-purple cursor-pointer"
                @click="editPhone"
                width="15"
              />
            </div>
            <div class="col-lg-4 row row-no-gutter">
              <div class="color-grey-3 mr-15">Водительское удостоверение</div>
              <div class="color-grey-2">{{ driverLicense }}</div>
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-12">
          <app-button color="purple-grad" @click="goToPartner"
            >Перейти в партнерский кабинет
            <svgArrowRight width="15" class="ml-3 color-white"
          /></app-button>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import CdProfileCards from "./CdProfileCards.vue";
import { Component, Vue } from "vue-property-decorator";
import svgEdit from "@/assets/icons/edit.svg";
import { computed } from "@vue/composition-api";
import { UserModule } from "@/store/modules/user";
import svgArrowRight from "@/assets/icons/arrow-right.svg";
import useRouter from "@/compositions/useRouter";
@Component({
  components: { CdProfileCards, svgEdit, svgArrowRight },
  setup() {
    const editPhone = () => {
      return;
    };
    const driverLicense = computed(() => {
      return UserModule.user?.driver?.SerialDriverLicense;
    });
    const goToPartner = () => {
      useRouter().push({ name: "Statistics" });
    };
    return {
      goToPartner,
      editPhone,
      driverLicense,
    };
  },
})
export default class CDProfileCommon extends Vue {}
</script>

<style lang="scss">
</style>