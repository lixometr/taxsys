<template>
  <div class="page-modern-login modern-login">
    <div class="modern-login__header">
      <div class="modern-login__logo">
        <svgLogo width="280" />
      </div>
    </div>
    <div class="modern-login__form-wrapper">
      <div class="modern-login__form-card">
        <h2 class="form-title"><slot name="title" /></h2>
        <slot name="form"/>
        
      </div>
      <div class="modern-login__btns">
       <slot name="btns" />
      </div>
      <div>
        <a href="#" class="modern-login__support" @click.prevent="onSupport">
          <svgChat /> Чат с поддержкой
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ModernLoginForm from "../../components/ModernLogin/ModernLoginForm.vue";
import { Component, Vue } from "vue-property-decorator";
import svgLogo from "@/assets/icons/modern_logo.svg";
import svgPower from "@/assets/icons/power.svg";
import svgChat from "@/assets/icons/chat_round.svg";
@Component({
  components: {
    svgLogo,
    ModernLoginForm,
    svgPower,
    svgChat,
  },
  setup() {
      const onSupport = () => {
          return
      }
      return {
          onSupport
      }
  }
})
export default class ModernLoginLayout extends Vue {}
</script>

<style lang="scss">
.modern-login {
  background: url(~@/assets/img/modern_login_header.png) center top no-repeat;
  background-size: 100% 440px;
  padding-bottom: 5rem;

  &__header {
    padding: 8rem 0;
    text-align: center;
  }
  .form-title {
    text-align: center;
    margin-bottom: 50px;
  }
  &__form-wrapper {
    max-width: 700px;
    margin: 0 auto;
  }
  &__form {
    &-card {
      background: #ffffff;
      box-shadow: 0px 4px 15px rgba(93, 85, 208, 0.45);
      border-radius: 15px;
      padding: 5rem;
      @include md {
        padding: 3rem;
      }
      @include xs {
        padding: 4rem 2rem;
      }
    }
  }
  &__btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
    @include md {
      flex-direction: column;
      align-items: center;
    }
  }
  &__btn {
    padding: 1.3rem 5rem;
    border: 1px solid rgba(184, 181, 255, 0.15);
    box-sizing: border-box;
    box-shadow: 0px 7px 20px rgba(93, 85, 208, 0.15);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: $transition;
    margin-bottom: 20px;
    margin-left: 20px;
    &:first-child {
      margin-left: 0;
    }
    @include md {
      padding: 1.3rem 3rem;
      margin-left: 0;
    }
    &:hover {
      box-shadow: none;
    }
    svg {
      margin-right: 15px;
    }
  }
  &__support {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b8b5ff;
    svg {
      margin-right: 10px;
    }
  }
}
</style>