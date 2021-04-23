<template>
  <div class="profile-notys-form">
    <form action="#" @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-6">
          <app-button
            color="purple-grad"
            class="mt-10"
            @click="connectTelegram"
            v-if="showConnectTelegram"
            >Подключить телеграм</app-button
          >
        </div>
        <div :class="{'col-md-6': showConnectTelegram, 'col-md-12': !showConnectTelegram}">
          <app-input
            label="E-mail"
            v-model="values.email"
            :errors="errors.email"
          />
        </div>
      </div>
      <div class="text-center mt-5">
        <app-button color="orange-grad" type="submit">сохранить</app-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { UserModule } from "@/store/modules/user";
import { UserType } from "@/types/types";
import { computed } from "@vue/composition-api";
import { Component, Vue } from "vue-property-decorator";

@Component({
  setup() {
    const { values, errors, handleSubmit, serialize } = useForm({
      fields: {
        email: useField("", []),
      },
    });
    const onSubmit = handleSubmit(() => {
      console.log(serialize());
    });
    const connectTelegram = () => {
      window.open(UserModule.user?.tg_link, "_blank");
      return;
    };
    const showConnectTelegram = computed(() => {
      return !UserModule.user?.tg_id || UserModule.user.tg_blocked;
    });
    return { values, errors, onSubmit, connectTelegram, showConnectTelegram };
  },
})
export default class ProfileNotysForm extends Vue {}
</script>

<style lang="scss">
.profile-notys-form {
  padding-top: 3rem;
}
</style>