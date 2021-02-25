<template>
  <div class="manual-payments-filters">
      <app-chooser :items="items" :value="value" @input="onChange"/>
  </div>
</template>

<script lang="ts">
import { toRefs } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  setup(props, { emit }) {
    const items = [
      {
        value: "orders",
        name: "Заявки",
      },
      {
        value: "payments",
        name: "Оплаты",
      },
    ];
    const { value } = toRefs(props);
    const onChange = (newValue: string) => {
        emit('input', newValue)
    }
    return {
        items,
        onChange
    };
  },
  components: {},
})
export default class ManualPaymentsFilters extends Vue {
  @Prop() value: string;
}
</script>

<style lang="scss">
</style>