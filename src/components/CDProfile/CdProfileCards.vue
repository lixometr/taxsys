<template>
  <div class="cd-profile-cards">
    <div class="cd-profile-cards__header">
      <div class="color-grey-3 font-md">Карта для вывода средств</div>
      <app-button color="bold-purple" :stroke="true" @click="addCard" size="sm"
        >Добавить карту <svgPlus class="ml-10" width="20"
      /></app-button>
    </div>
    <div class="row">
      <div class="col-lg-4" v-for="(card, idx) in cards" :key="idx">
        <profile-reqs-card
          class="cd-profile-cards__item"
          :cardNumber="card.getNormNumber()"
          :active="card.def"
          :index="idx + 1"
          @update:active="updateDefault(card)"
          @remove="removeCard(card)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProfileReqsCard from "../Settings/Profile/ProfileReqsCard.vue";
import { Component, Vue } from "vue-property-decorator";
import svgPlus from "@/assets/icons/plus.svg";
import useUserCards from "../Settings/Profile/useUserCards";
@Component({
  components: { ProfileReqsCard, svgPlus },
  setup() {
    const mixin = useUserCards();
    return {
      ...mixin,
    };
  },
})
export default class CDProfileCards extends Vue {}
</script>

<style lang="scss">
.cd-profile-cards {
  &__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include md {
      flex-direction: column;
      align-items: flex-start;
      .btn {
        margin-top: 10px;
      }
    }
  }
  &__item {
    margin-top: 25px;
  }
}
</style>