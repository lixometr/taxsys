<template>
  <div class="applications-controller">
    <div class="row">
      <div class="col-lg-6 applications-controller__col">
        <applications-controller-state
          title="Приостановить регистрацию водителей"
          v-model="stopRegisterDrivers"
        />
        <div class="app-card applications-controller__wish">
          <div class="font-md color-grey-2 mb-50">
            Добавить пожелание по функционалу приложения
          </div>
          <applications-controller-wish-form />
        </div>
      </div>
      <div class="col-lg-6">
        <applications-controller-state
          title="Допуск водителей из общего черного списка"
          v-model="allowBlackList"
        />
        <div class="app-card applications-controller__wish">
          <div class="font-md color-grey-2 mb-50">Контакты в приложении</div>
          <applications-controller-contacts />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ApplicationsControllerContacts from "./ApplicationsController/ApplicationsControllerContacts.vue";
import ApplicationsControllerWishForm from "./ApplicationsController/ApplicationsControllerWishForm.vue";
import ApplicationsControllerState from "./ApplicationsController/ApplicationsControllerState.vue";
import AppSwitcher from "../AppSwitcher.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";

@Component({
  components: {
    AppSwitcher,
    ApplicationsControllerState,
    ApplicationsControllerWishForm,
    ApplicationsControllerContacts,
  },
  setup() {
    const stopRegisterDrivers = ref(false);
    const allowBlackList = ref(false);
    return {
      stopRegisterDrivers,
      allowBlackList,
    };
  },
})
export default class ApplicationsController extends Vue {}
</script>

<style lang="scss">
.applications-controller {
  &__col {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    > div:last-child {
      flex: 1;
    }
  }
}
</style>