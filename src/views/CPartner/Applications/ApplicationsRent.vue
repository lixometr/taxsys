<template>
  <div class="page-applications-rent flex-1 flex-layout">
    <page-title :between="true">
      <div>
        <title-back @back="goBack">
          <h2>Аренда приложения</h2>
        </title-back>
      </div>
      <!-- <div>
        <app-button color="orange" @click="createApp" :shadow="true"
          >Создать приложение <svgPlus class="ml-10"
        /></app-button>
      </div> -->
    </page-title>
    <div class="app-card flex-1">
      <applications-rent-form @send="onSend"/>
    </div>
  </div>
</template>

<script lang="ts">
import ApplicationsRentForm from "@/components/Applications/ApplicationsRentForm.vue";
import TitleBack from "@/components/Register/TitleBack.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import SettingsTopBar from "@/components/Settings/SettingsTopBar.vue";
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/plus.svg";
import useRouter from "@/compositions/useRouter";

@Component({
  components: {
    SettingsTopBar,
    PageTitle,
    svgPlus,
    TitleBack,
    ApplicationsRentForm,
  },
  setup() {
    const router = useRouter();
    const onSend = () => {
      router.push({name: "ApplicationsItems"})
    }
    const goBack = () => {
      router.back();
    };
    return {
      onSend,
      goBack,
    };
  },
})
export default class ApplicationsRent extends Vue {}
</script>

<style >
</style>