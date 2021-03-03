<template>
  <modal-content class="antifraud-addparam-modal" :scrollable="true" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Добавить параметр</h2>
    </template>
    <template>
      <antifraud-add-param-form @send="onSent" :item="item" :isNew="isNew"/>
    </template>
  </modal-content>
</template>

<script lang="ts">
import AntifraudAddParamForm from '../Settings/Antifraud/AntifraudAddParamForm.vue'
import ModalContent from "./ModalContent.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { AntifraudEntity } from '@/models/antifraud.entity';

@Component({
  setup(props, { emit }) {
    const onSent = () => {
      emit('send')
      emit("close");
    };

    return { onSent };
  },
  components: { ModalContent, AntifraudAddParamForm },
})
export default class AntiformAddParamModal extends Vue {
  @Prop(Object) item: AntifraudEntity
  @Prop(Boolean) isNew: boolean
}
</script>

<style lang="scss">
.antifraud-addparam-modal {
  width: 100%;
  max-width: 860px;
  margin: 0 30px;
  @include xs {
    margin: 0 5px;
  }
}
</style>