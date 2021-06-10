<template>
  <div class="cd-finances-agregator cursor-pointer">
    <div class="cd-finances-agregator__burger">
      <svgDotsBurger width="30" />
    </div>
    <div class="cd-finances-agregator__icon">
      <app-icon width="40" :src="agregatorIcon" alt="" />
    </div>
    <div class="cd-finances-agregator__footer">
      <div class="cd-finances-agregator__footer-item">
        <div>доступно</div>
        <div class="color-green">
          {{ balance }}
          <span class="font-xs">{{ currency }}</span>
        </div>
      </div>
      <div class="cd-finances-agregator__footer-item">
        <div>всего</div>
        <div>
          {{ total }}
          <span class="font-xs">{{ currency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppIcon from '../AppIcon.vue'
import { Component, Prop, Vue } from "vue-property-decorator";
import svgDotsBurger from "@/assets/icons/dots_burger.svg";
import { computed, toRefs } from "@vue/composition-api";
import { AgregatorType } from "@/types/agregator.enum";
interface IProps {
  [key: string]: any;
  agregator: string;
}
@Component({
  setup(props: IProps) {
    const { agregator } = toRefs(props);
    const agregatorIcon = computed(() => {
      return AgregatorType[agregator.value]?.icon
    });
    return { agregatorIcon };
  },
  components: { svgDotsBurger, AppIcon },
})
export default class CDFinancesAgreagor extends Vue {
  @Prop(String) agregator: string;
  @Prop(Number) balance: number;
  @Prop(Number) total: number;

  get currency() {
    return this.$store.getters.currency;
  }
}
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
    margin-bottom: 25px;

    img {
      max-width: 100%;
      max-height: 70px;
      object-fit: contain;
      border-radius: 5px;
      width: 40px!important;
      @include md {
        display: block;
        margin: 0 auto;
        width: 50px!important;
      }
    }
  }
  &__burger {
    position: absolute;
    top: 18px;
    right: 10px;
  }
}
</style>