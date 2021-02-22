<template>
  <div class="page-driver-check">
    <page-title><h2>Проверка водителя</h2></page-title>
    <div class="driver-check-form__wrapper">
      <driver-check-form />
    </div>
  </div>
</template>

<script lang="ts">
import PageTitle from "@/components/Page/PageTitle.vue";
import DriverCheckForm from "@/components/DriverCheck/DriverCheckForm.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
    metaInfo: {
        title: "Проверка водителя"
    },
  components: { DriverCheckForm, PageTitle },
})
export default class DriverCheck extends Vue {}
</script>

<style lang="scss">
.page-driver-check {
  .driver-check-form__wrapper {
    padding: 10rem 4rem;

    background: $white;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    @include sm {
        padding: 4rem 2rem;
    }
  }
}
</style>