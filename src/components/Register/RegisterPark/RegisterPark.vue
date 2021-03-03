<template>
  <div class="register-park">
    <auth-form>
      <template #title>
        <register-title-back @back="goBack" title="Подключение парка" />
      </template>
      <template>
        <register-park-form class="pt-40" />
      </template>
    </auth-form>
  </div>
</template>

<script lang="ts">
import RegisterTitleBack from "../RegisterTitleBack.vue";
import AuthForm from "../../Auth/AuthForm.vue";
import RegisterParkForm from "./RegisterParkForm.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  setup(props, { emit }) {
    const goBack = () => {
      emit("back");
    };
    return { goBack };
  },
  components: { RegisterParkForm, AuthForm, RegisterTitleBack },
})
export default class RegisterPark extends Vue {}
</script>

<style lang="scss">
</style>