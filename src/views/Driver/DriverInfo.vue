<template>
  <div class="page-driver-info flex-layout">
    <page-title :between="true">
      <title-back @back="goBack">
        <template>
          <h2>Данные водителя</h2>
        </template>
      </title-back>
    </page-title>
    <div class="driver-info__items" v-if="!isLoading">
      <driver-info-header :item="item" />
      <driver-info-agregators class="mb-20" :item="item" />
      <driver-info-data :item="item" />
      <driver-info-car :item="item" />
      <driver-info-cards class="mb-20" :item="item" @refresh="refresh" />
      <driver-info-stats class="mb-20" :item="item" @refresh="refresh" />
      <driver-info-transactions :item="item" @refresh="refresh" />
      <driver-info-black-list class="mb-20" :item="item" @refresh="refresh" />
    </div>
  </div>
</template>

<script lang="ts">
import DriverInfoStats from '../../components/DriverInfo/DriverInfoStats.vue'
import DriverInfoBlackList from '../../components/DriverInfo/DriverInfoBlackList.vue'
import DriverInfoTransactions from '../../components/DriverInfo/DriverInfoTransactions.vue'
import DriverInfoCards from "../../components/DriverInfo/DriverInfoCards.vue";
import DriverInfoCar from "../../components/DriverInfo/DriverInfoCar.vue";
import DriverInfoData from "../../components/DriverInfo/DriverInfoData.vue";
import DriverInfoAgregators from "../../components/DriverInfo/DriverInfoAgregators.vue";
import DriverInfoHeader from "../../components/DriverInfo/DriverInfoHeader.vue";
import TitleBack from "../../components/Register/TitleBack.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import useRouter from "@/compositions/useRouter";
import { computed, ref, watch } from "@vue/composition-api";
import { useApiGetDriverInfo } from "@/api/driver";
import { errorHandler } from "@/helpers/error-handler";

@Component({
  components: {
    PageTitle,
    TitleBack,
    DriverInfoHeader,
    DriverInfoAgregators,
    DriverInfoData,
    DriverInfoCar,
    DriverInfoCards, DriverInfoTransactions, DriverInfoBlackList, DriverInfoStats
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.push({ name: "DriverList" });
    };
    const item = ref({});
    const { exec, result, error, isLoading } = useApiGetDriverInfo({
      toast: { error: errorHandler() },
      loading: true,
    });
    const id = parseInt(router.currentRoute.params.id);
    if (isNaN(id)) {
      router.push({ name: "DriverList" });
      return;
    }
    const fetchDriver = async () => {
      await exec({ id });
      if (error.value) {
        router.push({ name: "DriverList" });
        return;
      }
      item.value = result.value;
    };
    fetchDriver();
    const refresh = async () => {
      const { exec, result, error, isLoading } = useApiGetDriverInfo({
        toast: { error: errorHandler() },
      });
      await exec({id});
      if (error.value) return;
      item.value = result.value;
    };

    return { goBack, item, refresh, isLoading };
  },
})
export default class DriverInfo extends Vue {}
</script>

<style lang="scss">
</style>