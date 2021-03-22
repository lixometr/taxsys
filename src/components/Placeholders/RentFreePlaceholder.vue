<template>
  <page-placeholder class="rent-free-placeholder" :full="true">
    <template #image>
      <img src="@/assets/img/rent_free.png" alt="image" />
    </template>
    <template #text>
      <div>
        Добавьте автомобиль, чтобы сдавать его через наш сервис. Это позволит
        вам:
      </div>
      <ul class="rent-free-placeholder__list mt-20">
        <li>Списывать аренду;</li>
        <li>Контролировать ТО;</li>
        <li>Вести список водителей;</li>
        <li>Отслеживать состояние и пробег ТС;</li>
        <li>Вести реестр путевых листов.</li>
      </ul>
      <div class="mt-20">
        А так же сервис будет подбирать и проверять документы водителей,
        и отображать их в заявках водителей
      </div>
      <app-button class="mt-20" @click="addCar" color="orange-grad"
        >Добавить автомобиль для аренды</app-button
      >
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";
import useRouter from "@/compositions/useRouter";

@Component({
   setup() {
    const router = useRouter();
    const addCar = () => {
      router.push({ name: "CarAdd" });
    };
    return {
      addCar,
    };
  },
  components: { PagePlaceholder },
})
export default class RentFreePlaceholder extends Vue {}
</script>

<style lang="scss">
.rent-free-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/driver_applys_connect_bg.png) right bottom
      no-repeat;
    background-size: 340px auto;
  }
  &__list {
    li {
      display: flex;
      align-self: center;
      justify-content: flex-start;
      &::before {
        content: "";
        display: block;
        width: 22px;
        height: 22px;
        background: url(~@/assets/img/check_mark_circle.png) center center
          no-repeat;
        background-size: contain;
        margin-right: 13px;
        flex-shrink: 0;
      }
    }
    li + li {
      margin-top: 15px;
    }
  }
  .page-placeholder__text {
    max-width: 540px;
  }
  .page-placeholder__image {
    margin-right: 100px;
    @include md {
      margin-right: 0;
    }
  }
}
</style>