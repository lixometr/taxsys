<template>
  <div class="app-card cd-rent-item">
    <div class="cd-rent-item__car-preview">
      <div class="">
        <app-image :width="150" :height="100" border :src="mainImage" />
      </div>
      <div class="font-md cd-rent-item__car-info color-grey-2">
        <div class="font-600 mb-5">
          {{ item.Brand }} {{ item.Model }} {{ item.Year }} г.в.
        </div>
        <div class="mb-10">{{ milleage }} км</div>
        <div>{{ item.Equipment }}</div>
      </div>
    </div>
    <div class="mt-15">
      <div class="color-graphit font-md font-500">Описание</div>
      <div v-html="item.Description"></div>
    </div>
    <div class="mt-20">
      <div class="color-graphit font-md font-500">Требование к водителю</div>
      <div v-html="item.DriverRequirements"></div>
    </div>
    <div class="mt-20">
      <rent-item-deposit
        class="rent-item-deposit"
        :deposit="item.Deposit"
        v-model="rentDeposit"
      />
    </div>
    <div class="cd-rent-item__footer">
      <div class="color-grey-1">
        <div>Аренда</div>
        <div class="font-md font-600">{{ rentCost }} {{ currency }}</div>
      </div>
      <div>
        <app-button
          class="cd-rent-item__btn"
          :stroke="true"
          color="orange"
          @click="createRequest"
        >
          Выбрать</app-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppImage from "../AppImage.vue";
import RentItemDeposit from "../Rent/RentItemDeposit.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed, ref, toRefs } from "@vue/composition-api";
import { Car } from "@/models/car.entity";
import {
  useApiCreateRentalRequest,
  useApiRemoveRentalRequest,
} from "@/api/rental-request";
import { errorHandler } from "@/helpers/error-handler";
interface IProps {
  [key: string]: any;
  item: Car;
}
@Component({
  components: { RentItemDeposit, AppImage },
  setup(props: IProps) {
    const { item } = toRefs<IProps>(props);
    const rentDeposit = ref("70");
    const createRequest = async () => {
      const { exec, error, result } = useApiCreateRentalRequest({
        toast: {
          error: errorHandler(),
          success: () => "Запрос на аренду успешно отправлен!",
        },
      });
      await exec({ carId: item.value.id });
      if (error.value) return;
    };
    const cancelRequest = async () => {
      const { exec, error, result } = useApiRemoveRentalRequest({
        toast: {
          error: errorHandler(),
          success: () => "Запрос на аренду успешно отменен!",
        },
      });
      await exec({ id: item.value.id });
      if (error.value) return;
    };
    const rentCost = computed(() => {
      if (rentDeposit.value === "61") {
        return item.value.Rent61 || 0;
      }
      if (rentDeposit.value === "70") {
        return item.value.Rent70 || 0;
      }
      if (rentDeposit.value === "ransom") {
        return item.value.Ransom || 0;
      }
    });
    return { createRequest, cancelRequest, rentCost, rentDeposit };
  },
})
export default class CDRentCard extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: Car;
  get milleage() {
    return Intl.NumberFormat("ru").format(this.item.Milleage);
  }
  get currency() {
    return this.$store.getters.currency;
  }
  get mainImage() {
    return this.item.images[0] && this.item.images[0].url;
  }
}
</script>

<style lang="scss">
.cd-rent-item {
  max-width: 400px;
  @include lg {
    margin: 0 auto;
  }
  &__car {
    &-preview {
      display: flex;
      align-items: center;
      @include sm {
        flex-direction: column;
        align-items: flex-start;
      }
      > div {
        flex: 1;
        &:first-child {
          margin-right: 15px;
          @include sm {
            margin-right: 0;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
  &__footer {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
  }
  .rent-item-deposit {
    background: transparent;
    &__header {
      background: #edecff;
      border-radius: 5px;
      margin-bottom: 15px;
    }
  }
  &__btn {
    color: #ffb700;
    border-color: #ffb700;
    padding: 1.2rem 5rem;
    @include xs {
      padding: 0.8rem 3rem;
    }
  }
}
</style>