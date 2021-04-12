<template>
  <div class="applications-items flex-layout flex-1">
    <page-title :between="true">
      <div>
        <h2>Приложение</h2>
      </div>
      <div>
        <app-button color="orange" @click="createApp" :shadow="true"
          >Создать приложение <svgPlus class="ml-10"
        /></app-button>
      </div>
    </page-title>
    <div class="applications-items__wrapper" v-if="true">
      <applications-item
        v-for="(item, idx) in items"
        :item="item"
        :key="idx"
        @save="refreshItems"
      />
    </div>
    <applications-placeholder v-else></applications-placeholder>
  </div>
</template>

<script lang="ts">
import ApplicationsItem from "../../components/Applications/ApplicationsItem.vue";
import ApplicationsPlaceholder from "../../components/Placeholders/ApplicationsPlaceholder.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/plus.svg";
import useRouter from "@/compositions/useRouter";
import { useApiGetApplications } from "@/api/applications";
import { computed, ref } from "@vue/composition-api";
import { errorHandler } from "@/helpers/error-handler";
import { exec } from "apexcharts";
@Component({
  components: {
    PageTitle,
    svgPlus,
    ApplicationsPlaceholder,
    ApplicationsItem,
  },
  setup() {
    const router = useRouter();
    const createApp = () => {
      router.push({ name: "ApplicationsRent" });
    };
    const items = ref([]);

    const refreshItems = async () => {
      const { exec, result } = useApiGetApplications({
        toast: {
          error: errorHandler(),
        },
      });
      await exec();
      items.value = result.value;
    };
    const fetchItems = async () => {
      const { exec, result } = useApiGetApplications({
        loading: true,
        toast: {
          error: errorHandler(),
        },
      });
      await exec();
      items.value = result.value;
    };
    fetchItems()
    return {
      refreshItems,
      items,
      createApp,
    };
  },
})
export default class ApplicationsItems extends Vue {}
</script>

<style lang="scss">
</style>