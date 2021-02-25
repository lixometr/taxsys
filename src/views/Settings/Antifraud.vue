<template>
  <div class="settings-antifraud flex-layout flex-1">
    <page-title>
      <div class="settings-antifraud__title-wrapper">
        <h2 class="mr-10">Антифрод</h2>
        <div>
          <app-button
            class="settings-antifraud__btn-add-param"
            color="orange"
            @click="addParameter"
          >
            Добавить параметр
            <svgPlus class="ml-10" />
          </app-button>
        </div>
      </div>
    </page-title>
    <div class="settings-antifraud__content flex-layout flex-1">
      <settings-antifraud-item v-for="num in 3" :key="num" class="mb-20" />
      <app-pagination class="mt-auto" />
    </div>
  </div>
</template>

<script lang="ts">
import SettingsAntifraudItem from "../../components/Settings/Antifraud/SettingsAntifraudItem.vue";
import PageTitle from "../../components/Page/PageTitle.vue";
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
@Component({
  components: { PageTitle, svgPlus, SettingsAntifraudItem },
  setup() {
    const { showByName } = useModal();
    const addParameter = () => {
      showByName(ModalName.antifraudAddParam);
    };
    return {
      addParameter,
    };
  },
})
export default class SettingsAntifraud extends Vue {}
</script>

<style lang="scss">
.settings-antifraud {
  &__title-wrapper {
    display: flex;
    align-self: center;
    justify-content: space-between;
    @include xs {
      flex-direction: column;
    }
  }
  &__btn-add-param {
    @include xs {
      margin-top: 1rem;
    }
  }
}
</style>