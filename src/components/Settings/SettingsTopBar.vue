<template>
  <div class="settings-topbar">
    <div
      class="settings-topbar__row row  algin-items-stretch"
    >
      <div class="col">
        <settings-top-bar-rent />
      </div>
      <div class="col">
        <settings-top-bar-buy />
      </div>
      <div class="col">
        <settings-top-bar-driver-check />
      </div>
      <div class="col">
        <settings-top-bar-document />
      </div>
      <div class="col">
        <settings-top-bar-application />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SettingsTopBarApplication from "./SettingsTopBar/SettingsTopBarApplication.vue";
import SettingsTopBarDocument from "./SettingsTopBar/SettingsTopBarDocument.vue";
import SettingsTopBarDriverCheck from "./SettingsTopBar/SettingsTopBarDriverCheck.vue";
import SettingsTopBarBuy from "./SettingsTopBar/SettingsTopBarBuy.vue";
import SettingsTopBarRent from "./SettingsTopBar/SettingsTopBarRent.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    SettingsTopBarRent,
    SettingsTopBarBuy,
    SettingsTopBarDriverCheck,
    SettingsTopBarDocument,
    SettingsTopBarApplication,
  },
})
export default class SettingsTopBar extends Vue {}
</script>

<style lang="scss">
.settings-topbar {
  &__row {
    justify-content: center;
    @include media(1400px) {
      justify-content: center;
    }
    @include md {
      flex-wrap: nowrap;
      overflow: auto;
      justify-content: flex-start;
      margin-bottom: 1rem;
    }
    > .col {
      @include media(1400px) {
        max-width: 290px;
        flex: 1 0 290px;
        margin: 1rem;
      }
      @include md {
        max-width: none;
        margin: 0;
      }
    }
  }
  &-switcher.app-switcher {
    background: #884ac9;
    .app-switcher__handler {
      background: #aa7add;
    }
    &.active {
      background: #7541ac;
      .app-switcher__handler {
        background: linear-gradient(87.37deg, #f44879 0%, #ffb801 100%);
      }
    }
  }
  &-item--pink {
    background: $wiolet;
    .settings-topbar-item__icon {
      background: #aa7add;
    }
  }
  &-item--purple {
    background: linear-gradient(254.44deg, #5a13a7 0%, #5d55d0 83.49%);
    .settings-topbar-item__icon {
      background: #5c3abe;
    }
  }
}
</style>