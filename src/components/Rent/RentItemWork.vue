<template>
  <div class="rent-item-work">
    <app-accardion>
      <template #header>
        <app-accardion-col class="col-xl-2 col-md-4">
          <div class="rent-item-work__model">
            <div class="rent-item-work__image">
              <app-image :src="mainImage" alt="image" />
            </div>
            <div class="rent-item-work__model-name">
              {{ item.Brand }} {{ item.Model }}
            </div>
          </div>
        </app-accardion-col>

        <app-accardion-col class="col-xl-2 col-md-4">
          <div class="rent-item-work__charcs color-grey-2 w-100">
            <div class="rent-item-work__charc">{{ item.Year }} г.в.</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-md-4">
          <div class="rent-item-work__number car-number">
            <div class="car-number-num">
              <router-link
                class="color-grey-2"
                :to="{ name: 'CarInfo', params: { id: item.id } }"
                @click.stop
                >{{ item.GosNomer }}</router-link
              >
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-2 col-md-4">
          <div>Долгополов Иван Дмитриевич</div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-1 col-md-4">
          <div>Аренда</div>
        </app-accardion-col>

        <app-accardion-col class="col-xl-3 col-md-4">
          <div class="rent-item-work__status-btns">
            <app-status size="sm" color="purple" :stroke="true" class="mr-20"
              >оплачен</app-status
            >
            <div class="rent-item-work__btn">
              <app-button color="red" size="sm" @click.stop="take"
                >забрать</app-button
              >
            </div>
          </div>
        </app-accardion-col>
      </template>
      <template>
        <app-accardion-col class="col-12">
          <div class="row">
            <div class="col-xl-2 col-md-6 rent-item-work__content-col">
              <div class="row">
                <div class="col color-grey-3">Начало аренды:</div>
                <div class="col color-grey-2">28.03.2020</div>
              </div>
            </div>
            <div class="col-xl-2 col-md-6 rent-item-work__content-col">
              <div class="row">
                <div class="col color-grey-3">Ставка:</div>
                <div class="col color-grey-2">3000 ₽</div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 rent-item-work__content-col">
              <div class="row">
                <div class="col color-grey-3">Депозит:</div>
                <div class="col color-grey-2">5 000 / 20 000</div>
              </div>
            </div>
            <div class="col-xl-2 col-md-6 rent-item-work__content-col">
              <div class="row">
                <div class="col color-grey-3">Штрафы:</div>
                <div class="col color-grey-2">15</div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 rent-item-work__content-col">
              <div class="rent-item-work__actions row">
                <app-button
                  class="rent-item-work__action"
                  color="orange"
                  size="sm"
                  @click="block"
                >
                  блокировать
                </app-button>
                <app-button
                  class="rent-item-work__action"
                  color="grey"
                  size="sm"
                  @click="unblock"
                >
                  разблокировать
                </app-button>
              </div>
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-12">
          <rent-item-work-fines :item="item" />
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import RentItemWorkFines from "./RentItemWorkFines.vue";
import AppImage from "../AppImage.vue";
import ActionIconEdit from "../ActionIcons/ActionIconEdit.vue";
import ActionIconActive from "../ActionIcons/ActionIconActive.vue";
import ActionIconDelete from "../ActionIcons/ActionIconDelete.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgEdit from "@/assets/icons/edit.svg";
import svgTrash from "@/assets/icons/trash.svg";
import svgEye from "@/assets/icons/eye.svg";
import { computed, ref, toRefs } from "@vue/composition-api";
import { Car } from "@/models/car.entity";
import AppStatus from "../AppStatus.vue";
import { useApiBlockCar, useApiUnBlockCar } from "@/api/car";
import { errorHandler } from "@/helpers/error-handler";
interface IProps {
  [key: string]: any;
  item: Car;
}
@Component({
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const take = () => {
      emit("take");
      return;
    };
    const block = async () => {
      const { exec, error } = useApiBlockCar({
        toast: {
          error: errorHandler(),
          success: () => "Машина успешно заблокирована!",
        },
      });
      await exec({ id: item.value.id });
    };
    const unblock = async () => {
      const { exec, error } = useApiUnBlockCar({
        toast: {
          error: errorHandler(),
          success: () => "Машина успешно заблокирована!",
        },
      });
      await exec({ id: item.value.id });
    };
    return {
      block,
      unblock,
      take,
    };
  },
  components: {
    svgEdit,
    svgTrash,
    svgEye,
    ActionIconDelete,
    ActionIconActive,
    ActionIconEdit,
    AppImage,
    AppStatus,
    RentItemWorkFines,
  },
})
export default class RentItem extends Vue {
  @Prop() item: Car;
  get mainImage() {
    return this.item.images[0] && this.item.images[0].url;
  }
  get currency() {
    return this.$store.getters.currency;
  }

  get driver() {
    return this.item.driver || {};
  }
}
</script>

<style lang="scss">
.rent-item-work {
  &__image {
    img {
      border: 1px solid #b8b5ff;
      box-sizing: border-box;
      border-radius: 5px;
    }
  }
  &__model {
    display: flex;
    align-items: center;
  }
  &__model-name {
    font-weight: 600;
    color: $grey_2;
    font-size: $fz_md;
    margin-left: 2rem;
  }
  &__actions {
    display: flex;
    justify-content: flex-end;
    @include lg {
      justify-content: flex-start;
    }
  }
  &__action {
    padding: 0.7rem 1.4rem;
    @include lg {
      margin-bottom: 10px;
    }
    &:first-child {
      margin-right: 10px;
    }
  }
  &__status-btns {
    display: flex;
    @include md {
      flex-direction: column;
    }
    .btn {
      &:first-child {
        @include md {
          margin-bottom: 15px;
        }
      }
    }
  }
  &__content-col {
    @include lg {
      margin-bottom: 15px;
    }
  }
}
</style>