<template>
  <div class="page-register auth-page">
    <register-strategy />
  </div>
</template>

<script lang="ts">
import RegisterStrategy from '../../components/Register/RegisterStrategy.vue'
import AuthForm from "../../components/Auth/AuthForm.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { AuthForm, RegisterStrategy },
})
export default class Register extends Vue {}
</script>

<style lang="scss">
</style>