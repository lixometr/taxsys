<template>
  <div class="app-card applications-controller__state">
    <div class="applications-controller__state-title mr-10">
      {{ title }}
    </div>

    <div class="applications-controller__state-switcher">
      <app-switcher :value="value" @input="onChange" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Model, Prop, Vue } from "vue-property-decorator";

@Component({
  setup(props, { emit }) {
    const onChange = (newVal: boolean) => {
      emit("input", newVal);
    };
    return {
      onChange,
    };
  },
})
export default class ApplicationsControllerState extends Vue {
  @Prop(Boolean) value: boolean;
  @Prop(String) title: string;
}
</script>

<style lang="scss">
.applications-controller__state {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &-title {
    color: $grey_2;
    font-size: $fz_md;
  }
}
</style>