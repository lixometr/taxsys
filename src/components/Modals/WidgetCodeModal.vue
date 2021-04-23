<template>
  <modal-content class="widget-code-modal" v-on="$listeners">
    <template #header>
      <h2 class="modal-title">Код для вставки</h2>
    </template>
    <template>
      <div class="widget-code__wrapper">
        <div class="widget-code__label">
          <span>Код для вставки</span>
          <svgCopy width="23" @click="copyInsertText" />
        </div>
        <div class="widget-code">{{ code }}</div>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import ModalContent from "./ModalContent.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import useToast from "@/compositions/useToast";
import { toRefs } from "@vue/composition-api";
import svgCopy from "@/assets/icons/copy.svg";

interface IProps {
  [key: string]: any;
  code: string;
}
@Component({
  components: { ModalContent, svgCopy},
  setup(props: IProps, { emit }) {
    const { code } = toRefs<IProps>(props);
    const { success: toastSuccess, error: toastError } = useToast();

    const copyInsertText = async () => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(code.value);
          toastSuccess({ message: "Текст скопирован в буфер обмена!" });
        } else {
          throw { error: true };
        }
      } catch (err) {
        toastError({
          message:
            "К сожалению, не удалось скопировать текст. Попробуйте это сделать вручную",
        });
      }
    };
    return {
      copyInsertText
    };
  },
})
export default class ConnectDriverModal extends Vue {
  @Prop(String) code: string;
}
</script>

<style lang="scss">
.widget-code-modal {
  width: 100%;
  max-width: 500px;
  margin: 0 30px;
  @include xs {
    margin: 0 5px;
  }
  .modal-header {
    margin-bottom: 3rem;
  }

  .widget-code__label {
    color: $grey_3;
    font-size: $fz_md;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    svg {
      color: $purple;
      cursor: pointer;
      margin-left: 10px;
    }
  }
  .widget-code {
    min-height: 80px;
    border-bottom: 1px solid $purple;
    color: $grey_2;
  }
}
</style>