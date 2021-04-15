<template>
  <page-placeholder class="personal-placeholder" :full="true">
    <template #image>
      <img src="@/assets/img/personal_placeholder.png" alt="image" />
    </template>
    <template #text>
      В данном разделе вы можете дать доступ в систему сотрудникам вашей
      компании, настроить график работы и автоматическую выплату зарплат
      <div class="mt-10 font-500">
        <app-button color="orange-grad" @click="addStaff"
          >Добавить сотрудника</app-button
        >
      </div>
    </template>
  </page-placeholder>
</template>

<script lang="ts">
import PagePlaceholder from "./PagePlaceholder.vue";
import { Component, Vue } from "vue-property-decorator";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";

@Component({
  components: { PagePlaceholder },
  setup(props, {emit}) {
    const addStaff = () => {
      const { showByName } = useModal();
      showByName(ModalName.addStaff, {
        on: {
          send: () => emit('refresh')
        }
      });
    };
    return { addStaff };
  },
})
export default class PersonalPlaceholder extends Vue {}
</script>

<style lang="scss">
.personal-placeholder {
  .page-placeholder__card {
    background: url(~@/assets/img/suspicious_bg.png) right top no-repeat;
    background-size: 300px auto;
  }
}
</style>