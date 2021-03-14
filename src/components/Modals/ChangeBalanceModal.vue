<template>
  <modal-content class="change-balance-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Изменение баланса</h2>
    </template>
    <template>
      <div>
        <app-chooser :items="actions" v-model="activeAction" />
        <div class="change-balance-form">
          <change-balance-write-off-form v-if="activeAction === 'writeoff'" />
          <change-balance-put-form v-if="activeAction === 'put'" />
        </div>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import ChangeBalancePutForm from "../ChangeBalance/ChangeBalancePutForm.vue";
import ChangeBalanceWriteOffForm from "../ChangeBalance/ChangeBalanceWriteOffForm.vue";
import AppChooser from "../AppChooser.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ref, toRefs } from "@vue/composition-api";
import { string } from "yup";
interface IProps {
  action: string;
  [key: string]: any;
}
@Component({
  components: {
    ModalContent,
    AppChooser,
    ChangeBalanceWriteOffForm,
    ChangeBalancePutForm,
  },
  setup(props: IProps) {
    const { action } = toRefs<IProps>(props);
    const activeAction = ref(action.value);
    const actions = [
      {
        name: "Списать",
        value: "writeoff",
      },
      {
        name: "Пополнить",
        value: "put",
      },
    ];
    return {
      activeAction,
      actions,
    };
  },
})
export default class ChangeBalanceModal extends Vue {
  @Prop({
    type: String,
    default: "writeoff",
  })
  action: string;
}
</script>

<style lang="scss">
.change-balance-modal {
  width: 100%;
  max-width: 580px;
  margin: 0 30px;
  @include xs {
    margin: 0 5px;
  }
  .modal-header {
    margin-bottom: 3rem;
  }
  .change-balance-form {
    margin-top: 40px;
  }
}
</style>