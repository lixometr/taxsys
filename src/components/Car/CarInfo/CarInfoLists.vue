<template>
  <div class="car-info-lists">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Путевые листы</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col">
          <div class="row align-items-center">
            <div class="col-12">
              <div class="car-info-lists__turn">
                <span>
                  Запрашивать фото путевого листра с первым заказом раз в
                </span>
                <span>
                  <app-input
                    class="car-info-lists__turn-input text-center"
                    width="20px"
                    :inline="true"
                    v-model="listHours"
                    :showErrors="false"
                  />
                  <span>{{ hourSclon }}</span></span
                >
                <app-switcher
                  class="car-info-lists__turn-switcher"
                  v-model="doRequest"
                />
              </div>
            </div>
          </div>
        </app-accardion-col>

        <app-accardion-col class="col-12">
          <div class="car-info-lists__images mt-20">
            <div class="car-info-lists__image">
              <app-image
                :src="require('@/assets/img/car-lists-mock.jpg')"
                :width="128"
                :height="112"
              />
              <div class="car-info-lists__image-text">
                <div>14.15.2020</div>
                <div>15:00</div>
              </div>
            </div>
            <div class="car-info-lists__image">
              <app-image
                :src="require('@/assets/img/car-lists-mock.jpg')"
                :width="128"
                :height="112"
              />
              <div class="car-info-lists__image-text">
                <div>14.15.2020</div>
                <div>15:00</div>
              </div>
            </div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import AppImage from "../../AppImage.vue";
import CarInfoTrackerForm from "./CarInfoTrackerForm.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import AppStatus from "@/components/AppStatus.vue";
import useWordSclon from "@/compositions/useWordSclon";
@Component({
  setup() {
    const doRequest = ref(false);
    const listHours = ref("3");
    const addRecord = () => {
      const { showByName } = useModal();
      showByName(ModalName.addCarRecord);
    };
    const { exec } = useWordSclon(["час", "часа", "часов"]);
    const hourSclon = computed(() => exec(+listHours.value));
    return {
      hourSclon,
      addRecord,
      doRequest,
      listHours,
    };
  },
  components: { CarInfoTrackerForm, svgPlus, AppStatus, AppImage },
})
export default class CarInfoLists extends Vue {
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.car-info-lists {
  &__turn {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @include sm {
      flex-direction: column;
      align-items: flex-start;
    }
    &-input {
      margin-left: 15px;
      margin-right: 5px;
      @include sm {
        margin-left: 0;
      }
    }
    &-switcher {
      margin-left: 15px;
      @include sm {
        margin-left: 0;
        margin-top: 15px;
      }
    }
  }
  &__images {
    display: flex;
    flex-wrap: wrap;
  }
  &__image {
    position: relative;
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    &-text {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: $white;
      background: linear-gradient(
        180deg,
        rgba(93, 85, 208, 0) 20%,
        #5d55d0 100%
      );
      height: 80px;
      padding: 4rem 0.8rem 0;
    }
  }
}
</style>