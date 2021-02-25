<template>
  <div class="home">
    1
    <app-select
      :options="['QIWI', 'MANDARIN']"
      placeholder="Платёжная система"
      v-model="test"
      :searchable="true"
      :closeOnSelect="true"
    />

    {{ test }}
  </div>
</template>

<script lang="ts">
import AppSelect from "../../components/AppSelect.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: { AppSelect },
  setup() {
    return;
  },
})
export default class Home extends Vue {
  test = "";
  mounted() {
    console.log(10);
  }
}
</script>

<style >
</style>