<template>
  <div class="profile-noty">
    <div class="profile-noty__name">{{ title }}</div>
    <div class="profile-noty__actions">
      <div class="profile-noty__action">
        <app-checkbox :value="telegram" @input="toggleTelegram" />
      </div>
      <div class="profile-noty__action">
        <app-checkbox :value="email" @input="toggleEmail" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppCheckbox from "../../AppCheckbox.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  setup(props, { emit }) {
    const toggleEmail = (value: boolean) => {
      emit("update:email", value);
    };
    const toggleTelegram = (value: boolean) => {
      emit("update:telegram", value);
    };
    return {
      toggleTelegram,
      toggleEmail,
    };
  },
  components: { AppCheckbox },
})
export default class ProfileNoty extends Vue {
  @Prop(String) title: string;
  @Prop(Boolean) email: boolean;
  @Prop(Boolean) telegram: boolean;
}
</script>

<style lang="scss">
.profile-noty {
  display: flex;
  padding: 2.5rem;
  border-top: 1px solid #d8d8d8;
  margin-left: -2.5rem;
  margin-right: -2.5rem;
  &:last-child {
    border-bottom: 1px solid #d8d8d8;
  }
  &__name {
    margin-right: auto;
    color: $grey_2;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
  }
  &__action {
    &:first-child {
      margin-right: 50px;
    }
    &:last-child {
      margin-right: 9px;
    }
  }
}
</style>