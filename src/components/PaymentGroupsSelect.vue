<template>
  <api-select
    v-bind="$attrs"
    v-on="$listeners"
    :reduce="(item) => item.id"
    selectLabel="name"
    :fetchFunc="fetchFunc"
  />
</template>

<script lang="ts">
import ApiSelect from "./ApiSelect.vue";
import AppSelect from "./AppSelect.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { useApiGetPaymentGroups } from "@/api/payment-groups";

@Component({
  inheritAttrs: false,
  setup() {
    const { exec, result, error } = useApiGetPaymentGroups();
    const fetchFunc = async () => {
      await exec();
      const options = result.value || []
      if(error.value) return []
      return options;
    };

    return {
      fetchFunc,
    };
  },
  components: { AppSelect, ApiSelect },
})
export default class PaymentGroupsSelect extends Vue {
}
</script>

<style lang="scss">
</style>