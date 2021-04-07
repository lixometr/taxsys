<template>
  <div class="car-info-tech">
    <app-accardion
      class="color-grey-2 mb-20 font-md"
      contentClass="font-sm color-grey-3"
      :isOpen="true"
    >
      <template #header>
        <app-accardion-col class="col-12"
          ><div class="color-purple">Тех. обслуживение</div></app-accardion-col
        ></template
      >
      <template>
        <app-accardion-col class="col-lg-4">
          <div class="row align-items-center">
            <div class="col-6">Напоминать о ТО</div>
            <div class="col-6">
              <app-switcher :value="remind" @input="changeRemind" />
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-8">
          <app-button
            color="bold-purple"
            :stroke="true"
            size="sm"
            @click="addRecord"
            >Добавить запись о ТО <svgPlus class="ml-10"
          /></app-button>
        </app-accardion-col>
        <app-accardion-col class="col-12">
          <div
            class="car-info-tech__item"
            v-for="(item, idx) in inspections"
            :key="idx"
          >
            <div class="row">
              <div class="col-xl-3 car-info-tech__item-col">
                <span class="color-grey-3">Дата:</span>
                <span class="color-grey-2">{{
                  item.done_at | moment("DD.MM.YYYY")
                }}</span>
              </div>
              <div class="col-xl-2 car-info-tech__item-col">
                <span class="color-grey-3">Пробег:</span>
                <span class="color-grey-2">{{ item.mileage }}км</span>
              </div>
              <div class="col-xl-7 car-info-tech__item-col">
                <span class="color-grey-3">Список проведенных работ:</span>
                <span class="color-grey-2">{{ item.note }} </span>
              </div>
            </div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import CarInfoTrackerForm from "./CarInfoTrackerForm.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed, ref, toRefs } from "@vue/composition-api";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import { Car } from "@/models/car.entity";
import { useApiCarUpdateRequests } from "@/api/car";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { CarRequestsDto } from "@/dto/car-requests.dto";
interface IProps {
  [key: string]: any;
  item: Car;
}
@Component({
  setup(props: IProps, {emit}) {
    const { item } = toRefs<IProps>(props);
    const remind = computed(() => item.value.options?.inspection_notification);
    const addRecord = () => {
      const { showByName } = useModal();
      showByName(ModalName.addCarRecord, {
        props: {
          id: item.value.id,
        },
        on: {
          send: () => emit('refresh')
        }
      });
    };
    const changeRemind = async (newValue: boolean) => {
      const { exec, error, result } = useApiCarUpdateRequests({
        toast: { error: errorHandler(), success: () => "Обновлено" },
      });
      const data: CarRequestsDto = {
        ...item.value.options,
        inspection_notification: newValue,
      };
      const toSend = plainToClass(CarRequestsDto, data);
      await exec({ id: item.value.id, data: toSend });
      emit('refresh')
      if (error.value) return;
    };
    return {
      changeRemind,
      addRecord,
      remind,
    };
  },
  components: { CarInfoTrackerForm, svgPlus },
})
export default class CarInfoTech extends Vue {
  @Prop({type: Object, default: () => ({})}) item: Car;

  get inspections() {
    return this.item.inspections;
  }
}
</script>

<style lang="scss">
.car-info-tech {
  &__item {
    padding: 2.5rem 0;
    border-bottom: 1px solid #f2f2f2;
    &:last-child {
      border-bottom: none;
    }
    &-col {
      display: flex;
      > span {
        &:last-child {
          margin-left: 10px;
          @include xs {
            margin-left: 0;
          }
        }
      }
      @include lg {
        margin-bottom: 10px;
      }
      @include xs {
        flex-direction: column;
      }
    }
  }
}
</style>