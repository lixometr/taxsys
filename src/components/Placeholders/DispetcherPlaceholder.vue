<template>
  <div class="flex-1 flex-layout dispetcher-placeholder">
    <div class="row flex-1">
      <div class="col-xl-7">
        <div class="app-card dispetcher-placeholder__info">
          <div class="dispetcher-placeholder__row">
            <div class="dispetcher-placeholder__img">
              <img src="@/assets/img/dispetcher_placeholder.png" alt="" />
            </div>
            <div class="dispetcher-placeholder__title">
              <div class="font-500 mb-10">Диспетчерские пока не добавлены.</div>
              Вы можете работать на базе нашей диспетчерской, пока не подключите
              свою.
            </div>
          </div>
          <div class="text-center mt-30">
            <app-button color="orange-grad" @click="addDispetcher">
              Добавить диспетчерскую
            </app-button>
          </div>
        </div>
      </div>
      <div class="col-xl-5">
        <div class="app-card dispetcher-placeholder__agregators">
          <div
            class="text-center color-purple dispetcher-placeholder__agregators-title"
          >
            Оставить заявку на партнерство с агрегаторами
          </div>
          <div class="dispetcher-placeholder__agregators-items">
            <div class="dispetcher-placeholder__agregators-item">
              <img src="@/assets/img/yandex_taxy.png" alt="" />
              <span> Яндекс.Такси </span>
            </div>
            <div class="dispetcher-placeholder__agregators-item">
              <img src="@/assets/img/gett_logo.jpeg" alt="" />
              <span> Gett Такси </span>
            </div>
            <div class="dispetcher-placeholder__agregators-item">
              <img src="@/assets/img/city_logo.jpg" alt="" />
              <span> Ситимобил </span>
            </div>
            <div class="dispetcher-placeholder__agregators-item">
              <img src="@/assets/img/didi_logo.png" alt="" />
              <span> DiDi </span>
            </div>
            <div class="dispetcher-placeholder__agregators-item">
              <img src="@/assets/img/bolt_logo.png" alt="" />
              <span> Bolt </span>
            </div>
            <div class="dispetcher-placeholder__agregators-item">
              <img src="@/assets/img/wheely_logo.png" alt="" />
              <span> Wheely </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";

@Component({
  components: { PagePlaceholder },
  setup(props, { emit }) {
    const addDispetcher = () => {
      const { showByName } = useModal();
      showByName(ModalName.addDispetcher, {
        on: {
          send: () => emit("refresh"),
        },
      });
    };
    return { addDispetcher };
  },
})
export default class DispetcherPlaceholder extends Vue {}
</script>

<style lang="scss">
.dispetcher-placeholder {
  padding-top: 4rem;
  &__row {
    display: flex;
    align-items: center;
    > div {
      &:first-child {
        margin-right: 60px;
        @include md {
          margin-right: 0;
          margin-bottom: 20px;
        }
      }
    }
  }
  &__title {
    font-size: 2rem;
    color: $grey_2;
    @include md {
      font-size: 1.8rem;
    }
    @include sm {
      font-size: 1.4rem;
    }
  }
  &__agregators {
    &-title {
      font-size: 2rem;
      color: $purple;
      margin-bottom: 20px;
    }
    &-items {
      display: flex;
      flex-wrap: wrap;
    }
    &-item {
      background: $white;
      border: 1px solid rgba(184, 181, 255, 0.15);
      box-sizing: border-box;
      box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.06);
      border-radius: 8px;
      padding: 1.5rem 2rem;
      margin: 10px;
      width: calc(50% - 40px);
      display: flex;
      align-items: center;
      img {
        width: 46px;
      }
      span {
        margin-left: 15px;
      }
    }
  }
}
</style>