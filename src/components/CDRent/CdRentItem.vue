<template>
  <div class="app-card cd-rent-item">
    <div class="cd-rent-item__car-preview">
      <div class="">
        <app-image
          :width="150"
          :height="100"
          border
          :src="require('@/assets/img/car-fines-mock.jpg')"
        />
      </div>
      <div class="font-md cd-rent-item__car-info color-grey-2">
        <div class="font-600 mb-5">Mazda 6, 2005 г.в.</div>
        <div class="mb-10">116 223 км</div>
        <div>Люкс +</div>
      </div>
    </div>
    <div class="mt-15">
      <div class="color-graphit font-md font-500">Описание</div>
      <div>
        Sodales eget risus, ornare platea rutrum tincidunt. Aliquam lacus
        aliquet eget consectetur. Подробнее
      </div>
    </div>
    <div class="mt-20">
      <div class="color-graphit font-md font-500">Требование к водителю</div>
      <div>
        • In sit dignissim egestas pellentesque nec <br />
        • Сommodo enim, tristique arcu.
      </div>
    </div>
    <div class="mt-20">
      <rent-item-deposit
        class="rent-item-deposit"
        deposit="5000"
        v-model="rentDeposit"
      />
    </div>
    <div class="cd-rent-item__footer">
      <div class="color-grey-1">
        <div>Аренда</div>
        <div class="font-md font-600">3 000 ₽</div>
      </div>
      <div>
        <app-button class="cd-rent-item__btn" :stroke="true" color="orange" @click="chooseItem">
          Выбрать</app-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppImage from "../AppImage.vue";
import RentItemDeposit from "../Rent/RentItemDeposit.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";

@Component({
  components: { RentItemDeposit, AppImage },
  setup() {
    const rentDeposit = ref("70");
    const chooseItem = () => {
      return;
    };
    return { chooseItem, rentDeposit };
  },
})
export default class CDRentCard extends Vue {}
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
      color: #FFB700;
      border-color: #FFB700;
      padding: 1.2rem 5rem;
      @include xs {
          padding: .8rem 3rem;
      }
  }
}
</style>