<template>
  <div class="register-strategy-choose">
    <auth-form>
      <template #title>
        <div class="register-strategy-choose__title">Регистрация</div>
      </template>
      <template>
        <div class="register-strategy-choose__row">
          <div class="register-strategy-choose__col choose-col">
            <div class="choose-col__btn">
              <app-button
                color="orange"
                :stroke="true"
                @click="choose(Strategies.driver)"
                >водитель</app-button
              >
            </div>
            <div class="choose-col__desc">
              Регистрируясь в качестве водителя вы получаете доступ к:
            </div>
            <div class="choose-col__features">
              <div
                class="choose-col__feature"
                v-for="(feature, idx) in driverFeatures"
                :key="idx"
              >
                <svgCheckCircle /> <span>{{ feature }}</span>
              </div>
            </div>
            <div class="choose-col__desc mb-0 mt-20">
              И другим полезным данным, которые касаются работы в такси
            </div>
          </div>
          <div class="register-strategy-choose__col choose-col">
            <div class="choose-col__btn">
              <app-button
                color="orange"
                :stroke="true"
                @click="choose(Strategies.park)"
                >таксопарк</app-button
              >
            </div>
            <div class="choose-col__desc">
              Регистрируясь в качестве таксопарка у вас не будет доступа к
              заказам такси. Вы можете:
            </div>
            <div class="choose-col__features">
              <div
                class="choose-col__feature"
                v-for="(feature, idx) in parkFeatures"
                :key="idx"
              >
                <svgCheckCircle /> <span>{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </auth-form>
  </div>
</template>

<script lang="ts">
import AuthForm from "../Auth/AuthForm.vue";
import { Component, Vue } from "vue-property-decorator";
import svgCheckCircle from "@/assets/icons/check-circle.svg";
enum Strategies {
  driver = "driver",
  park = "park",
}
@Component({
  components: { AuthForm, svgCheckCircle },
  setup(props, { emit }) {
    const choose = (item: string) => {
      emit("input", item);
    };
    const driverFeatures = [
      "Заказам такси",
      "Функционалу для получения выплат средств за безналичные поездки",
      "Штрафам гибдд по вашему автомобилю",
    ];
    const parkFeatures = [
      "Проверять и добавлять водителей",
      "Контролировать их работу",
      "Добавлять свои диспетчерские, платежные системы",
      "Проводить выплаты",
      "Сдавать автомобили в аренду через наш сервис",
    ];
    return { choose, Strategies, driverFeatures, parkFeatures };
  },
})
export default class RegisterStrategyChoose extends Vue {}
</script>

<style lang="scss">
.register-strategy-choose {
  &__title {
    text-align: center;
    margin-bottom: 50px;
  }
  &__row {
    display: flex;
    @include sm {
      flex-direction: column;
    }
  }

  .choose-col {
    color: $grey_2;
    position: relative;
    &:first-child {
      padding-right: 15px;
      @include sm {
        padding-right: 0;
        padding-bottom: 20px;
      }
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        background: rgba(143, 138, 255, 0.2);
        width: 1px;
        height: 170px;
        @include sm {
          top: auto;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 1px;
          width: 70%;
        }
      }
    }
    &:last-child {
      padding-left: 15px;
      @include sm {
        padding-top: 20px;
        padding-left: 0;
      }
    }
    &__features {
    }
    &__feature {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
        width: 20px;
        flex-shrink: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__btn {
      margin-bottom: 30px;
      @include sm {
        text-align: center;
      }
      .btn {
        padding: 13px 50px;
      }
    }
    &__desc {
      color: $grey_2;
      margin-bottom: 20px;
    }
  }
}
</style>