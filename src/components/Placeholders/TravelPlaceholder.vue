<template>
  <div class="travels-placeholder flex-1 flex-layout">
    <div class="travels-placeholder__content app-card flex-1">
      <div class="travels-placeholder__title">
        Ваши водители еще не совершали поездки
      </div>
      <div class="travels-placeholder__items">
        <div class="travels-placeholder__item">
          <div class="travels-placeholder__item-text">
            Если у вас нет договора с агрегаторами вы можете работать на базе
            нашей диспетчерской.
          </div>
          <app-button color="orange-grad" @click="addDriver"
            >Добавить водителя</app-button
          >
        </div>
        <div class="travels-placeholder__item">
          <div class="travels-placeholder__item-text">
            Если у вас есть диспетчерская, добавьте интеграцию в настройках.
          </div>
          <app-button color="orange-grad" @click="addDispetcher">добавить</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useRouter from "@/compositions/useRouter";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
  setup() {
    const router = useRouter();
    const addDriver = () => {
      router.push({ name: "AddDriver" });
    };
    const addDispetcher = () => {
      router.push({ name: "SettingsDispetchers" });
    };
    return { addDriver, addDispetcher };
  },
})
export default class TravelPlaceholder extends Vue {}
</script>

<style lang="scss">
.travels-placeholder {
  padding-top: 3rem;
  padding-bottom: 3rem;
  &__content {
    background-image: url(~@/assets/img/sandclock.png) ;
    background-color: $white;
    background-repeat: no-repeat;
    background-size: auto 80%;
    background-position: 100px center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @include sm {
        background-position: 20px center;
    }
  }
  &__title {
    margin-bottom: 40px;
    color: $grey_2;
    font-weight: 600;
    font-size: 2.6rem;
    @include sm {
        font-size: 2.2rem;
    }
  }
  &__items {
    display: flex;
    @include md {
        flex-direction: column;
    }
  }
  &__item {
    border: 1px solid #cecbf8;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5rem 3rem;
    color: $grey_2;
    font-size: $fz_ml;
    text-align: center;
    line-height: 32px;
    max-width: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-shrink: 0;
    &:first-child {
      margin-right: 40px;
    }
    @include md {
        padding: 3rem 2rem;
        &:first-child {
            margin-right: 0;
            margin-bottom: 30px;
        }
    }
    @include sm {
        padding: 2rem 1rem;
        font-size: $fz_sm;
    }
    &-text {
      margin-bottom: 30px;
    }
  }
}
</style>