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
          <applications-controller-wish-form
            v-model="wishes"
            ref="controllerWishForm"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <applications-controller-state
          title="Допуск водителей из общего черного списка"
          v-model="allowBlackList"
        />
        <div class="app-card applications-controller__wish">
          <div class="font-md color-grey-2 mb-50">Контакты в приложении</div>
          <applications-controller-contacts
            v-model="contacts"
            ref="controllerContacts"
          />
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
import { Component, Prop, Vue } from "vue-property-decorator";
import { ref, toRefs } from "@vue/composition-api";
import { Application } from "@/models/application.entity";
import { useApiApplicationEditInfo } from "@/api/applications";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { UpdateApplicationInfoDto } from "@/dto/application.dto";
interface IProps {
  [key: string]: any;
  item: Application;
}
@Component({
  components: {
    AppSwitcher,
    ApplicationsControllerState,
    ApplicationsControllerWishForm,
    ApplicationsControllerContacts,
  },
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const contacts = ref(item.value.contacts);
    const controllerContacts = ref(null);
    const controllerWishForm = ref(null);
    const wishes = ref(item.value.wishes);
    const stopRegisterDrivers = ref(item.value.stop_reg);
    const allowBlackList = ref(item.value.allow_blacklist);

    const submit = async () => {
      const validContacts = await controllerContacts.value.submit();
      if (!validContacts) return false;
      const validWishForm = await controllerWishForm.value.submit();
      if (!validWishForm) return false;
      const { exec, error } = useApiApplicationEditInfo({
        toast: { error: errorHandler(), success: () => "Данные сохранены!" },
      });
      const toSend: UpdateApplicationInfoDto = {
        contacts: contacts.value,
        allow_blacklist: allowBlackList.value,
        stop_reg: stopRegisterDrivers.value,
        wishes: wishes.value,
      };
      await exec({
        id: item.value.id,
        data: plainToClass(UpdateApplicationInfoDto, toSend),
      });
      if (error.value) return false;

      return true;
    };
    return {
      controllerWishForm,
      wishes,
      controllerContacts,
      contacts,
      submit,
      stopRegisterDrivers,
      allowBlackList,
    };
  },
})
export default class ApplicationsController extends Vue {
  @Prop() item: Application;
}
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