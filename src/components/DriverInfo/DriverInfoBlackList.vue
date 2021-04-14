<template>
  <div class="driver-info-blacklist">
    <div class="app-card">
      <div class="driver-info-blacklist__row">
        <div class="color-purple font-md">Чёрный список</div>
        <app-tooltip
          position="bottom"
          class="driver-info-blacklist__causes"
          v-if="causeOpen"
        >
          <div
            class="driver-info-blacklist__cause"
            v-for="(item, idx) in causeItems"
            :key="idx"
            :class="{active: item === cause}"
            @click="selectCause(idx)"
          >
            {{ item }}
          </div>
        </app-tooltip>
        <div class="driver-info-blacklist__btns">
          <app-button
            color="purple"
            :stroke="true"
            class="driver-info-blacklist__btn"
            @click="toggleCause"
          >
            Причина добавления >
          </app-button>
          <app-button
            color="purple-grad"
            class="driver-info-blacklist__btn"
            @click="addToBlacklist"
            >добавить в чёрный список</app-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppTooltip from "../AppTooltip.vue";
import ProfileReqsCard from "../Settings/Profile/ProfileReqsCard.vue";
import PreviewImage from "../PreviewImage.vue";
import AppImage from "../AppImage.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ref, toRefs } from "@vue/composition-api";
import { errorHandler } from "@/helpers/error-handler";
import { useApiAddDriverToBlacklist } from "@/api/driver";
import useToast from "@/compositions/useToast";
import { UserModule } from "@/store/modules/user";

interface IProps {
  [key: string]: any;
  item: any;
}
@Component({
  components: { AppImage, PreviewImage, ProfileReqsCard, AppTooltip },
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    
    const cause = ref();
    const causeOpen = ref(false);
    const addToBlacklist = async () => {
      const { error: toastError } = useToast();
      if (!cause.value) return toastError({ message: "Выберите причину" });
      const { exec, error } = useApiAddDriverToBlacklist({
        toast: {
          error: errorHandler(),
          success: () => "Водитель добавлен в черный список!",
        },
      });
      await exec({ id: item.value.id, cause: cause.value });
      if (error.value) return;
    };
    const toggleCause = () => {
      causeOpen.value = !causeOpen.value;
    };
    const selectCause = (idx: number) => {
      cause.value = idx + 1;
      causeOpen.value = false;
    };
    
    const causeItems = UserModule.user.blacklist_reasons.slice(1)
    return {
      cause,
      causeOpen,
      selectCause,
      causeItems,
      addToBlacklist,
      toggleCause,
    };
  },
})
export default class DriverInfoBlackList extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: any;
}
</script>

<style lang="scss">
.driver-info-blacklist {
  &__card {
    margin-top: 25px;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  &__btn {
    &:first-child {
      margin-right: 15px;
    }
  }
  &__causes {
    position: absolute;
    right: 300px;
    bottom: 50px;
    z-index: 10;
  }
  &__cause {
    &:hover,
    &.active {
      color: $purple;
    }
    cursor: pointer;
    margin-bottom: 7px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
