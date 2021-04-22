<template>
  <div class="settings-widget-add flex-layout flex-1">
    <page-title
      ><title-back @back="onBack"><h2>Профиль</h2></title-back></page-title
    >
    <div class="app-card flex-1">
      <widget-add-form type="edit" :item="widget" v-if="!isLoading"/>
    </div>
  </div>
</template>

<script lang="ts">
import WidgetAddForm from "@/components/Settings/Widget/WidgetAddForm.vue";
import TitleBack from "@/components/Register/TitleBack.vue";
import ProfileNotys from "@/components/Settings/Profile/ProfileNotys.vue";
import ProfileWidgets from "@/components/Settings/Profile/ProfileWidgets.vue";
import ProfileReqs from "@/components/Settings/Profile/ProfileReqs.vue";
import ProfileName from "@/components/Settings/Profile/ProfileName.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import useRouter from "@/compositions/useRouter";
import { useApiGetWidget } from "@/api/widget";
import { errorHandler } from "@/helpers/error-handler";

@Component({
  setup() {
    const router = useRouter();
    const onBack = () => {
      router.push({ name: "SettingsProfile" });
    };
    const { exec, error, result: widget, isLoading } = useApiGetWidget({
      loading: true,
      toast: { error: errorHandler() },
    });
    const id = +router.currentRoute.params.id;
    if (isNaN(id)) onBack();
    const fetchWidget = async () => {
      await exec({ id });
      if (error.value) {
        onBack();
      }
    };
    fetchWidget()
    return {
      isLoading,
      widget,
      onBack,
    };
  },
  components: {
    PageTitle,
    ProfileName,
    ProfileReqs,
    ProfileWidgets,
    ProfileNotys,
    TitleBack,
    WidgetAddForm,
  },
})
export default class WidgetAdd extends Vue {}
</script>

<style lang="scss">
</style>