<template>
  <div class="page-travels">
    <page-title>
      <h2>Поездки</h2>
    </page-title>
    <app-accardion class="color-grey-2">
      <template v-slot:h-col-1> <div class="font-md">123456789</div></template>
      <template v-slot:h-col-2>
        <div class="font-md">12:15 | 22.10.2019</div></template
      >
      <template v-slot:h-col-3>
        <div class="font-md">Иванов Тимофей Петрович</div></template
      >
      <template v-slot:h-col-4> <div class="font-md">1277.50 ₽</div></template>
      <template v-slot:col-1>
        <div class="mb-10">Номер заказа:</div>
        <div class="mb-10">Адрес подачи:</div>
        <div class="mb-10">Адрес назначения:</div>
      </template>
      <template v-slot:col-2>
        <div class="mb-10">11382657311</div>
        <div class="mb-10">ул. Ленина, д. 15, корп. 2</div>
        <div class="mb-10">ул. Маркса, д. 24/8</div>
      </template>
      <template v-slot:col-3> col2 32 </template>
      <template v-slot:col-4> col2 32 </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { PageTitle },
})
export default class Travels extends Vue {}
</script>

<style lang="scss">
</style>