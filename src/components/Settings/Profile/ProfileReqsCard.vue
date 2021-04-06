<template>
  <div class="profile-reqs-card">
    <div class="profile-reqs-card__title text-nowrap">Карта {{ index }}:</div>
    <div class="profile-reqs-card__remove font-0">
      <svgTrash class="cursor-pointer vertical-align-middle" width="15" @click="remove" />
    </div>
    <div class="profile-reqs-card__number">
      {{ cardNumber }}
    </div>
    <div class="profile-reqs-card__active">
      <app-checkbox @input="toggleActive" :value="active" />
    </div>
  </div>
</template>

<script lang="ts">
import AppCheckbox from "../../AppCheckbox.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgTrash from "@/assets/icons/trash.svg";
@Component({
  components: { AppCheckbox, svgTrash},
  setup(props, { emit }) {
    const toggleActive = (value: boolean) => {
      emit("update:active", value);
    };
    const remove = () => {
      emit("remove");
    };
    return { toggleActive, remove };
  },
})
export default class ProfileReqsCard extends Vue {
  @Prop(Number) index: number;
  @Prop([String, Number]) cardNumber: string;
  @Prop(Boolean) active: boolean;
}
</script>

<style lang="scss">
.profile-reqs-card {
  display: flex;
  align-items: center;
  @include sm {
    flex-wrap: wrap;
  }
  &__title {
      color: $grey_3;
      margin-right: 30px;
  }
  &__remove {
      color: $grey_3;
      margin-right: 30px;
  }
  &__number {
      color: $grey_2;
      margin-right: 20px;
  }
}
</style>