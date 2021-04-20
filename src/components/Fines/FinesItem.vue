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
            :src="item.getMainImage()"
            v-if="item.getMainImage()"
          />
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader"
          ><div class="car-number">
            <div class="car-number-num">{{ car.GosNomer }}</div>
          </div></app-accardion-col
        >

        <app-accardion-col :class="responsiveHeader"
          >№: {{ item.issue_number }}</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader">{{
          item.koap_code
        }}</app-accardion-col>
        <app-accardion-col :class="responsiveHeader" class="color-grey-3">{{
          item.created_at | dateTime
        }}</app-accardion-col>
        <app-accardion-col class="col-xl-1 col-md-4 col-sm-6"
          >{{ item.summa }} {{ currency }}</app-accardion-col
        >
        <app-accardion-col :class="responsiveHeader" class="fines-item__status">
          <app-status color="green" :stroke="true">оплачен</app-status>
        </app-accardion-col>
      </template>
      <template #default>
        <app-accardion-col :class="responsiveContent">
          <div>
            <div class="color-grey-2 mb-10">{{ car.driver.fio }}</div>
            <div class="row mb-15">
              <div class="col color-grey-2">Нарушение:</div>
              <div class="col color-grey-1">
                от {{ item.issue_date | moment("DD.MM.YYYY") }}
              </div>
            </div>
            <!-- <div class="mb-15">{{item.koap_text}}</div> -->
            <div class="row">
              <div class="col color-grey-2">Статья КоАп:</div>
              <div class="col color-grey-1">{{ item.koap_code }}</div>
            </div>
          </div>
          <div>
            <div class="row align-items-center mt-25">
              <div class="col-lg-3">
                <div class="font-md font-500">
                  {{ item.getPrice() }} {{ currency }}
                </div>
              </div>
              <div class="col-lg-3" v-if="item.hasSale()">
                <s class="font-md font-500 text-line-through"
                  >{{ item.getOldPrice() }} {{ currency }}</s
                >
              </div>
              <div class="col-lg-6">
                <div class="fines-item__sale" v-if="item.hasSale()">
                  -{{ item.discount }}% до
                  {{ item.discount_end_date | moment("DD.MM.YYYY") }}
                </div>
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
              {{ item.koap_text }}
            </div>
          </div>
          <div>
            <div class="color-grey-2 mb-10">Подразделение</div>
            <div>
              {{ item.division }}
            </div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="color-grey-2">Место и фото нарушения:</div>
          <div class="d-flex flex-wrap">
            <app-image
              :width="152"
              :height="88"
              :src="image"
              :shadow="true"
              class="mr-20 mb-20"
              v-for="(image, idx) in item.getImages()"
              :key="idx"
            />
          </div>
          <div>
            <div class="color-grey-2 mb-10">Адрес:</div>
            <div>{{ item.address }}</div>
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
import { Fine } from "@/models/fine.entity";
import { Car } from "@/models/car.entity";
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
  @Prop(Object) item: Fine;
  get responsiveHeader() {
    return "col-sm-6 col-md-4 col-xl-2";
  }
  get responsiveContent() {
    return "col-12 col-xl-4";
  }
  get car() {
    return this.item?.car || {} as Car
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
    justify-content: flex-end !important;
    @include lg {
      justify-content: flex-start !important;
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