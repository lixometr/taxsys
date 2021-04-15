<template>
  <modal-content class="change-balance-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Изменение баланса</h2>
    </template>
    <template>
      <div>
        <app-chooser :items="actions" v-model="activeAction" />
        <div class="change-balance-form">
          <driver-balance-writeoff-form
            :driverId="driverId"
            :agregator="agregator"
            v-if="activeAction === 'writeoff'"
            @send="onSent"
          />
          <driver-balance-put-form
            :driverId="driverId"
            :agregator="agregator"
            v-if="activeAction === 'put'"
            @send="onSent"

          />
        </div>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import DriverBalancePutForm from "../DriverBalance/DriverBalancePutForm.vue";
import DriverBalanceWriteoffForm from "../DriverBalance/DriverBalanceWriteoffForm.vue";
import AppChooser from "../AppChooser.vue";
import ModalContent from "./ModalContent.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed, ref, toRefs } from "@vue/composition-api";
interface IProps {
  action: string;
  [key: string]: any;
}
@Component({
  components: {
    ModalContent,
    AppChooser,
    DriverBalanceWriteoffForm,
    DriverBalancePutForm,
  },
  setup(props: IProps, {emit}) {
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
    const onSent = (e) => {
      emit('send', e)
      emit('close')
    }
    return {
      onSent,
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
  @Prop(Number) driverId: number;
  @Prop(String) agregator: string;
}
</script>

<style lang="scss">
.change-balance-modal {
  width: 100%;
  max-width: 650px;
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