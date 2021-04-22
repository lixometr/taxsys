<template>
  <div class="page-car-add">
    <page-title>
      <title-back @back="goBack">
        <template>
          <h2>Добавить автомобиль</h2>
        </template>
      </title-back>
    </page-title>
    <div class="car-add__form">
      <div class="app-card"><car-add-form /></div>
    </div>
  </div>
</template>

<script lang="ts">
import CarAddForm from "@/components/Car/CarAdd/CarAddForm.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import TitleBack from "@/components/Register/TitleBack.vue";
import { Component, Vue } from "vue-property-decorator";
import useRouter from "@/compositions/useRouter";

@Component({
  metaInfo: {
    title: "Добавить автомобиль",
  },
  components: { TitleBack, PageTitle, CarAddForm },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    return {
      goBack,
    };
  },
})
export default class CarAdd extends Vue {}
</script>

<style lang="scss">
.page-car-add {
  padding-bottom: 3rem;
  .app-card {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}
</style>