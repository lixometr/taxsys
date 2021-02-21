<template>
  <div class="page-login">
   <div class="login-form-wrapper">
     <auth-form title="Личный кабинет">
       <login-form />
     </auth-form>
   </div>
  </div>
</template>

<script lang="ts">
import LoginForm from '../../components/Auth/Login/LoginForm.vue'
import AuthForm from "@/components/Auth/AuthForm.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  metaInfo: {
    title: 'Вход'
  },
  components: {
    AuthForm, LoginForm
  },
  setup() {
      return {}
  },
})
export default class Login extends Vue {
  
}
</script>

<style lang="scss">
.page-login {
  background: $blue_grad;
  min-height: 100vh;
  padding-top: 10rem;
  padding-bottom: 10rem;
}
</style>