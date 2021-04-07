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
                    :value="listHours"
                    @input="changeHours"
                    :showErrors="false"
                  />
                  <span>{{ hourSclon }}</span></span
                >
                <app-switcher
                  class="car-info-lists__turn-switcher"
                  :value="doRequest"
                  @input="changeHours"
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
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed, ref, toRefs } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import AppStatus from "@/components/AppStatus.vue";
import useWordSclon from "@/compositions/useWordSclon";
import { useApiCarUpdateRequests } from "@/api/car";
import { CarRequestsDto } from "@/dto/car-requests.dto";
import { Car } from "@/models/car.entity";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { useCarInfoInteger } from "./car-info-toggler-model";
interface IProps {
  [key: string]: any;
  item: Car;
}
@Component({
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const addRecord = () => {
      const { showByName } = useModal();
      showByName(ModalName.addCarRecord);
    };
    const { exec } = useWordSclon(["час", "часа", "часов"]);
    const {
      booleanItem: doRequest,
      intItem: listHours,
      onChange: changeHours,
    } = useCarInfoInteger({
      item,
      field: "request_waybill",
      onUpdate: () => emit("refresh"),
    });
    const hourSclon = computed(() => exec(+listHours.value));
    return {
      changeHours,
      hourSclon,
      addRecord,
      doRequest,
      listHours,
    };
  },
  components: { CarInfoTrackerForm, svgPlus, AppStatus, AppImage },
})
export default class CarInfoLists extends Vue {
  @Prop({type: Object,default: () => ({})}) item: Car;
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