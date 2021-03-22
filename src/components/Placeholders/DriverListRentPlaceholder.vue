<template>
  <page-placeholder class="driver-list-rent-placeholder" :full="true">
    <template #image>
      <img src="@/assets/img/driver_list_rent.png" alt="image" />
    </template>
    <template #text>
      <div>
        В списке водителей на аренде появятся данные после того, как вы добавите
        автомобиль для аренды в нашем сервисе и свяжете его с водителем
      </div>
      <app-button @click="addCar" class="mt-25" color="orange-grad"
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
export default class DriverListRentPlaceholder extends Vue {}
</script>

<style lang="scss">
.driver-list-rent-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/driver_list_rent_bg.png) right bottom
      no-repeat;
    background-size: 520px auto;
  }
  .page-placeholder__image {
    margin-right: 70px;
  }
}
</style>