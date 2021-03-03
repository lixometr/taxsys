<template>
  <div class="register-driver-agregators">
    <register-driver-agregator
      v-for="(agregator, idx) in agregators"
      :key="idx"
      :item="agregator"
      @input="toggleItem($event, agregator)"
      :value="value.includes(agregator.value)"
    />
  </div>
</template>

<script lang="ts">
import RegisterDriverAgregator from "./RegisterDriverAgregator.vue";
import AppCheckbox from "../../AppCheckbox.vue";
import { AgregatorType } from "@/types/agregator.enum";
import { Component, Prop, Vue } from "vue-property-decorator";
import { toRefs } from "@vue/composition-api";
interface Props {
  value: string[];
  [key: string]: unknown;
}
@Component({
  components: { AppCheckbox, RegisterDriverAgregator },
  setup(props: Props, { emit }) {
    const { value } = toRefs<Props>(props);
    const agregators = Object.keys(AgregatorType).map((key) => ({
      ...AgregatorType[key],
      value: key,
    }));
    const toggleItem = (isActive: boolean, agregator: any) => {
      const currentValue = agregator.value;
      let newValue = [...value.value];
      if (isActive) {
        if (!value.value.includes(currentValue)) {
          newValue.push(currentValue);
        }
      } else {
        newValue = value.value.filter((item) => item !== currentValue);
      }
      emit("input", newValue);
    };
    return { agregators, toggleItem };
  },
})
export default class RegisterDriverAgregators extends Vue {
  @Prop({ type: Array, default: () => [] }) value: Array<string>;
}
</script>

<style lang="scss">
.register-driver-agregators {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
}
</style>