<template>
  <div class="rent-item">
    <app-accardion>
      <template #header>
        <app-accardion-col class="col-lg-3 col-md-6">
          <div class="rent-item__model">
            <div class="rent-item__image">
              <img src="@/assets/img/rent_car.png" alt="image" />
            </div>
            <div class="rent-item__model-name">Mazda 6</div>
          </div>
        </app-accardion-col>

        <app-accardion-col class="col-lg-3 col-md-6">
          <div class="rent-item__charcs color-grey-2 w-100">
            <div class="rent-item__charc">2005 г.в.</div>
            <div class="rent-item__charc">116 223 км</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-2 col-md-4">
          <div class="rent-item__number car-number">
            <div class="car-number-num">A 420 BП</div>
            <div class="car-number-code">777</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-2 col-md-4">
          <div class="rent-item__price">3000 {{ currency }}</div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-2 col-md-4">
          <div class="rent-item__btn">
            <app-button color="green" @click="approve">выдать</app-button>
          </div>
        </app-accardion-col>
      </template>
      <template>
        <app-accardion-col class="col-lg-3">
          <div class="rent-item__description">
            <div class="font-500 color-grey-2">Описание</div>
            <div class="color-grey-3">
              Sodales eget risus, ornare platea rutrum tincidunt. Aliquam lacus
              aliquet eget consectetur. <a href="#">Подробнее</a>
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-3">
          <div class="rent-item__requirements">
            <div class="font-500 color-grey-2">Требования к водителю</div>
            <div class="color-grey-3">
              Sodales eget risus, ornare platea rutrum tincidunt. Aliquam lacus
              aliquet eget consectetur. Подробнее
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-3">
          <div class="rent-item__deposit w-100">
            <rent-item-deposit v-model="deposit"/>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-lg-3">
          <div class="rent-item__actions">
            <action-icon-edit
              class="rent-item__action"
              @click="edit"
            />

            <action-icon-active
              class="rent-item__action "
              @click="toggleActive"
              :isActive="true"

            />
            <action-icon-delete class="rent-item__action" @click="remove">
            </action-icon-delete>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import RentItemDeposit from './RentItemDeposit.vue'
import ActionIconEdit from '../ActionIcons/ActionIconEdit.vue'
import ActionIconActive from "../ActionIcons/ActionIconActive.vue";
import ActionIconDelete from "../ActionIcons/ActionIconDelete.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgEdit from "@/assets/icons/edit.svg";
import svgTrash from "@/assets/icons/trash.svg";
import svgEye from "@/assets/icons/eye.svg";
import { ref } from '@vue/composition-api';
@Component({
  setup(props, { emit }) {
    const deposit = ref('')
    const approve = () => {
      emit("approve");
      return;
    };
    const edit = () => {
      emit("edit");
    };
    const remove = () => {
      emit("remove");
    };
    const toggleActive = () => {
      emit("active");
    };
    return {
      deposit,
      remove,
      toggleActive,
      approve,
      edit,
    };
  },
  components: {
    svgEdit,
    svgTrash,
    svgEye,
    ActionIconDelete,
    ActionIconActive, ActionIconEdit, RentItemDeposit
  },
})
export default class RentItem extends Vue {
  @Prop() item: any;
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.rent-item {
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
  &__charcs {
    display: flex;
    justify-content: space-between;
    font-size: $fz_md;
    @include md {
      justify-content: flex-start;
    }
  }
  &__charc {
    &:first-child {
      margin-right: 20px;
    }
  }

  &__price {
    color: $grey_1;
    font-weight: 600;
    font-size: $fz_md;
  }
  &__btn {
    .btn {
      background: #27ae60;
      padding: 8px 20px;
    }
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }

  .app-accardion-col {
    display: flex;
    align-items: center;
  }
}
</style>