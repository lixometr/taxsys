<template>
  <div class="home">1</div>
</template>

<script lang="ts">
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
  setup() {
    // const { showByName } = useModal();
    // showByName(ModalName.addStaff);
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