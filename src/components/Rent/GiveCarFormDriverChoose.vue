<template>
  <div class="give-car-form-driver-choose">
    <rent-car-form-driver-choose-item
      v-for="(item, idx) in items"
      :key="idx"
      :item="item"
      :active="value === item.id"
      @select="chooseItem(item.id)"
    />
  </div>
</template>

<script lang="ts">
import RentCarFormDriverChooseItem from './RentCarFormDriverChooseItem.vue'
import AppIcon from "../AppIcon.vue";
import AppCheckbox from "../AppCheckbox.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AgregatorType } from "@/types/agregator.enum";
import { DriverEntity } from "@/models/driver.entity";

@Component({
  components: { AppCheckbox, AppIcon, RentCarFormDriverChooseItem },
  setup(props, { emit }) {
    const chooseItem = (id: number) => {
      emit("input", id);
    };

    return { chooseItem };
  },
})
export default class GiveCarFormDriverChoose extends Vue {
  @Prop(Number) value: number;
  @Prop({ type: Array, default: () => [] }) items: DriverEntity[];
}
</script>

<style lang="scss">
.give-car-form-driver-choose {
  padding-bottom: 2rem;
  padding-top: 3rem;
}
</style>