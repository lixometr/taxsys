<template>
  <div class="profile-noty">
    <div class="profile-noty__name">{{ title }}</div>
    <div class="profile-noty__actions">
      <div class="profile-noty__action">
        <app-checkbox :value="sms" @input="toggleSms" />
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
    const toggleSms = (value: boolean) => {
      emit("update:sms", value);
    };
    return {
      toggleSms,
      toggleEmail,
    };
  },
  components: { AppCheckbox },
})
export default class ProfileNoty extends Vue {
  @Prop(String) title: string;
  @Prop(Boolean) email: boolean;
  @Prop(Boolean) sms: boolean;
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