<template>
  <api-select
    :value="value"
    v-bind="$attrs"
    v-on="$listeners"
    :reduce="(item) => item.name"
    selectLabel="name"
    :fetchFunc="fetchFunc"
  />
</template>

<script lang="ts">
import ApiSelect from "./ApiSelect.vue";
import AppSelect from "./AppSelect.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { useApiGetGeoIp } from "@/api/geoip";
import { toRefs } from "@vue/composition-api";

@Component({
  inheritAttrs: false,
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const { exec: getIpInfo, result: definedCity } = useApiGetGeoIp();
    const fetchFunc = async () => {
      const opts = await (import("@/assets/cities.json") as Promise<any>);
      const options = opts.default;
      await getIpInfo();
      if (!value.value && definedCity.value) {
        emit("input", definedCity.value);
      }
      return options;
    };

    return {
      fetchFunc,
    };
  },
  components: { AppSelect, ApiSelect },
})
export default class CitySelect extends Vue {
  @Prop(String) value: string;
}
</script>

<style lang="scss">
</style>