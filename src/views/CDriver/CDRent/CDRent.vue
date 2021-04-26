<template>
  <div class="page-cd-rent flex-1 flex-layout">
    <cd-rent-filters v-model="sort" />
    <page-title><h2 class="page-title mt-0">Выбор автомобиля</h2></page-title>
    <div class="row">
      <div class="col-xl-4 col-md-6" v-for="(item, idx) in 5" :key="idx">
        <cd-rent-item class="mb-15" />
      </div>
    </div>
    <app-pagination class="mt-auto"></app-pagination>
  </div>
</template>

<script lang="ts">
import CdRentFilters from "../../../components/CDRent/CdRentFilters.vue";
import CdRentItem from "../../../components/CDRent/CdRentItem.vue";
import PageTitle from "../../../components/Page/PageTitle.vue";
import PageFilters from "../../../components/Page/PageFilters.vue";
import { Component, Vue } from "vue-property-decorator";
import useItemsPage from "@/compositions/useItemsPage";
import { ref } from "@vue/composition-api";

@Component({
  components: { PageFilters, PageTitle, CdRentItem, CdRentFilters },
  setup() {
    const sort = ref("asc");
    //   useItemsPage()
    return { sort };
  },
})
export default class CDRent extends Vue {}
</script>

<style lang="scss">
.page-cd-rent {
  padding-top: 5rem;
}
</style>