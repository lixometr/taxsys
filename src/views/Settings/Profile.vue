<template>
  <div class="settings-profile">
    <page-title><h2>Профиль</h2></page-title>
    <profile-name class="mb-20" />
    <profile-reqs class="mb-20" />
    <div class="row settings-profile__row">
      <div class="col-xl-6 settings-profile__col">
        <profile-widgets />
      </div>
      <div class="col-xl-6 settings-profile__col">
        <profile-notys />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProfileNotys from "../../components/Settings/Profile/ProfileNotys.vue";
import ProfileWidgets from "../../components/Settings/Profile/ProfileWidgets.vue";
import ProfileReqs from "../../components/Settings/Profile/ProfileReqs.vue";
import ProfileName from "../../components/Settings/Profile/ProfileName.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    PageTitle,
    ProfileName,
    ProfileReqs,
    ProfileWidgets,
    ProfileNotys,
  },
})
export default class SettingsProfile extends Vue {}
</script>

<style lang="scss">
.settings-profile {
  padding-bottom: 1rem;
  &__row {
    align-items: stretch;
  }
  &__col {
    @include lg {
      &:first-child {
        margin-bottom: 20px;
      }
    }
    > div {
      height: 100%;
    }
  }
}
</style>