<template>
  <div class="city-select" ref="container">
    <app-select
      :value="value"
      v-bind="$attrs"
      :options="options"
      v-on="$listeners"
      :reduce="(item) => item.name"
      selectLabel="name"
    />
  </div>
</template>

<script lang="ts">
import AppSelect from "./AppSelect.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { useApiGetGeoIp } from "@/api/geoip";
import { onMounted, ref, toRefs, watch } from "@vue/composition-api";
import useLoading from "@/compositions/useLoading";

@Component({
  inheritAttrs: false,
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const container = ref(null);
    const { exec: getIpInfo, result: definedCity } = useApiGetGeoIp();
    const options = ref([]);
    onMounted(async () => {
      const loading = useLoading({
        container: container.value,
        width: 20,
        height: 40,
      });
      loading.show();
      const opts = await (import("@/assets/cities.json") as Promise<any>);
      options.value = opts.default;
      await getIpInfo();
      if (!value.value && definedCity.value) {
        emit("input", definedCity.value);
      }
      loading.hide();
    });

    return {
      options,
      container,
    };
  },
  components: { AppSelect },
})
export default class CitySelect extends Vue {
  @Prop(String) value: string;
}
</script>

<style lang="scss">
.city-select {
  position: relative;
  .vld-overlay {
    height: 40px;
  }
}
</style>