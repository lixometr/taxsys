<template>
  <div class="profile-notys">
    <div class="app-card h-100">
      <div class="profile-notys__title color-purple font-lg">Уведомления</div>
      <div class="profile-notys__items profile-notys-items">
        <div class="profile-notys-items__header">
          <div class="profile-notys-items__header-item">СМС</div>
          <div class="profile-notys-items__header-item">E-mail</div>
        </div>
        <profile-noty
          v-for="(item, idx) in 5"
          :key="idx"
          title="Заявка водителя"
        />
      </div>
      <profile-notys-form />
    </div>
  </div>
</template>

<script lang="ts">
import ProfileNotysForm from './ProfileNotysForm.vue'
import ProfileNoty from "./ProfileNoty.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  setup() {
    return {};
  },
  components: { ProfileNoty, ProfileNotysForm },
})
export default class ProfileNotys extends Vue {}
</script>

<style lang="scss">
.profile-notys {
  &__title {
    margin-bottom: 25px;
  }
  &-items {
    &__header {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 1.5rem;
      &-item {
        color: $grey_2;
        &:first-child {
          margin-right: 28px;
        }
      }
    }
  }
}
</style>