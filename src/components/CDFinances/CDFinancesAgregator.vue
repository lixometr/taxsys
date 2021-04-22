<template>
  <div class="cd-finances-agregator">
    <div class="cd-finances-agregator__burger">
      <svgDotsBurger width="30" />
    </div>
    <div class="cd-finances-agregator__icon">
      <img src="@/assets/img/cd_gett.png" alt="" />
    </div>
    <div class="cd-finances-agregator__footer">
      <div class="cd-finances-agregator__footer-item">
        <div>доступно</div>
        <div class="color-green">
          122 540
          <span class="font-xs">rub</span>
        </div>
      </div>
      <div class="cd-finances-agregator__footer-item">
        <div>всего</div>
        <div>
          122 540
          <span class="font-xs">rub</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgDotsBurger from "@/assets/icons/dots_burger.svg";
@Component({
  components: { svgDotsBurger },
})
export default class CDFinancesAgreagor extends Vue {}
</script>

<style lang="scss">
.cd-finances-agregator {
  background: $white;
  box-shadow: 0px 4.8px 18px rgba(93, 85, 208, 0.45);
  border-radius: 6px;
  padding: 0.8rem 2.2rem 1.3rem;
  position: relative;
  width: 260px;
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-item {
      > div {
        &:first-child {
          font-size: $fz_xs;
          margin-bottom: 2px;
        }
        &:last-child {
          font-size: $fz_md;
        }
      }
    }
  }
  &__icon {
    margin-bottom: 16px;
    img {
      max-width: 100%;
      max-height: 70px;
      object-fit: contain;
    }
  }
  &__burger {
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 10px;
  }
}
</style>