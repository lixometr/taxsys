<template>
  <div class="cd-page-profile">
    <page-title>
      <h2 >Профиль</h2>
    </page-title>
    <cd-profile-common />
    <cd-profile-car />
    <cd-profile-tarifs />
  </div>
</template>

<script lang="ts">
import CdProfileTarifs from '../../../components/CDProfile/CdProfileTarifs.vue'
import CdProfileCar from '../../../components/CDProfile/CdProfileCar.vue'
import PageTitle from "../../../components/Page/PageTitle.vue";
import CdProfileCommon from "../../../components/CDProfile/CdProfileCommon.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { CdProfileCommon, PageTitle, CdProfileCar, CdProfileTarifs },
})
export default class CDProfile extends Vue {}
</script>

<style lang="scss">
.cd-page-profile {
  padding-top: 2rem;
}
</style>