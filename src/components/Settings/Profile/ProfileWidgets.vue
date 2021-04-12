<template>
  <div class="profile-widgets">
    <div class="app-card h-100">
      <div class="profile-widgets__header">
        <div class="profile-widgets__title color-purple">Виджеты</div>
        <div class="profile-widgets__btn">
          <app-button
            class="profile-widgets__btn"
            color="orange"
            @click="addWidget"
            >Добавить виджет <svgPlus class="ml-10"
          /></app-button>
        </div>
      </div>

      <div class="profile-widget__items">
        <profile-widget
          class="profile-widgets__item"
          v-for="(item, idx) in widgets"
          :item="item"
          :key="idx"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProfileWidget from "./ProfileWidget.vue";
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/plus.svg";
import useRouter from "@/compositions/useRouter";
import { useApiGetWidgets } from "@/api/widget";
import { errorHandler } from "@/helpers/error-handler";
import { computed } from "@vue/composition-api";
@Component({
  components: { ProfileWidget, svgPlus },
  setup() {
    const router = useRouter()
    const addWidget = () => {
      router.push({name: "SettingsWidgetAdd"})
      return;
    };
    const {exec: fetchWidgets, result} = useApiGetWidgets({toast: {error: errorHandler()}})
    fetchWidgets()
    const widgets = computed(() => result.value)

    return {
      widgets,
      addWidget,
    };
  },
})
export default class ProfileWidgets extends Vue {}
</script>

<style lang="scss">
.profile-widgets {
  &__item {
    margin-top: 30px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include sm {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__title {
    font-size: $fz_lg;
  }
  &__btn {
    .btn {
      padding: 1rem 2rem;
    }
    @include sm {
      margin-top: 15px;
    }
  }
}
</style>