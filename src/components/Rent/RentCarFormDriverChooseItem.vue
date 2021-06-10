<template>
  <div class="give-car-form-driver-choose__item row" @click="chooseItem">
    <div class="col-lg-5">{{ item.fio }}</div>
    <div class="col-lg-3">+7919 223 323 323</div>
    <!-- <div class="col-lg-2">{{ item.phone }}</div> -->
    <div class="col-lg-2">Москва</div>
    <!-- <div>{{ item.city }}</div> -->
    <div class="col-lg-2 d-flex justify-content-lg-end justify-content-start align-items-center">
      <div class="d-flex">
        <div v-for="(agregator, idx) in agregators" :key="idx" class="mr-15">
          <app-icon
            class="icon-rounded-shadow"
            :src="agregator.icon"
            width="25"
          />
        </div>
      </div>
        <app-checkbox :value="active" />
    </div>
  </div>
</template>

<script lang="ts">
import AppIcon from "../AppIcon.vue";
import AppCheckbox from "../AppCheckbox.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgregatorType, AgregName } from "@/types/agregator.enum";
import { DriverEntity } from "@/models/driver.entity";
import { toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  item: DriverEntity;
}
@Component({
  components: { AppCheckbox, AppIcon },
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const chooseItem = (id: number) => {
      emit("select", id);
    };
    const agregators = Object.keys(AgregatorType)
      .filter((agreg: string) => {
        if (agreg === AgregName.yandex) {
          return !!item.value.YandexDriver;
        }
        if (agreg === AgregName.gett) {
          return !!item.value.GettDriver;
        }
        if (agreg === AgregName.citymobil) {
          return !!item.value.CityMobilDriver;
        }
      })
      .map((agreg) => ({
        key: agreg,
        ...AgregatorType[agreg],
      }));
    return { chooseItem, agregators };
  },
})
export default class GiveCarFormDriverChooseItem extends Vue {
  @Prop(Boolean) active: boolean;
  @Prop({ type: Object, default: () => ({}) }) item: DriverEntity;
}
</script>

<style lang="scss">
.give-car-form-driver-choose {
  &__item {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 25px;
    font-size: $fz_md;
    color: #333;
    > div {
      &:first-child {
        justify-self: self-start;
      }
    }
    @include md {
    //   flex-direction: column;
    //   justify-content: flex-start;
      border: 1px solid #f2f2f2;
      padding: 1rem;
      align-items: flex-start;
      > div {
        margin-bottom: 8px;
      }
    }
  }
}
</style>