<template>
  <div class="profile-reqs">
    <div class="app-card">
      <div class="color-purple font-md">Реквизиты</div>
      <div class="profile-reqs__row row">
        <div class="col-lg-4" v-for="(item, idx) in 5" :key="idx">
          <profile-reqs-card
            class="profile-reqs__card"
            cardNumber="5858 8585 8878 9854 "
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
@Component({
  setup() {
    const addCard = () => {
      const {showByName} = useModal()
      showByName(ModalName.addCard)
      return;
    };
    return {
      addCard,
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
      padding: .7rem 2.5rem;
      font-size: $fz_xs;
  }
}
</style>