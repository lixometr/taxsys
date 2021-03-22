<template>
  <page-placeholder class="driver-applys-rent-placeholder" :full="true">
    <template #image>
      <img src="@/assets/img/driver_applys_rent.png" alt="image" />
    </template>
    <template #text>
      <div>
        <span class="font-500">
          Вы можете сдавать в аренду и контролировать автомобили через наш
          сервис</span
        >
        — это бесплатно. На этой странице будут отображены заявки на аренду от
        водителей. <br />
        <br />
        Для этого требуется добавить автомобиль на странице аренды и прописать
        требование к водителям
      </div>
      <app-button class="mt-20" color="orange-grad" @click="addCar"
        >Добавить автомобиль</app-button
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
export default class DriverApplysRentPlaceholder extends Vue {}
</script>

<style lang="scss">
.driver-applys-rent-placeholder {
  .page-placeholder__image {
    margin-right: 70px;
  }
  
}
</style>