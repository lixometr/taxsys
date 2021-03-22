<template>
  <page-placeholder class="rent-work-placeholder">
    <template #image>
      <img src="@/assets/img/rent_in_work.png" alt="image" />
    </template>
    <template #text>
      <div>Пока у вас все автомобили свободны или не добавлены</div>
      <app-button class="mt-20" @click="addCar" color="orange-grad"
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
export default class RentWorkPlaceholder extends Vue {}
</script>

<style lang="scss">
.rent-work-placeholder {
  .page-placeholder__card {
    padding-top: 0;
    padding-bottom: 0;
    @include md {
      padding-bottom: 2rem;
    }
  }
  .page-placeholder__image {
    height: 100%;
    @include md {
      height: auto;
      max-width: 100%;
      margin-bottom: auto;
    }
    img {
      height: 100%;
      width: auto;
      @include md {
        height: auto;
        max-width: 100%;
      }
    }
  }
  .page-placeholder__text {
    @include md {
      margin-top: 30px;
      margin-bottom: auto;
    }
  }
}
</style>