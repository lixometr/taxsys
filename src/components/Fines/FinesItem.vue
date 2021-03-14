<template>
  <div class="fines-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
      contentClass="font-sm color-grey-1"
    >
      <template v-slot:header>
        <app-accardion-col class="col-xl-1 col-md-4 col-sm-6">
          <app-image
            :width="77"
            :height="51"
            border
            :src="require('@/assets/img/fine_mock.png')"
          />
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader"
          ><div class="car-number">
            <div class="car-number-num">A 450 ВП</div>
            <div class="car-number-code">777</div>
          </div></app-accardion-col
        >

        <app-accardion-col :class="responsiveHeader"
          >№: 293293293293293</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader"
          >12,5 часть 1</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader" class="color-grey-3"
          >12:15 | 22.10.2019</app-accardion-col
        >
        <app-accardion-col class="col-xl-1 col-md-4 col-sm-6"
          >1250 {{ currency }}</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader" class="fines-item__status">
          <app-status color="green" :stroke="true">оплачен</app-status>
        </app-accardion-col>
      </template>
      <template #default>
        <app-accardion-col :class="responsiveContent">
          <div>
            <div class="color-grey-2 mb-10">Долгополов Иван Дмитриевич</div>
            <div class="row mb-15">
              <div class="col color-grey-2">Нарушение:</div>
              <div class="col color-grey-1">от 10.03.2020</div>
            </div>
            <div class="mb-15">Нарушение правил стоянки или остановки</div>
            <div class="row">
              <div class="col color-grey-2">Статья КоАп:</div>
              <div class="col color-grey-1">12,5 часть 1</div>
            </div>
          </div>
          <div>
            <div class="row align-items-center mt-25">
              <div class="col-lg-3">
                <div class="font-md font-500">10 500 {{ currency }}</div>
              </div>
              <div class="col-lg-3">
                <s class="font-md font-500 text-line-through"
                  >10 500 {{ currency }}</s
                >
              </div>
              <div class="col-lg-6">
                <div class="fines-item__sale">-50% до 10.04.2020</div>
              </div>
            </div>
          </div>
          <div>
            <div class="fines-item__btns mt-30">
              <div class="">
                <app-button
                  color="orange"
                  size="sm"
                  :stroke="true"
                  @click="payCard"
                  >оплатить картой</app-button
                >
              </div>
              <div class="">
                <app-button color="orange" size="sm" @click="payBalance"
                  >оплатить с баланса</app-button
                >
              </div>
            </div>
          </div>
        </app-accardion-col>

        <app-accardion-col :class="responsiveContent">
          <div class="mb-25">
            <div class="color-grey-2 mb-10">Описание</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              tincidunt ultrices nunc amet elit eget. Orci suspendisse commodo
              molestie lacus nec leo scelerisque varius consectetur.
              <a href="#">Подробнее</a>
            </div>
          </div>
          <div>
            <div class="color-grey-2 mb-10">Подразделение</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              tincidunt ultrices nunc amet elit eget.
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="color-grey-2">Место и фото нарушения:</div>
          <div class="d-flex flex-wrap">
            <app-image
              :width="152"
              :height="88"
              :src="require('@/assets/img/map.png')"
              :shadow="true"
              class="mr-20 mb-20"
            />
            <app-image
              :width="152"
              :height="88"
              :src="require('@/assets/img/fine_mock.png')"
              :shadow="true"
              class="mr-20 mb-20"
            />
          </div>
          <div>
            <div class="color-grey-2 mb-10">Адрес:</div>
            <div>г. Ростов-на-Дону, ул. Тимирязаваская, д. 58/4</div>
          </div>
        </app-accardion-col>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import AppStatus from "../AppStatus.vue";
import AppImage from "@/components/AppImage.vue";
@Component({
  components: { AppStatus, AppImage },
  setup(props, { emit }) {
    const payCard = () => {
      emit("payCard");
    };
    const payBalance = () => {
      emit("payBalance");
    };
    return { payCard, payBalance };
  },
})
export default class DriverListItem extends Vue {
  @Prop(Object) item: any;
  get responsiveHeader() {
    return "col-sm-6 col-md-4 col-xl-2";
  }
  get responsiveContent() {
    return "col-12 col-xl-4";
  }

  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.fines-item {
  &__sale {
    background: #27ae60;
    border-radius: 20px;
    padding: 0.7rem 1rem;
    color: $white;
    text-align: center;
    display: inline-block;
  }
  &__status {
    display: flex;
    justify-content: flex-end!important;
    @include lg {
      justify-content: flex-start!important;
    }
    .btn {
      color: $grey_1;
      padding: 0.8rem 2rem;
    }
  }
  &__btns {
    display: flex;
    @include md {
      flex-direction: column;
    }
    .btn {
      padding: 1rem 2rem;
    }
    > div {
      &:first-child {
        margin-right: 25px;
        @include md {
          margin-right: 0;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>