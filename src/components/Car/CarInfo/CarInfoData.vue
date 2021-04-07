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
          <div>{{ item.Brand }}</div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-4 col-lg-6 col-12">
          <div class="row w-100">
            <div class="col-lg-4">
              <div>{{ item.Model }}</div>
            </div>
            <div class="col-lg-4">
              <div>{{ item.Color }}</div>
            </div>
            <div class="col-lg-4">
              <div>{{ item.Year }} г. в.</div>
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div class="car-number">
            <div class="car-number-num">{{ item.GosNomer }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div>{{ milleage }} км</div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-lg-4 col-12">
          <div class="row">
            <div class="col-4"><action-icon-delete @click.stop="onDelete" /></div>
            <div class="col-4"><action-icon-lock @click.stop="onLock" /></div>
            <div class="col-4"><action-icon-unlock @click.stop="onUnLock" /></div>
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
            <div class="col color-grey-2">{{ item.STS }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-4">
          <div class="row">
            <div class="col color-grey-3">VIN код:</div>
            <div class="col color-grey-2">{{ item.Vin }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-4">
          <div class="row">
            <div class="col color-grey-3">Комплектация:</div>
            <div class="col color-grey-2">{{ item.Equipment }}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-6">
          <div class="color-grey-3 mb-5">Описание:</div>
          <div class="color-grey-2" v-html="item.Description"></div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-6">
          <div class="color-grey-3 mb-5">Требование к водителю:</div>
          <div class="color-grey-2" v-html="item.DriverRequirements"></div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import ActionIconUnlock from "../../ActionIcons/ActionIconUnlock.vue";
import ActionIconLock from "../../ActionIcons/ActionIconLock.vue";
import ActionIconDelete from "../../ActionIcons/ActionIconDelete.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Car } from "@/models/car.entity";
import { useApiBlockCar, useApiDeleteCar, useApiUnBlockCar } from "@/api/car";
import { toRefs } from "@vue/composition-api";
import { errorHandler } from "@/helpers/error-handler";
import useRouter from "@/compositions/useRouter";
interface IProps {
  [key: string]: any;
  item: Car;
}
@Component({
  components: { ActionIconDelete, ActionIconLock, ActionIconUnlock },
  setup(props: IProps, { emit }) {
    const router = useRouter();
    const { item } = toRefs<IProps>(props);
    const onDelete = async () => {
      const { exec, error } = useApiDeleteCar({
        toast: {
          error: errorHandler(),
          success: () => "Машина успешно удалена!",
        },
      });
      await exec({ id: item.value.id });
      if (error.value) return;
      router.push({ name: "Rent" });
    };
    const onLock = async () => {
      const { exec, error } = useApiBlockCar({
        toast: {
          error: errorHandler(),
          success: () => "Машина успешно заблокирована!",
        },
      });
      await exec({ id: item.value.id });
      if (error.value) return;
    };
    const onUnLock = async () => {
      const { exec, error } = useApiUnBlockCar({
        toast: {
          error: errorHandler(),
          success: () => "Машина успешно разблокирована!",
        },
      });
      await exec({ id: item.value.id });
      if (error.value) return;
    };
    return {
      onDelete,
      onLock,
      onUnLock,
    };
  },
})
export default class CarInfoData extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: Car;
  get responsiveHeader() {
    return "col-xl-2 col-lg-4 col-12";
  }
  get milleage() {
    return Intl.NumberFormat("ru").format(this.item.Milleage);
  }
}
</script>

<style lang="scss">
</style>