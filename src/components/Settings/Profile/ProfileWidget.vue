<template>
  <div class="profile-widget">
    <div class="profile-widget__title">{{ item.title }}</div>
    <div class="profile-widget__icon">
      <img :src="agregIcon" width="40"/>
    </div>
    <div class="profile-widget__btn">
      <app-button color="orange-grad" @click="edit">редактировать</app-button>
    </div>
    <div class="profile-widget__arrow">
      <svgArrowRight width="8" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgArrowRight from "@/assets/icons/arrow-stroke-right.svg";
import useRouter from "@/compositions/useRouter";
import { Widget } from "@/models/widget.entity";
import { toRefs } from "@vue/composition-api";
import { AgregatorType } from "@/types/agregator.enum";
interface IProps {
  [key: string]: any;
  item: Widget;
}
@Component({
  setup(props: IProps, { emit }) {
    const { item } = toRefs<IProps>(props);
    const router = useRouter();
    const edit = () => {
      router.push({
        name: "SettingsWidgetEdit",
        params: { id: item.value.id.toString() },
      });
      return;
    };
    return { edit };
  },
  components: {
    svgArrowRight,
  },
})
export default class ProfileWidget extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: Widget;
  get agregIcon() {
    return AgregatorType[this.item.agreg].icon;
  }
}
</script>

<style lang="scss">
.profile-widget {
  padding: 2.3rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: $violet;
  position: relative;
  @include sm {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5em;
  }
  &__title {
    margin-right: auto;
    color: #f2f2f2;
    font-weight: 500;
    font-size: $fz_md;
    @include sm {
      margin-bottom: 10px;
    }
  }
  &__icon {
    margin-right: 30px;
    @include sm {
      margin-right: 0;
      margin-bottom: 10px;
    }
    img {
      border-radius: 5px;
    }
    svg {
      transform: rotate(180deg);
    }
  }
  &__arrow {
    flex-shrink: 0;
    @include sm {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &__btn {
    margin-right: 35px;
    @include sm {
      margin-right: 0;
      margin-bottom: 10px;
    }
    .btn {
      padding: 1rem 2rem;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
      font-size: $fz_xs;
    }
  }
}
</style>