<template>
  <div class="driver-check-info" v-if="!isLoading">
    <page-title>
      <h2>Проверка водителя</h2>
    </page-title>
    <driver-check-info-driver class="mb-30" :item="item" />
    <driver-check-info-fcp class="mb-30" :item="item" />
    <driver-check-info-data :item="item" />
  </div>
</template>

<script lang="ts">
import DriverCheckInfoData from "@/components/DriverCheckInfo/DriverCheckInfoData.vue";
import DriverCheckInfoFcp from "@/components/DriverCheckInfo/DriverCheckInfoFcp.vue";
import DriverCheckInfoDriver from "@/components/DriverCheckInfo/DriverCheckInfoDriver.vue";
import PageTitle from "@/components/Page/PageTitle.vue";
import { useApiGetDriverCheckById } from "@/api/driver-check";
import useGlobalLoading from "@/compositions/useGlobalLoading";
import useRouter from "@/compositions/useRouter";
import { errorHandler } from "@/helpers/error-handler";
import { computed, toRefs, watch } from "@vue/composition-api";
import { AxiosError } from "axios";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DriverCheckEntity } from "@/models/driver-check.entity";
@Component({
  metaInfo: {
    title: "Проверка водителя",
  },
  components: {
    PageTitle,
    DriverCheckInfoDriver,
    DriverCheckInfoFcp,
    DriverCheckInfoData,
  },
  setup(props: { id: string }) {
    const router = useRouter();
    const id = router.currentRoute.params.id;
    const {
      exec: fetchData,
      result,
      error,
      isLoading,
    } = useApiGetDriverCheckById({
      loading: true,
      toast: {
        error: (error: AxiosError) => {
          router.push({ name: "DriverCheck" });
          return errorHandler()(error);
        },
      },
    });

    fetchData({ id: parseInt(id) });
    const item = computed(() => result.value || ({} as DriverCheckEntity));
    const showPassport = computed(() => {
      return item.value.statuses.passport === 'done'
    });
    return {
      showPassport,
      isLoading,
      item,
    };
  },
})
export default class DriverCheckInfo extends Vue {
  @Prop(String) id: string;
}
</script>

<style lang="scss">
.driver-check-info {
  .app-card {
    padding: 0 1.5rem 4rem 1.5rem;
  }
}
</style>