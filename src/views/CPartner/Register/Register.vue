<template>
  <div class="page-register auth-page">
    <register-strategy />
  </div>
</template>

<script lang="ts">
import RegisterStrategy from "@/components/Register/RegisterStrategy.vue";
import AuthForm from "@/components/Auth/AuthForm.vue";
import { Component, Vue } from "vue-property-decorator";
import { onMounted } from "@vue/composition-api";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";

@Component({
  components: { AuthForm, RegisterStrategy },
  setup() {
    // const { showByName } = useModal();

    // onMounted(() => {
    //   showByName(ModalName.approvePhone, {});
    // });
  },
})
export default class Register extends Vue {}
</script>

<style lang="scss">
</style>