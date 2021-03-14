<template>
  <div class="car-info-photo">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Фотоконтроль</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col">
          <div class="row align-items-center">
            <div class="col-12">
              <div class="car-info-photo__turn">
                <span> Запрашивать фотоконтроль автомобиля каждые</span>
                <span>
                  <app-input
                    class="car-info-photo__turn-input text-center"
                    width="20px"
                    :inline="true"
                    v-model="photoDays"
                    :showErrors="false"
                  />
                  <span>{{ daySclon }}</span></span
                >
                <app-switcher
                  class="car-info-photo__turn-switcher"
                  v-model="doRequest"
                />
              </div>
            </div>
          </div>
        </app-accardion-col>

        <app-accardion-col class="col-12">
          <div class="car-info-photo__item" v-for="(itm, idx) in 3" :key="idx">
            <div class="row">
              <div class="col-xl-3 car-info-photo__item-col">
                <span class="color-grey-3">ФИО:</span>
                <span class="color-grey-2">Долгополов Иван Дмитриевич</span>
              </div>
              <div class="col-xl-3 car-info-photo__item-col">
                <span class="color-grey-3">Дата / время:</span>
                <span class="color-grey-2">11.12.1980 11:12</span>
              </div>
              <div class="col-xl-3 car-info-photo__item-col">
                <span class="color-grey-3">Пробег:</span>
                <span class="color-grey-2">250 000 км</span>
              </div>

              <div class="col-xl-2 car-info-photo__item-col">
                <span>Повреждения:</span>
                <span>
                  <app-status size="sm" color="green" :stroke="true"
                    >нет</app-status
                  ></span
                >
              </div>
            </div>
            <div class="car-info-photo__images mt-20">
              <app-image
                class="car-info-photo__image"
                :src="require('@/assets/img/car-fines-mock.jpg')"
                :width="128"
                :height="112"
              />
              <app-image
                class="car-info-photo__image"
                :src="require('@/assets/img/car-fines-mock.jpg')"
                :width="128"
                :height="112"
              />
              <app-image
                class="car-info-photo__image"
                :src="require('@/assets/img/car-fines-mock.jpg')"
                :width="128"
                :height="112"
              />
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
    const photoDays = ref("3");
    const addRecord = () => {
      const { showByName } = useModal();
      showByName(ModalName.addCarRecord);
    };
    const { exec } = useWordSclon(["день", "дня", "дней"]);
    const daySclon = computed(() => exec(+photoDays.value));
    return {
      daySclon,
      addRecord,
      doRequest,
      photoDays,
    };
  },
  components: { CarInfoTrackerForm, svgPlus, AppStatus, AppImage },
})
export default class CarInfoPhoto extends Vue {
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.car-info-photo {
  &__item {
    padding: 2.5rem 0;
    border-bottom: 1px solid #f2f2f2;
    &:last-child {
      border-bottom: none;
    }
    &-col {
      display: flex;
      align-items: center;
      > span {
        &:last-child {
          margin-left: 15px;
          @include sm {
            margin-left: 0;
            margin-top: 5px;
          }
        }
      }
      @include sm {
        flex-direction: column;
        align-items: flex-start;
      }
      @include lg {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }
    }
  }
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
    margin: 10px;
  }
}
</style>