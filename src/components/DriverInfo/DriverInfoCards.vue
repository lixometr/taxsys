<template>
  <div class="driver-info-cards">
    <div class="app-card">
      <div class="color-purple font-md">Реквизиты</div>
      <div class="driver-info-cards__row row">
        <div class="col-lg-4" v-for="(card, idx) in cards" :key="idx">
          <profile-reqs-card
            class="driver-info-cards__card"
            :cardNumber="card.getNormNumber()"
            :active="card.def"
            @update:active="updateDefault(card)"
            @remove="removeCard(card)"
          />
        </div>
      </div>
      <app-button
        class="driver-info-cards__btn"
        :stroke="true"
        color="purple-strong"
        @click="addCard"
        >добавить карту <svgPlus class="ml-10" />
      </app-button>
    </div>
  </div>
</template>

<script lang="ts">
import ProfileReqsCard from "../Settings/Profile/ProfileReqsCard.vue";
import PreviewImage from "../PreviewImage.vue";
import AppImage from "../AppImage.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgPicture from "@/assets/icons/driver_license.svg";
import svgPlus from "@/assets/icons/plus.svg";

import { errorHandler } from "@/helpers/error-handler";
import { UserModule } from "@/store/modules/user";
import { ModalName } from "@/types/modal.enum";
import useModal from "@/compositions/useModal";
import { computed, ref, toRefs } from "@vue/composition-api";
import {
  useApiDriverDeleteCard,
  useApiDriverSetDefaultCard,
} from "@/api/driver";
interface IProps {
  [key: string]: any;
  item: any;
}
@Component({
  components: { svgPlus, AppImage, PreviewImage, svgPicture, ProfileReqsCard },
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const cards = computed(() => item.value.cards || [])
    const addCard = () => {
      const { showByName } = useModal();
      showByName(ModalName.addCard, {
        props: {
          type: "driver",
          id: item.value.id,
        },
        on: {
          send: () => {
            emit('refresh')
            return;
          },
        },
      });
      return;
    };
    const updateDefault = async (card) => {
      const { exec, error } = useApiDriverSetDefaultCard({
        toast: {
          error: errorHandler(),
          success: () => "Карта по умолчанию успешно установлена!",
        },
      });
      await exec({ id: item.value.id, cardId: card.id });
      if (error.value) return;
      emit("refresh");
    };
    const removeCard = async (card) => {
      const { exec, error } = useApiDriverDeleteCard({
        toast: {
          error: errorHandler(),
          success: () => "Карта успешно удалена!",
        },
      });
      await exec({ id: item.value.id, cardId: card.id });
      if (error.value) return;
      emit("refresh");
    };

    return {
      removeCard,
      updateDefault,
      addCard,
      cards,
      svgPicture,
    };
  },
})
export default class DriverInfoCards extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: any;
}
</script>

<style lang="scss">
.driver-info-cards {
  &__card {
    margin-top: 25px;
  }
  &__btn {
    margin-top: 20px;
    padding: 0.7rem 2.5rem;
    font-size: $fz_xs;
  }
}
</style>
