<template>
  <div class="register-driver-agregator" @click="changeActive">
    <div class="register-driver-agregator__icon">
      <app-icon :src="item.icon" />
    </div>
    <div class="register-driver-agregator__name">
      {{ item.name }}
    </div>
    <div class="register-driver-agregator__active">
      <app-checkbox :value="value" ref="checkbox" />
    </div>
  </div>
</template>

<script lang="ts">
import AppCheckbox from "../../AppCheckbox.vue";
import { ref, toRefs } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { AppCheckbox },
  setup(props, { emit }) {
    const { value } = toRefs(props);
    const checkbox = ref(null);

    const changeActive = () => {
      emit("input", !value.value);
    };
    return { changeActive, checkbox };
  },
})
export default class RegisterDriverAgregator extends Vue {
  @Prop(Boolean) value: boolean;
  @Prop(Object) item: any;
}
</script>

<style lang="scss">
.register-driver-agregator {
  display: flex;
  align-items: center;
  padding: 0.8rem;
  background: $white;
  border: 1px solid rgba(184, 181, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  cursor: pointer;
  margin-right: 15px;
  width: 177px;
  margin: 10px;
  &:last-child {
    margin-right: 0;
  }
  &__icon {
    margin-right: 10px;
  }
  &__name {
    margin-right: 10px;
    color: #3a3535;
  }
  &__active {
    margin-left: auto;
  }
}
</style>