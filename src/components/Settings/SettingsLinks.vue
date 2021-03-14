<template>
  <div class="settings-links">
    <router-link
      class="settings-links__item"
      exact-active-class="active"
      :to="{ name: item.routeName }"
      v-for="(item, idx) in links"
      :key="idx"
      >{{ item.name }}</router-link
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  setup() {
    interface SettingsLink {
      routeName: string;
      name: string;
    }
    const links: SettingsLink[] = [
      {
        name: "Профиль",
        routeName: "SettingsProfile",
      },
      {
        name: "Диспетчерские",
        routeName: "SettingsDispetchers",
      },
      {
        name: "Группы выплат",
        routeName: "SettingsPaymentGroups",
      },
      {
        name: "Антифрод",
        routeName: "SettingsAntifraud",
      },
      {
        name: "Платежные системы",
        routeName: "SettingsPaymentSystems",
      },
      {
        name: "Персонал",
        routeName: "SettingsStaff",
      },
    ];
    return {
      links,
    };
  },
})
export default class SettingsLinks extends Vue {}
</script>

<style lang="scss">
.settings-links {
  border-bottom: 1px solid $grey;
  display: flex;
  justify-content: center;
  @include md {
      flex-direction: column;

  }
  &__item {
    display: flex;
    padding: 2.8rem 1rem;
    border-bottom: 1px solid transparent;
    margin: 0 2rem;
    color: $grey_1;
    &.active {
      border-bottom: 1px solid $purple;
    }
    @include md {
        padding: 2rem 1rem;
    }
    @include sm {
        padding: 1rem 0;
        margin: 1rem 0;
    }
  }
}
</style>