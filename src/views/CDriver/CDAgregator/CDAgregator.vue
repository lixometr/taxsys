<template>
  <div class="cd-page-agregator flex-layout flex-1">
    <cd-agregator-header :agregator="agregator" :balance="agregatorBalance" class="mb-20"/>
    <cd-agregator-tabs :agregator="agregator"/>
    <router-view />
  </div>
</template>

<script lang="ts">
import CdAgregatorTabs from "../../../components/CDAgregator/CdAgregatorTabs.vue";
import CdAgregatorHeader from "../../../components/CDAgregator/CdAgregatorHeader.vue";
import { Component, Vue } from "vue-property-decorator";
import useRouter from "@/compositions/useRouter";
import { computed, ref } from "@vue/composition-api";
import { AgregatorType } from "@/types/agregator.enum";
import { useApiGetAgregatorBalance } from "@/api/agregators";
import { errorHandler } from "@/helpers/error-handler";

@Component({
  components: { CdAgregatorHeader, CdAgregatorTabs },
  setup() {
    const router = useRouter();
    const agregator = computed(() => {
      return router.currentRoute.params.name;
    });
    if (!Object.keys(AgregatorType).includes(agregator.value)) {
      router.push({ name: "CDFinances" });
    }
    const agregatorBalance = ref(0);
    const fetchBalance = async () => {
      const { exec, error, result } = useApiGetAgregatorBalance({
        toast: { error: errorHandler() },
        loading: true,
      });
      await exec({ agregator: agregator.value });
      if (error.value) return;
      agregatorBalance.value = result.value;
    };
    fetchBalance();
    return {
      agregatorBalance,
      agregator,
    };
  },
})
export default class CDAgregator extends Vue {}
</script>

<style lang="scss">
.cd-page-agregator {
  padding-top: 3rem;
}
</style>