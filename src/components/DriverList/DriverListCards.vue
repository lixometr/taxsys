<template>
  <div class="driver-list-cards">
    <div class="row mb-15">
      <div class="col color-grey-3 font-600">Реквизиты</div>
      <div class="col" v-if="canEdit">
        <a href="#" @click.prevent="addCard">Добавить карту</a>
      </div>
    </div>
    <div
      class="driver-list-cards__item mb-15"
      v-for="(card, idx) in value"
      :key="idx"
    >
      <div class="row">
        <div class="col driver-list-cards__name">
          <span>Карта {{ idx }}:</span>
          <span class="font-0">
            <svgTrash @click="removeCard(idx)" width="13"
          /></span>
        </div>
        <div class="col driver-list-cards__number">
          <span>
            {{ card.number }}
          </span>
          <span class="shrink-0" v-if="canEdit">
            <app-checkbox variant="star" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppCheckbox from "../AppCheckbox.vue";
import { toRefs } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgTrash from "@/assets/icons/trash.svg";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";
interface Card {
  number: string;
}
interface IProps {
  [key: string]: any;
  value: Array<Card>;
}
@Component({
  setup(props: IProps, { emit }) {
    const { value } = toRefs<IProps>(props);
    const addCard = () => {
      const {showByName} = useModal()
      showByName(ModalName.addCard)
      return;
    };
    const removeCard = (idx: number) => {
      return;
    };
    return {
      addCard,
      removeCard,
    };
  },
  components: {
    svgTrash,
    AppCheckbox,
  },
})
export default class DriverListCards extends Vue {
  @Prop({
    type: Array,
  })
  value: Array<Card>;

  @Prop({
    type: Boolean,
    default: true
  }) canEdit: boolean
}
</script>

<style lang="scss">
.driver-list-cards {
  &__name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-right: 30px;
    @include lg {
      justify-content: flex-start;
    }
    @include sm {
      padding-right: 0;
    }
    span {
      &:first-child {
        @include lg {
          margin-right: 30px;
        }
        @include sm {
          margin-right: 5px;
        }
      }
    }
  }
  &__number {
    display: flex;
    align-items: center;
    span {
      &:first-child {
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 15px;
     }
    }
  }
}
</style>