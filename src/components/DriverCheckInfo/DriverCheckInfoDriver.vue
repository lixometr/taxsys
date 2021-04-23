<template>
  <div class="driver-check-info-driver page-items__item">
    <app-accardion :showArrow="false" :isOpen="true" headerClass="border">
      <template #header>
        <app-accardion-col :class="headerCol">
          <div>{{ item.name }} {{ item.lastname }} {{ item.surname }}</div>
        </app-accardion-col>
        <app-accardion-col :class="headerCol">
          <div class="driver-check-info-driver__header-item">
            <span> Паспорт</span>
            <span class="driver-check-info-driver__header-info">
              {{ item.NumberOfPassport }}
            </span>
            <svgCheckmarkCircle v-if="isPassportValid" />
          </div>
        </app-accardion-col>
        <app-accardion-col :class="headerCol">
          <div class="driver-check-info-driver__header-item">
            <span> В.У.</span>
            <span class="driver-check-info-driver__header-info">
              {{ item.SerialDriverLicense }}
            </span>
            <svgCheckmarkCircle v-if="isPassportValid" />
          </div>
        </app-accardion-col>
      </template>
      <template>
        <div class="w-100">
          <div class="row w-100 row-no-gutter" v-if="showLicense">
            <app-accardion-col class="col-12">
              <div class="color-violet font-md mb-0">Проверка В.У.</div>
            </app-accardion-col>
            <app-accardion-col :class="contentCol">
              <div class="row">
                <div class="col color-grey-3">Дата рождения:</div>
                <div class="col color-grey-2">
                  {{ item.DateOfBirth | moment("DD.MM.YYYY") }}
                </div>
              </div>
              <div class="row">
                <div class="col color-grey-3">Дата выдачи:</div>
                <div class="col color-grey-2">
                  {{ item.DateDriverLicense | moment("DD.MM.YYYY") }}
                </div>
              </div>
              <div class="row">
                <div class="col color-grey-3">Срок действия:</div>
                <div class="col color-grey-2">
                  {{ item.license_check.date | moment("DD.MM.YYYY") }}
                </div>
              </div>
              <div class="row">
                <div class="col color-grey-3">Категории ТС:</div>
                <div class="col color-grey-2">{{ licenseCheck.cat }}</div>
              </div>
            </app-accardion-col>
            <app-accardion-col
              :class="contentCol"
              v-for="(dec, idx) in decis"
              :key="idx"
            >
              <div class="color-grey-3 font-500">
                <span>Лишение права управления #{{ idx + 1 }}</span>
              </div>
              <div class="row">
                <div class="col color-grey-3">Дата постановления:</div>
                <div class="col color-grey-2">
                  {{ dec.date | moment("DD.MM.YYYY") }}
                </div>
              </div>
              <div class="row">
                <div class="col color-grey-3">Срок лишения:</div>
                <div class="col color-grey-2">{{ dec.srok }} мес</div>
              </div>
              <div class="row">
                <div class="col color-grey-3">Состояние:</div>
                <div class="col color-grey-2">{{ dec.comment }}</div>
              </div>
            </app-accardion-col>
          </div>
          <div
            v-if="loadingLicense"
            class="driver-check-info-driver-loading"
            ref="loadingContainer"
          ></div>
        </div>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgCheckmarkCircle from "@/assets/icons/checkmark_circle.svg";
import { DriverCheckEntity } from "@/models/driver-check.entity";
import useLoading from "@/compositions/useLoading";
import { computed, onMounted, ref, toRefs } from "@vue/composition-api";
interface IProps {
  [key: string]: any;
  item: DriverCheckEntity;
}
@Component({
  components: {
    svgCheckmarkCircle,
  },
  setup(props: IProps) {
    const { item } = toRefs<IProps>(props);
    const loadingContainer = ref<HTMLElement>(null);
    const loadingLicense = computed(() => {
      return (
        item.value.statuses.license !== "done" &&
        item.value.statuses.license !== "error"
      );
    });
    onMounted(() => {
      if (!loadingLicense.value) return;
      const { show } = useLoading({
        container: loadingContainer.value,
        isFullPage: false,
        width: 40,
        height: 40,
      });
      show();
    });

    return { loadingContainer, loadingLicense };
  },
})
export default class DriverCheckInfoDriver extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: DriverCheckEntity;
  get headerCol() {
    return "col-lg-4 font-md grey-1";
  }
  get contentCol() {
    return "col-lg-4";
  }
  get licenseCheck() {
    return this.item.license_check || {};
  }
  get showLicense() {
    return this.item.statuses.license === "done";
  }
  get isPassportValid() {
    return (
      this.item.statuses.passport === "done" &&
      !!this.item.passport_check?.is_valid_passport
    );
  }
  get decis() {
    try {
      const decisions = JSON.parse(this.item.license_check?.decis);
      return decisions || [];
    } catch (err) {
      return [];
    }
  }
}
</script>

<style lang="scss">
.driver-check-info-driver {
  &__header-info {
    font-weight: 500;
    margin: 0 1rem;
  }
  &__header-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  &-loading {
    position: relative;
    margin-top: 20px;
    height: 60px;
    display: flex;
    align-items: center;
    width: 100%;
  }
  svg {
    fill: none;
  }
}
</style>