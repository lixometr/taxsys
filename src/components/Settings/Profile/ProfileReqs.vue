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
            :index="idx"
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
import useUserCards from "./useUserCards";
@Component({
  setup() {
    const mixin = useUserCards();
    return { ...mixin };
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