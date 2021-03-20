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
    // showByName(ModalName.giveCar);
    return;
  },
})
export default class Home extends Vue {
 
}
</script>

<style >
</style>