<template>
  <div class="give-car-form-driver-choose">
    <div
      class="give-car-form-driver-choose__item"
      v-for="(item, idx) in items"
      :key="idx"
      @click="chooseItem(item.id)"
    >
      <div>Иванов Тимофей Петрович</div>
      <div>+7 900 800 90 08</div>
      <div>Самара</div>
      <div class="d-flex">
        <div v-for="(agregator, idx) in agregators" :key="idx" class="mr-15">
          <app-icon
            class="icon-rounded-shadow"
            :src="agregator.icon"
            width="25"
          />
        </div>
      </div>
      <div>
        <app-checkbox :value="item.id === value" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppIcon from "../AppIcon.vue";
import AppCheckbox from "../AppCheckbox.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgregatorType } from "@/types/agregator.enum";

@Component({
  components: { AppCheckbox, AppIcon },
  setup(props, { emit }) {
    const chooseItem = (id: number) => {
      emit("input", id);
    };
    const agregators = Object.keys(AgregatorType).map((key) => ({
      ...AgregatorType[key],
      key,
    }));
    return { chooseItem, agregators };
  },
})
export default class GiveCarFormDriverChoose extends Vue {
  @Prop(Number) value: number;
  @Prop({ type: Array, default: () => [] }) items: any[];
}
</script>

<style lang="scss">
.give-car-form-driver-choose {
  padding-bottom: 2rem;
  padding-top: 3rem;
  &__item {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 25px;
    font-size: $fz_md;
    color: #333;
    @include md {
      flex-direction: column;
      justify-content: flex-start;
      border: 1px solid #F2F2F2;
      padding: 1rem;
      align-items: flex-start;
      > div {
        margin-bottom: 8px;
      }
    }
  }
}
</style>