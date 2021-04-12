<template>
  <div class="profile-reqs">
    <div class="app-card">
      <div class="color-purple font-md">Реквизиты</div>
      <div class="profile-reqs__row row">
        <div class="col-lg-4" v-for="(card, idx) in cards" :key="idx">
          <profile-reqs-card
            class="profile-reqs__card"
            :cardNumber="card.getNormNumber()"
            :active="card.def"
            @update:active="updateDefault(card)"
            @remove="removeCard(card)"
          />
        </div>
      </div>
      <app-button
        class="profile-reqs__btn"
        :stroke="true"
        color="purple-strong"
        @click="addCard"
        >добавить карту <svgPlus class="ml-10" />
      </app-button>
    </div>
  </div>
</template>

<script lang="ts">
import ProfileReqsCard from "./ProfileReqsCard.vue";
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/strong_plus.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
import { UserModule } from "@/store/modules/user";
import {
  useApiPartnerDeleteCard,
  useApiPartnerSetDefault,
  useApiGetPartnerCards,
} from "@/api/partner-card";
import { errorHandler } from "@/helpers/error-handler";
import { ref } from "@vue/composition-api";
@Component({
  setup() {
    const cards = ref([]);
    const getCards = async () => {
      const { exec, error, result } = useApiGetPartnerCards({
        toast: {
          error: errorHandler(),
        },
      });
      await exec();
      if (error.value) return;
      cards.value = result.value;
    };
    getCards() 
    const addCard = () => {
      const { showByName } = useModal();
      showByName(ModalName.addCard, {
        props: {
          type: "partner",
          id: UserModule.user.id,
        },
        on: {
          send: () => {
            return;
          },
        },
      });
      return;
    };
    const updateDefault = async (item) => {
      const { exec, error } = useApiPartnerSetDefault({
        toast: {
          error: errorHandler(),
          success: () => "Карта по умолчанию успешно установлена!",
        },
      });
      await exec({ id: item.id });
      if (error.value) return;
      await getCards()
      return;
    };
    const removeCard = async (item) => {
      const { exec, error } = useApiPartnerDeleteCard({
        toast: {
          error: errorHandler(),
          success: () => "Карта успешно удалена!",
        },
      });
      await exec({ id: item.id });
      await getCards()
      if (error.value) return;
    };

    return {
      removeCard,
      updateDefault,
      addCard,
      cards,
    };
  },
  components: { ProfileReqsCard, svgPlus },
})
export default class ProfileReqs extends Vue {}
</script>

<style lang="scss">
.profile-reqs {
  &__row {
  }
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