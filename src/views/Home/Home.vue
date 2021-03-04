<template>
  <div class="home">1</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
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