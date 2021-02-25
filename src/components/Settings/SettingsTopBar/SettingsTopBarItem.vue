<template>
  <div class="settings-topbar-item ">
    <div class="settings-topbar-item__header">
      <div class="settings-topbar-item__title"><slot name="title" /></div>
      <div class="settings-topbar-item__icon">
        <slot name="icon" />
      </div>
    </div>
    <div class="settings-topbar-item__content">
      <div class="settings-topbar-item__name"><slot name="name" /></div>
    </div>
    <div class="settings-topbar-item__footer">
      <div class="settings-topbar-item__subname"><slot name="subname" /></div>
      <div class="settings-topbar-item__action">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class SettingsTopBarRentItem extends Vue {}
</script>

<style lang="scss">
.settings-topbar-item {
  color: $white;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1.8rem 2.5rem;
  &__title {
    font-size: $fz_sm;
    font-weight: 600;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    font-size: $fz_xxs;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  }
  &__icon {
    width: 40px;
    height: 40px;
    box-shadow: 0px 4.8px 14.4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    svg {
    }
  }
  &__name {
    font-size: 30px;
    color: #cecbf8;
    font-weight: $bold;
    margin-bottom: 1rem;
  }
  &__subname {
    color: #cecbf8;
    font-size: $fz_sm;
  }
}
</style>